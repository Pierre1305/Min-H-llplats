let siteId;
let input;
let savedInput;
let theSiteID;
let ArrayData = [];

function buildTable(data) {
  var table = document.getElementById("departureTable");

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
                        <td>${data[i].LineNumber}</td>
                        <td>${data[i].Destination}</td>
                        <td>${data[i].DisplayTime}</td>
                        <td>${data[i].TransportMode}</td>
                  </tr>`;
    table.innerHTML += row;
  }
}

//get station id
function getSiteId() {
  let theInput = document.getElementById("userInput").value;
  savedInput = theInput;

  console.log(theInput);

  const url3 = `http://api.sl.se/api2/typeahead.json?key=d958823023f445c3be6bc7be2d24e45b&searchstring=${theInput}&stationsonly=true`;

  fetch(url3)
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data.ResponseData[0]);

      let getSiteId = data.ResponseData[0].SiteId;
      console.log(getSiteId);
      theSiteID = getSiteId;

      useSiteID(getSiteId);
    })

    .catch(function (error) {
      console.log(error);
    });
}
//Tabel updateras per minut
setInterval(getSiteId, 60000);
function useSiteID(siteID) {
  const url2 = `http://api.sl.se/api2/realtimedeparturesv4.json?key=d9acceb0d7eb47528927be997fe327be&siteid=${siteID}&timewindow=15`;

  let emptyTable = document.getElementById("departureTable");
  emptyTable.innerHTML = "";

  fetch(url2)
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data.ResponseData);
      response = data.ResponseData;
      let allTransports = [
        response.Metros,
        response.Trains,
        response.Ships,
        response.Trams,
        response.Buses,
      ];

      allTransports.forEach((transportationMode) => {
        ArrayData = transportationMode;
        //  });

        console.log(ArrayData);

        buildTable(ArrayData);

        // var tableElmnt = document.getElementById("main");
        // tableElmnt.scrollIntoView();
      });
    });
}
