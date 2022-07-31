const targetElement = document.querySelector("#app");
const standingsElement = document.querySelector("#standings");
const teamInfoElement = document.querySelector("#team-info");
const liveGamesElement = document.querySelector("#live-scores");
let standingsTeams;
let selectedTeam = 1;

// 1. Base URL (+ Path)
const baseUrl = "https://api.squiggle.com.au";
const pathStandings = "/?q=standings";
let pathTeam = `?q=teams;team=`;
const liveGames = "?q=games;live=1";
let upcomingSchedule = `?q=games;complete=!100;team=`;
let thisYearSchedule = `?q=games;year=2022;team=`;

// 2. Method (None - GET)
// 3. Query String / Parameters (None)
// 4. Headers (None)

const responseToJSObject = (res) => {
    return res.json();
}

const handleJSObject = (route, data) => {
    // console.log(data);
    // debugger;
    buildPage(route, data);
}

const buildPage = (route, data) => {
    switch(route){
        case "standings":
            standingsElement.append(getStandingsHtmlTable(data));
            break;
        case "team":
            teamInfoElement.append(getTeamInfo(data));
            break;
        case "schedule":
            teamInfoElement.append(getTeamSchedule(data));
            break;
        case "live":
            // debugger;
            liveGamesElement.innerHTML = "";
            getLiveGames(data);
            break;
        default:
            break;
    }
}

const getTeamInfo = (data) => {

    const div = document.createElement('div');
    let html = `
    <h1>${data.teams[0].name}</h1>
    <img src="https://squiggle.com.au/${data.teams[0].logo}" alt="${data.teams[0].name}">
    <p>Since ${data.teams[0].debut}</p>

    `;
    // debugger;
    div.innerHTML = html;
    return div;
}

const getTeamSchedule = (data) => {

    const div = document.createElement('div');
    let html = `<p>Up coming schedule</p>`;
    html += `
    <table>
    <tr>
    <th>Round</th>
    <th>Home Team</th>
    <th>Home Score</th>
    <th>Away Team</th>
    <th>Away Score</th>
    <th>Venue</th>
    <th>Date</th>
    </tr>`;
    data.games.forEach((e, index) => {
        html += `
        <tr>
            <td>${e.round}</td>
            <td>${e.hteam}</td>
        `;
        if(e.complete === 100){html += `<td>${e.hgoals}.${e.hbehinds}.${e.hscore}</td>`}
        else{html += `<td>N/A</td>`}
        html += `
            <td>${e.ateam}</td>
        `;
        if(e.complete === 100){html += `<td>${e.hgoals}.${e.hbehinds}.${e.hscore}</td>`}
        else{html += `<td>N/A</td>`}
        html += `
            <td>${e.venue}</td>
            <td>${e.date}</td>
        </tr>
        `;
    })
    // debugger;
    div.innerHTML = html;
    return div;
}

const getStandingsHtmlTable = (data) => {
    const div = document.createElement('div');
    let html = ``;
    html += `
    <table>
    <tr>
    <th>Position</th>
    <th>Team</th>
    <th>W</th>
    <th>L</th>
    <th>D</th>
    <th>%</th>
    <th>Pts</th>
    </tr>`;
    // debugger;

    data.standings.forEach((e, index) => {
        html += `
        <tr>
        <td>${index + 1}</td>
        <td id="${e.id}" class="team-select">${e.name}</td>
        <td>${e.wins}</td>
        <td>${e.losses}</td>
        <td>${e.draws}</td>
        <td>${e.percentage.toFixed(2)}</td>
        <td>${e.pts}</td>
        </tr>
        `;
    });
    html += `</table>`;
    div.innerHTML = html;
    return div;
}

const getStandingsHtmlLi = (data) => {
    let html = ``;
    html += `<ul>`;
    data.standings.forEach((e, index) => {
        html += `<li>${index + 1} - ${e.name}</li>`;
    });
    html += `</ul>`;

    return html;
}

const getLiveGames = (data) => {
    data.games.forEach((e) => {
        const div = document.createElement('div');
        let html = ``;
        html += `
        <div class="live-game">
        <span class="live-venue">${e.timestr}</span>
        <span class="live-score-right">${e.venue}</span><br/>
        <span class="live-hteam">${e.hteam}</span><span class="live-score-right">${e.hgoals}.${e.hbehinds}.${e.hscore}</span><br/>
        <span class="live-ateam">${e.ateam}</span><span class="live-score-right">${e.agoals}.${e.abehinds}.${e.ascore}</span><br/>
        </div>
        `
        div.innerHTML = html;
        liveGamesElement.append(div);
    })

}

document.addEventListener("DOMContentLoaded", () =>{

    fetch(baseUrl + liveGames).then(responseToJSObject).then((data) => handleJSObject("live", data));
    window.setInterval(() => {
        fetch(baseUrl + liveGames).then(responseToJSObject).then((data) => handleJSObject("live", data))
    }, 5000);


    fetch(baseUrl + pathStandings).then(responseToJSObject).then((data) => handleJSObject("standings", data)).then(() => {
        standingsTeams = document.querySelectorAll(".team-select");
        standingsTeams.forEach((e) => {
            e.addEventListener("click", () => {
                const teamId = e.id;
                teamInfoElement.innerHTML = "";
                fetch(baseUrl + pathTeam + teamId).then(responseToJSObject).then((data) => handleJSObject("team", data));
                fetch(baseUrl + thisYearSchedule + teamId).then(responseToJSObject).then((data) => handleJSObject("schedule", data));
            })
        })
    }
    );
});