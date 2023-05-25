import { baseUrl, eventsQuantity } from '../variables.js';

async function pushEvent(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantity}`);
    let pushedEvents = await response.json();
    return pushedEvents.filter((event) => event.type === 'PushEvent');
}

export {pushEvent};
