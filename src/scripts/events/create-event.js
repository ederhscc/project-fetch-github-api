import { baseUrl, eventsQuantity } from './src/scripts/variables.js';

async function createEvent(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantity}`);
    let createdEvents = await response.json();
    return createdEvents.filter((event) => event.type === 'CreateEvent');
}

export {createEvent};
