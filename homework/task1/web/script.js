// const container = document.getElementById("container");

// Step 1 and 2
const stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];

const travelFrom = function(start, end){
    let tripDetails = {
        correctDetails: false,
        stationOne: "",
        stationTwo: "",
        numberStops: 0,
        message: "",
        tripMap: "",
        displayTrip: function(){
            return `${this.message}\n${this.tripMap}`;
        }
    };

    const startIndex = stations.findIndex(item => {
        return item.toLowerCase() === start.toLowerCase();
    });

    if(typeof stations[startIndex] === 'undefined'){
        tripDetails.message = `${start} is not a valid station, please try again.`
        return tripDetails;
    }

    const endIndex = stations.findIndex(item => {
        return item.toLowerCase() === end.toLowerCase();
    });

    if(typeof stations[endIndex] === 'undefined'){
        tripDetails.message = `${end} is not a valid station, please try again.`
        return tripDetails;
    }

    tripDetails.correctDetails = true;
    tripDetails.stationOne = stations[startIndex];
    tripDetails.stationTwo = stations[endIndex];

    if(endIndex > startIndex){
        tripDetails.numberStops = endIndex - startIndex - 1;
        for(let i = startIndex; i <= endIndex; i++){
            tripDetails.tripMap += `- ${stations[i]}\n`;
        }
    }else{
        tripDetails.numberStops = startIndex - endIndex - 1;
        for(let i = startIndex; i >= endIndex; i--){
            tripDetails.tripMap += `- ${stations[i]}\n`;
        }
    }

    tripDetails.message = `To go from ${tripDetails.stationOne} to ${tripDetails.stationTwo} will take ${tripDetails.numberStops} stops`

    return tripDetails;
}

console.log(travelFrom("St. James", "Redfern").displayTrip());
console.log(travelFrom("Newtown", "Museum").displayTrip());
console.log(travelFrom("bbb", "aaa").displayTrip());

// Bonus
const trainLines = {
    t1: ["Central", "Redfern", "Burwood", "Strathfield", "Lidcombe", "Auburn", "Clyde", "Granville", "Harris Park", "Parramatta"],
    t2: ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown", "Stanmore", "Petersham", "Lewisham", "Summer Hill", "Ashfield", "Croydon", "Burwood", "Strathfield"],
    t3: ["Town Hall", "Wynyard", "Circular Quay", "St. James", "Museum", "Central", "Redfern", "Erskineville", "St. Peters", "Sydenham", "Marrickville", "Dulwich Hill", "Hurlstone Park", "Canterbury", "Campsie", "Belmore", "Lakemba", "Wiley Park", "Punchbowl", "Bankstown", "Yagoona", "Birrong", "Sefton", "Chester Hill", "Leightonfield", "Villawood", "Carramar", "Cabramatta", "Warrick Farm", "Liverpool", "Regents Park", "Berala", "Lidcombe"]
}

const travelFromLine = function(startLine, startStation, endLine, endStation){
    let tripDetails = {
        message: "",
        // changeOverMessage: "",
        tripMap: "",
        numberStops: 0,
        displayTrip: function(){
            return `${this.message}\n${this.tripMap}`;
        }
    };

    let startIndex = -1;
    let endIndex = -1;

    // check if startLine has startStation
    for (let l1 in trainLines){
        if(startLine === l1){
            startIndex = trainLines[l1].findIndex(item => {
                return item.toLowerCase() === startStation.toLowerCase();
            });
        }
    }

    if(typeof trainLines[startLine][startIndex] === 'undefined'){
        tripDetails.message = `${startStation} is not a valid station, or on a different line. Please try again.`
        return tripDetails;
    }

    // check if endLine has endStation
    for (let l2 in trainLines){
        if(endLine === l2){
            endIndex = trainLines[l2].findIndex(item => {
                return item.toLowerCase() === endStation.toLowerCase();
            });
        }
    }

    if(typeof trainLines[endLine][endIndex] === 'undefined'){
        tripDetails.message = `${endStation} is not a valid station, or on a different line. Please try again.`
        return tripDetails;
    }

    // check if the same line, already did that function ^^
    if(startLine === endLine){
        return tripDetails = travelFrom(startStation, endStation);
    }

    tripDetails.correctDetails = true;
    tripDetails.stationOne = trainLines[startLine][startIndex];
    tripDetails.lineStart = startLine;
    tripDetails.stationTwo = trainLines[endLine][endIndex];
    tripDetails.lineEnd = endLine;
    tripDetails.lineNumberStops = [];

    tripDetails.changeOver = [];


    // check if shares connecting stations lines connect to endStation
    const commonStations = trainLines[startLine].filter(value => trainLines[endLine].includes(value));
    if(commonStations.length > 0){
        // find next station
        let nextConnection = function(){
            for(let i = startIndex; i > 0; i--){
                if(commonStations.includes(trainLines[startLine][i])){
                    let stopsToChangeOver = i - startIndex;
                    if(startIndex > i){
                        stopsToChangeOver = startIndex - i;
                    }
                    // console.log(`Stops to ${trainLines[startLine][i]} is ${stopsToChangeOver}`);

                    tripDetails.lineNumberStops.push(stopsToChangeOver);

                    for(let n = startIndex; n > startIndex - stopsToChangeOver; n--){
                        tripDetails.tripMap += `- ${trainLines[startLine][n]}\n`;
                    }

                    tripDetails.tripMap += `- ${trainLines[startLine][i]} - change from line ${startLine} to line ${endLine}`;

                    let connectionStartIndex = trainLines[endLine].indexOf(trainLines[startLine][i]);

                    let stopsAfterChangeOver = 0;

                    if(endIndex > connectionStartIndex){
                        stopsAfterChangeOver = endIndex - connectionStartIndex;
                        for(let n = connectionStartIndex; n <= endIndex; n++){
                            tripDetails.tripMap += `- ${trainLines[endLine][n]}\n`;
                        }
                    }else{
                        stopsAfterChangeOver = connectionStartIndex - endIndex - 1;
                        for(let n = connectionStartIndex; n >= endIndex; n--){
                            tripDetails.tripMap += `- ${trainLines[endLine][n]}\n`;
                        }
                    }

                    tripDetails.lineNumberStops.push(stopsAfterChangeOver);

                    return trainLines[startLine][i];
                }
            }
            return null;
        }


        tripDetails.changeOver.push(nextConnection());
        // console.log(tripDetails);

    } else{
        // if not, check if connection stations have connection stations that connect to endStation(loop)
        console.log("Broken tracks");
    }

    tripDetails.numberStops = tripDetails.lineNumberStops[0] + tripDetails.lineNumberStops[1];

    // generate output message
    tripDetails.message = `To go from ${tripDetails.stationOne} to ${tripDetails.stationTwo} will take ${tripDetails.numberStops} stops`;

    return tripDetails;
}

console.log(travelFromLine("t2", "Stanmore", "t3", "Canterbury").displayTrip());
console.log(travelFromLine("t2", "Stanmore", "t3", "Wynyard").displayTrip());
console.log(travelFromLine("t1", "Parramatta", "t3", "Belmore").displayTrip());
console.log(travelFromLine("t1", "Parramatta", "t3", "belmore").displayTrip());