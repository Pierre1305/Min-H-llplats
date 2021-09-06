

let siteId;
let input;
let savedInput;
let theSiteID;


/*function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.append(el);


}*/

/*function onClickButton() {
    let theInput = document.getElementById('userInput').value;
     getSiteId(theInput);

}*/

function getSiteId() {
    let theInput = document.getElementById('userInput').value;
    let api = "http://api.sl.se/api2/typeahead.json?";
    let key = "key=d958823023f445c3be6bc7be2d24e45b&searchstring=";
    let searchstring = "userInput";
    let rest = "&stationsonly=true"
    const url = api + key + searchstring + rest;


    // searchData = userInput;
    // let stationName = document.getElementById('stationName')
    // stationName.appendChild(document.createTextNode(searchData.charAt(0).toUpperCase() + searchData.slice(1)));
    // const url3 = "http://api.sl.se/api2/typeahead.json?key=d958823023f445c3be6bc7be2d24e45b&searchstring=theInput&stationsonly=true"

    fetch(url)

        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data.ResponseData[0]);
            // let stationName = document.getElementById('stationName')
            //  stationName.appendChild(document.createTextNode(searchData.charAt(0).toUpperCase() + searchData.slice(1)));
            let getSiteId = data.ResponseData[0].SiteId;
            theSiteID = getSiteId;
            //useSiteID(getSiteId);

        })

        .catch(function (error) {
            console.log(error);

        })



}



/*function useSiteID(siteID) {


    const url2 = "http://api.sl.se/api2/realtimedeparturesv4.json?key=d9acceb0d7eb47528927be997fe327be&siteid=${siteID}&timewindow=30";
    const url1 = "http://api.sl.se/api2/TravelPlannerV3_1/trip.json?key=9e75fc5e333d40dea5b38a33b3f5fcc7&originId=9192&destId=1002&searchForArrival=5";
    let pierre = document.getElementById('timeTable');
    pierre.innerHTML = "";
    fetch(url2)
        .then((response) => response.json())
        .then(function (data) {
            // console.log(data.ResponseData)

            for (let i = 0; i < data.ResponseData.length; i++) {
                // let firstDiv = createNode('div');


                let items = createNode('tr');
                // let busImage = createNode('img');
                let busNummer = createNode('td');
                let destination = createNode('td');
                // let span = createNode('td');
                let time = createNode('td');
                let availabeBus = document.getElementById('timeTable');
                // firstDiv.style.cssText += 'display: flex; float: left';
                // items.style.cssText += 'display: flex; flex-wrap: wrap;  padding: 10px; margin: auto';
                //time.style.cssText += 'float : right';

                // busImage.src = "Imag/busSymbol.jpg";
                // busImage.style.cssText += 'width: 20px';
                busNummer.innerHTML = data.ResponseData.Metros[i].LineNumber;
                destination.innerHTML = data.ResponseData.Metros[i].Destination;


                time.innerHTML = data.ResponseData.Metros[i].DisplayTime;

                // append(items, busImage);
                append(items, busNummer);
                append(items, destination);
                /* append(availabeBus, firstDiv);
                 append(items, firstDiv);
                 append(items, span);*/
              //  append(items, time);
              //  append(availabeBus, items);



          //  }






       // })








//}*/