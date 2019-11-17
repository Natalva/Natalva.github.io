console.log('Hello, Sheet!');


// update on dom load
window.onload = requestJSON;

// update every 10 seconds
setInterval(requestJSON, 10000);

// request data from google sheets
function requestJSON() {
  fetch('https://spreadsheets.google.com/feeds/list/1IeMPtv_kTuHtb28tzQ2oJeBGbFfwQ_Dv4VRnANUxdOk/default/public/values?alt=json')
    .then(response => response.json())
    .then(gotJSON);
}

// recieve response from google sheets
function gotJSON(json) {
  console.log('Update Data');
  const entries = json.feed.entry;

  const studentList = document.getElementById('facts');

  // clear existing items
  studentList.innerHTML = '';

  // add new items from JSON
  // eslint-disable-next-line
  for (const entry of entries) {
    // alias data
    const names = entry.gsx$names.$t;
  

    // build li w/ template
    const newLi = document.createElement('li');
    newLi.innerHTML = `<a class = name>NAME:</a> ${names}<br><mark>`;
    studentList.appendChild(newLi);
  }

}