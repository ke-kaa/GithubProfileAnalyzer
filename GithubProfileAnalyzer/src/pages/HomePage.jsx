import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import UserCard from '../components/UserCard/UserCard';
// import RepoCard from '../components/RepoCard/RepoCard';
import WebInfo from '../components/WebInfo/WebInfo';
// import { fetchUserData, fetchUserRepos, fetchRepoLanguages } from '../services/githubAPI';

const HomePage = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [reposData, setReposData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (username) => {
        setUsername(username);
        setLoading(true);
        setError(null);
        setUserData(null);
        setReposData([]);

        try {
        const user = await fetchUserData(username);
        const repos = await fetchUserRepos(username);

        const reposWithLanguages = await Promise.all(
            repos.map(async (repo) => {
            const languages = await fetchRepoLanguages(repo.languages_url);
            return { ...repo, languages };
            })
        );

        setUserData(user);
        setReposData(reposWithLanguages);
        } catch (err) {
        setError('User not found or GitHub API error.');
        }

        setLoading(false);
    };

    return (
        <div className="container">
        <SearchBar onSearch={handleSearch} error={error} />
        
        {/* {loading && <p>Loading...</p>} */}

        {/* {!userData && !loading && !error && <WebInfo />} */}

        {userData && <UserCard user={userData} />}

        {reposData.length > 0 &&
            reposData.map((repo) => (
            <RepoCard key={repo.id} repo={repo} languagesData={repo.languages} />
            ))}
        </div>
    );
};

export default HomePage;
