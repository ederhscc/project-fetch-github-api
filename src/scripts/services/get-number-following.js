import { baseUrl } from 'src/scripts/variables.js';

async function getNumberFollowing(userName) {
    const response = await fetch(`${baseUrl}/${userName}`);
    const numberFollowing = await response.json();
    return numberFollowing.following;
}

export {getNumberFollowing};
