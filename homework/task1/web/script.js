// const container = document.getElementById("container");

// Step 1 and 2
// const stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];
const t1 = ["Central", "Redfern", "Burwood", "Strathfield", "Lidcombe", "Auburn", "Clyde", "Granville", "Harris Park", "Parramatta"];
const t2 = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown", "Stanmore", "Petersham", "Lewisham", "Summer Hill", "Ashfield", "Croydon", "Burwood", "Strathfield"];
const t3 = ["Town Hall", "Wynyard", "Circular Quay", "St. James", "Museum", "Central", "Redfern", "Erskineville", "St. Peters", "Sydenham", "Marrickville", "Dulwich Hill", "Hurlstone Park", "Canterbury", "Campsie", "Belmore", "Lakemba", "Wiley Park", "Punchbowl", "Bankstown", "Yagoona", "Birrong", "Sefton", "Chester Hill", "Leightonfield", "Villawood", "Carramar", "Cabramatta", "Warrick Farm", "Liverpool", "Regents Park", "Berala", "Lidcombe"];

const travelFrom = function(start, end, line = t2){
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

    const startIndex = line.findIndex(item => {
        return item.toLowerCase() === start.toLowerCase();
    });

    if(typeof line[startIndex] === 'undefined'){
        tripDetails.message = `${start} is not a valid station, please try again.`
        return tripDetails;
    }

    const endIndex = line.findIndex(item => {
        return item.toLowerCase() === end.toLowerCase();
    });

    if(typeof line[endIndex] === 'undefined'){
        tripDetails.message = `${end} is not a valid station, please try again.`
        return tripDetails;
    }

    tripDetails.correctDetails = true;
    tripDetails.stationOne = line[startIndex];
    tripDetails.stationTwo = line[endIndex];

    if(endIndex > startIndex){
        tripDetails.numberStops = endIndex - startIndex - 1;
        for(let i = startIndex; i <= endIndex; i++){
            tripDetails.tripMap += `- ${line[i]}\n`;
        }
    }else{
        tripDetails.numberStops = startIndex - endIndex - 1;
        for(let i = startIndex; i >= endIndex; i--){
            tripDetails.tripMap += `- ${line[i]}\n`;
        }
    }

    tripDetails.message = `To go from ${tripDetails.stationOne} to ${tripDetails.stationTwo} will take ${tripDetails.numberStops} stops`

    return tripDetails;
}

// ****Bonus****

// all the stations I could be bothered to type in, looked online for a list but nothing that would have made my life easier
const trainLines = {
    t1: ["Central", "Redfern", "Burwood", "Strathfield", "Lidcombe", "Auburn", "Clyde", "Granville", "Harris Park", "Parramatta"],
    t2: ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown", "Stanmore", "Petersham", "Lewisham", "Summer Hill", "Ashfield", "Croydon", "Burwood", "Strathfield"],
    t3: ["Town Hall", "Wynyard", "Circular Quay", "St. James", "Museum", "Central", "Redfern", "Erskineville", "St. Peters", "Sydenham", "Marrickville", "Dulwich Hill", "Hurlstone Park", "Canterbury", "Campsie", "Belmore", "Lakemba", "Wiley Park", "Punchbowl", "Bankstown", "Yagoona", "Birrong", "Sefton", "Chester Hill", "Leightonfield", "Villawood", "Carramar", "Cabramatta", "Warrick Farm", "Liverpool", "Regents Park", "Berala", "Lidcombe"]
}

// helper funcitons
const checkLineHasStation = function(line, station, tripDetails){
    if(line in trainLines){
        if(trainLines[line].includes(station)){
            if(tripDetails.startIndex !== -1){
                tripDetails.endIndex = trainLines[line].findIndex(item => {
                    return item.toLowerCase() === station.toLowerCase();
                });
            } else {
                tripDetails.startIndex = trainLines[line].findIndex(item => {
                    return item.toLowerCase() === station.toLowerCase();
                });
            }

        }else{
            tripDetails.message = `${station} is not a valid station, or on a different line. Please try again.`
            return tripDetails;
        }
    }else{
        tripDetails.message = `${line} is not a valid line. Please try again.`
        return tripDetails;
    }
    return tripDetails;
}

const getStationList = function(startIndex, tripDetails, line, stops){
    if(tripDetails.endIndex > startIndex){
        stops = tripDetails.endIndex - startIndex;
        for(let n = startIndex; n <= tripDetails.endIndex; n++){
            tripDetails.tripMap += `- ${trainLines[line][n]}\n`;
        }
    }else{
        stops = startIndex - tripDetails.endIndex - 1;
        for(let n = startIndex; n >= tripDetails.endIndex; n--){
            tripDetails.tripMap += `- ${trainLines[line][n]}\n`;
        }
    }
    tripDetails.lineNumberStops.push(stops);
    return tripDetails;
}

// main function to call
const travelFromLine = function(startLine, startStation, endLine, endStation){
    let tripDetails = {
        correctDetails: false,
        message: "",
        tripMap: "",
        numberStops: 0,
        startIndex: -1,
        endIndex: -1,
        lineNumberStops: [],
        changeOver: [],
        displayTrip: function(){
            return `${this.message}\n${this.tripMap}`;
        }
    };

    tripDetails = checkLineHasStation(startLine, startStation, tripDetails);
    tripDetails = checkLineHasStation(endLine, endStation, tripDetails);

    // check if the same line, already did that function ^^
    if(startLine === endLine){
        return tripDetails = travelFrom(startStation, endStation, endLine);
    } else if(trainLines[endLine].includes(startStation) && trainLines[endLine].includes(endStation)){
        return tripDetails = travelFrom(startStation, endStation, trainLines[endLine]);
    } else if(trainLines[startLine].includes(startStation) && trainLines[startLine].includes(endStation)){
        return tripDetails = travelFrom(startStation, endStation, trainLines[startLine]);
    }

    // insert data into tripDetails object
    tripDetails.correctDetails = true;
    tripDetails.stationOne = trainLines[startLine][tripDetails.startIndex];
    tripDetails.lineStart = startLine;
    tripDetails.stationTwo = trainLines[endLine][tripDetails.endIndex];
    tripDetails.lineEnd = endLine;

    // check if shares connecting stations lines connect to endStation
    const commonStations = trainLines[startLine].filter(value => trainLines[endLine].includes(value));

    // should always be more than zero commonStation, otherwise there is problem
    if(commonStations.length > 0){
        // find next station
        let nextConnection = function(){
            for(let i = tripDetails.startIndex; i > 0; i--){

                if(commonStations.includes(trainLines[startLine][i])){
                    let stopsToChangeOver = i - tripDetails.startIndex;
                    let stopsAfterChangeOver = 0;

                    if(tripDetails.startIndex > i){
                        stopsToChangeOver = tripDetails.startIndex - i;
                    }

                    tripDetails.lineNumberStops.push(stopsToChangeOver);
                    // list all the stations until the changeover
                    for(let n = tripDetails.startIndex; n > tripDetails.startIndex - stopsToChangeOver; n--){
                        tripDetails.tripMap += `- ${trainLines[startLine][n]}\n`;
                    }
                    // changeover message
                    tripDetails.tripMap += `- ${trainLines[startLine][i]} - change from line ${startLine} to line ${endLine}\n`;
                    // using the changeover stations index from startLine and searching the index of the endLine, we get the new starting index
                    let connectionStartIndex = trainLines[endLine].indexOf(trainLines[startLine][i]) -1;

                    tripDetails = getStationList(connectionStartIndex, tripDetails, endLine, stopsAfterChangeOver);

                    return trainLines[startLine][i];
                }
            }
            return null;
        } // end function

        tripDetails.changeOver.push(nextConnection());

    } else{
        console.log("Broken tracks");
    }

    tripDetails.numberStops = tripDetails.lineNumberStops[0] + tripDetails.lineNumberStops[1];

    // generate output message
    tripDetails.message = `To go from ${tripDetails.stationOne} to ${tripDetails.stationTwo} will take ${tripDetails.numberStops} stops`;

    return tripDetails;
}

console.log(travelFromLine("t1", "Harris Park", "t2", "St. James").displayTrip());
console.log(travelFromLine("t1", "Central", "t2", "Circular Quay").displayTrip());
console.log(travelFromLine("t1", "Parramatta", "t3", "Erskineville").displayTrip());