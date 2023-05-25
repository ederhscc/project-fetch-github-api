const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        // Montar o html que será embedado na div profile-data
        // Perceba o uso do operador de coalecência nula. Se o que busco for null ele mostrará um texto alternativo
        this.userProfile.innerHTML = `<div class= "info">
                                        <img src= "${user.avatarUrl}" alt= "foto do perfil do usuário" />
                                        <div class="data">
                                             <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                             <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
                                             <p>Seguidores: 👥${user.followers}</p>
                                             <p>Seguindo: ${user.following}</p>
                                        </div>
                                    </div>`;
        let repositoriesItens = '';

        user.repositories.forEach(repo => {
                                            repositoriesItens += `<li><a href="${repo.url}" target="_blank">
                                                                    ${repo.name}<br/>
                                                                    <div class= "repositories-property">
                                                                        <div class= "property">
                                                                            🍴${repo.forks}
                                                                        </div>
                                                                        <div class= "property">
                                                                            ⭐${repo.stargazers_count}
                                                                        </div>
                                                                        <div class= "property">
                                                                            👀${repo.watchers}
                                                                        </div>
                                                                        <div class= "property">
                                                                            📚${repo.language}
                                                                        </div>
                                                                    </div>
                                                                 </a></li>`;
                                    });
        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class= "repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`;
        }
        let pushEventsItens = '';
        user.pushEvents.forEach(event => {
                                            pushEventsItens += `<li>${event.repo.name} - ${event.payload.commits[0].message}</li>`;
        });
        
        let createEventsItens = '';
        user.createEvents.forEach(event => {
                                            createEventsItens += `<li>${event.repo.name} - ${event.payload.ref_type}</li>`;
        });

        if (user.createEvents.length > 0 || user.pushEvents.length > 0) {
            this.userProfile.innerHTML +=  `<div class= "events section">
                                                <h3>Eventos</h3>
                                                <ul>${pushEventsItens}</ul>
                                                <ul>${createEventsItens}</ul>
                                            </div>`;
        } else {
            this.userProfile.innerHTML += `<h3>Eventos do usuário não encontrado! 😥</h3>` 
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = `<h3>Usuário não encontrado! 😥</h3>`
    }
}

export { screen };