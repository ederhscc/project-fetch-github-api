const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    createEvents: [],
    pushEvents: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
    },
    setNumberOfFollowers(numberFollowers) {
        this.followers = numberFollowers;
    },
    setNumberFollowing(numberFollowing) {
        this.following = numberFollowing;
    },
    setRepositories(repositories) {
        this.repositories = repositories;
    },
    setCreateEvents(createEvents) {
        this.createEvents = createEvents;
    },
    setPushEvents(pushEvents) {
        this.pushEvents = pushEvents;
    }
}

export {user};