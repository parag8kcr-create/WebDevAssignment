// target the html elements like form, input fields, buttons

const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");


// take 2 sample events for Add sample event data

let sampleEvent = [
    {
        title: "web dev",
        date: "4-6-2026",
        category: "workshop",
        description: "ahgs h adg ihai dgjabds"
    },
    {
        title: "web dev2",
        date: "4-7-2026",
        category: "conference",
        description: "ahgs dsfchjh adg ihai dgjabds"
    }
];


// create event card which contains the user data and we store it inside a div

function createEventCard(eventData) {

    const card = document.createElement("div");

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;

    return card;
}


// add the created event and append inside the event container

function addEvent(eventData) {

    // if empty-state is present then remove it when new card will be added
    const emptyState = document.getElementById("empty-state");
    if (emptyState) emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
}


// form handling using submit event

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // eventData stores the user given value
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);

    
});
