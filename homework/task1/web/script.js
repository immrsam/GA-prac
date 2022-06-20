const container = document.getElementById("container");

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
        tripDetails.numberStops = endIndex - startIndex;
        for(let i = startIndex; i <= endIndex; i++){
            tripDetails.tripMap += `- ${stations[i]}\n`;
        }
    }else{
        tripDetails.numberStops = startIndex - endIndex;
        for(let i = startIndex; i >= endIndex; i--){
            tripDetails.tripMap += `- ${stations[i]}\n`;
        }
    }

    tripDetails.message = `To go from ${tripDetails.stationOne} to ${tripDetails.stationTwo} will take ${tripDetails.numberStops} stops total`

    return tripDetails;
}

console.log(travelFrom("St. James", "Redfern").displayTrip());
console.log(travelFrom("Newtown", "Museum").displayTrip());
console.log(travelFrom("bbb", "aaa").displayTrip());