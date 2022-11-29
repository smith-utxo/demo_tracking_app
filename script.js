const form = document.getElementById("forms");
const populateResults = document.getElementById("populateResults");
const sampleNumbers = document.querySelector(".sampleNumbers");
let paragraph = document.createElement("p");
paragraph.setAttribute("id", "stylePara");

sampleNumbers.addEventListener("click", function (e) {
  let trackingInfo = document.getElementById("trackingInfo");
  trackingInfo.value = e.target.innerText;
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const trackingInfo = document.getElementById("trackingInfo").value;
  populateResults.innerHTML = ""; // clear previous results
  populateData(trackingInfo);
});

function populateData(trackingInfo) {
  for (let i = 0; i < trackingSeedData.length; i++) {
    if (trackingInfo == trackingSeedData[i].id) {
      let seed = trackingSeedData[i];
      paragraph.textContent = `      
      Status: ${seed.Status} \r\n
      Date Shipped: ${seed.Date_Shipped} \r\n
      Estimated Delivery Date: ${seed.Estimated_Delivery_Date} \r\n
      Destination: ${seed.Destination}`;
      populateResults.appendChild(paragraph);
      // console.log(trackingSeedData[i].Date_Shipped);
      return;
    }
  }
  paragraph.textContent = `Unable to Locate Tracking Number!`;
  populateResults.appendChild(paragraph);
}

const trackingSeedData = [
  {
    id: 874392773,
    Status: "In Route",
    Date_Shipped: "11/21/2022",
    Estimated_Delivery_Date: "12/01/2022",
    Destination: "Memphis, TN",
  },
  {
    id: 956765443,
    Status: "In Route",
    Date_Shipped: "11/24/2022",
    Estimated_Delivery_Date: "12/04/2022",
    Destination: "Dallas, TX",
  },
  {
    id: 880376541,
    Status: "Delivered",
    Date_Shipped: "11/09/2022",
    Estimated_Delivery_Date: "11/15/2022",
    Destination: "Rochester, NY",
  },
  {
    id: 664758762,
    Status: "In Route",
    Date_Shipped: "11/17/2022",
    Estimated_Delivery_Date: "11/30/2022",
    Destination: "Tallahassee, FL",
  },
  {
    id: 885765345,
    Status: "In Route",
    Date_Shipped: "11/19/2022",
    Estimated_Delivery_Date: "12/01/2022",
    Destination: "St. Paul, MN",
  },
];

// console.log(trackingSeedData[0].Status); // equals In Route!
