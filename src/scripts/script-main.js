import { getUser } from './services/get-user.js';
import { getRepositories } from './services/get-repositories.js';
import { getNumberFollowers } from './services/get-number-followers.js';
import { getNumberFollowing } from './services/get-number-following.js';

import { createEvent } from './events/create-event.js';
import { pushEvent } from './events/push-event.js';

import { user } from './objects/user.js';
import { screen } from './objects/screen.js';

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;
    if(validateEmptyInput(userName)) return;
    getUserData(userName);
});

// Adicionando um evente listener para verificar se o enter foi precionado no input
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;

    if (isEnterKeyPressed) {
        if(validateEmptyInput(userName)) return;
        getUserData(userName);
    } 
});

function validateEmptyInput(userName){
    if(userName.length === 0) {
        alert('Preencha o campo com o nome do usuário do GitHub');
        return true;
    }
}

async function getUserData(userName) {

    const userResponse = await getUser(userName);

    if(userResponse.message === 'Not Found') {
        screen.renderNotFound();
        return;
    }

    const repositoriesResponse = await getRepositories(userName);
    
    const numberFollowersResponse = await getNumberFollowers(userName);
    const numberFollowingResponse = await getNumberFollowing(userName);

    const createEventResponse = await createEvent(userName);
    const pushEventResponse = await await pushEvent(userName);

    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);
    
    user.setNumberOfFollowers(numberFollowersResponse);
    user.setNumberFollowing(numberFollowingResponse);

    user.setCreateEvents(createEventResponse);
    user.setPushEvents(pushEventResponse);
    
    screen.renderUser(user);
}
