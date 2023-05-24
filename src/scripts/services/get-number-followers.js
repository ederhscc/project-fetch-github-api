import { baseUrl } from 'src/scripts/variables.js';

async function getNumberFollowers(userName) {
    const response = await fetch(`${baseUrl}/${userName}`);
    const numberFollowers = await response.json();
    return numberFollowers.followers;
}

export {getNumberFollowers};