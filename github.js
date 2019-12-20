class Github{
    constructor(){
        this.client_ID = '238186e5885f41b1aa3e';
        this.client_secret = 'eb8a2bcb3520e35f3225dc0e8a12317bbce72a55';
        this.repos_count = 10;
        this.repos_sort = 'created : asc';
        this.user = 'rinnasnow';
        this.apiUrl = 'https://api.github.com/users/';
    }

    async getUserData(){
        
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

        const profileResponce = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponce.json();
        const repos = await reposResponse.json();
       
        return {
            profile,
            repos
        }
    }

}