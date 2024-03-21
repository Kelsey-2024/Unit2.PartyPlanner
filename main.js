//confirmed that HTML and JS are now synced
//state
// const COHORT = "2402-FTB-ET-WEB-FT"; 
const API_URL ="https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events";

//empty array we're dumping our API info in
const state = {
  events: [],
};

//add references from HTML page
const eventList = document.querySelector(`#events`);

//Sync state with the API and rerender
async function render() {
  await getEvents();
  renderEvents();
}
render();
//Create a getEvents function that will fetch the URL
//create a variable called response that will fetch the API_URL
//Now we need 
//Use a try block to safety net our function

async function getEvents() {
  try{
    const response = await fetch (API_URL);
    const json = await response.json(); //we created a variable called json. JSON is actually a method on the body element
    console.log(json.data);
    state.events = json.data;
  } catch (err) {
    console.log(`Error has occurred`);
  }
}
getEvents();

/*
Update state with events from API
*/

//Render events from state
function renderEvents() {
  //loop through our object called state events
  //for each event
  //create li
  //use innerHTML or innerText to add the eventname
  //append to eventList

  //forEach
  // state.events.forEach((event) => {
  //   const li = document.createElement(`li`);
  //   li.innerHTML = `${event.name} - ${event.description}`;
  //   eventList.appendChild(li);
  // })

  //Map
  const eventLiElements = state.events.map((event) => {
    const li = document.createElement(`li`);
    li.innerText = `${event.name} - ${event.description}`;
    return li;
  })

  eventList.replaceChildren(...eventLiElements);
}

renderEvents();