import axios from 'axios';
const token = import.meta.env.VITE_GITHUB_TOKEN;

axios.interceptors.request.use(
    config => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }, error => {
        return Promise.reject(error);
    }
);

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