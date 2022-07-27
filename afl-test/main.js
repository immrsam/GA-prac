const targetElement = document.querySelector("#app");

// 1. Base URL (+ Path)
const baseUrl = "https://api.squiggle.com.au";
const path = "/?q=standings";
const endpoint = baseUrl + path;

// 2. Method (None - GET)
// 3. Query String / Parameters (None)
// 4. Headers (None)

const responseToJSObject = (res) => {
    return res.json();
}

const handleJSObject = (data) => {
    // console.log(data);
    // debugger;

    targetElement.innerHTML += getStandingsHtmlTable(data);
}

const getStandingsHtmlTable = (data) => {
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

    data.standings.forEach(function callback(e, index) {
        html += `
        <tr>
            <td>${index + 1}</td>
            <td>${e.name}</td>
            <td>${e.wins}</td>
            <td>${e.losses}</td>
            <td>${e.draws}</td>
            <td>${e.percentage.toFixed(2)}</td>
            <td>${e.pts}</td>
        </tr>
        `;
    });
    html += `</table>`;

    return html;
}

const getStandingsHtmlLi = (data) => {
    let html = ``;
    html += `<ul>`;
    data.standings.forEach(function callback(e, index) {
        html += `<li>${index + 1} - ${e.name}</li>`;
    });
    html += `</ul>`;

    return html;
}

fetch(endpoint).then(responseToJSObject).then(handleJSObject);