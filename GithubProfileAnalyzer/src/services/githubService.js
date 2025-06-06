// API calls to Github: fetch user data, fetch user repos, fetch repo languages
// https://api.github.com/users/{username}
// https://api.github.com/users/{username}/repos
// https://api.github.com/users/{username}/repos/languages 
// https://api.github.com/repos/user/languages

import axios from 'axios';

export const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};

export const fetchUserRepos = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response.data;
};

export const fetchRepoLanguages = async (languagesUrl) => {
    const response = await axios.get(languagesUrl);
    return response.data;
};