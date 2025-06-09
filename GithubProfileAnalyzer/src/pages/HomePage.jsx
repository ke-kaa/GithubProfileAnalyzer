import React, { useState } from 'react';
import './HomePage.css'
import SearchBar from '../components/SearchBar/SearchBar';
import WebInfo from '../components/WebInfo/WebInfo';
import UserCard from '../components/UserCard/UserCard';
import RepoList from '../components/RepoList/RepoList';
import Loading from '../components/Loading/Loading';
import { fetchUserData, fetchUserRepos } from '../services/githubService';


export default function HomePage() {
    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [reposData, setReposData] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async (username) => {
        setError(null);
        setUsername(username);
        setLoading(true);
        setUserData(null);
        setReposData([])

        try {
            const user = await fetchUserData(username);
            const repos = await fetchUserRepos(username);

            setUserData(user);
            setReposData(repos);
        }catch (e){
            setError('User not found or GitHub API error.')
        };
        setLoading(false)
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {loading && (
                <div className='loading-center'>
                    <Loading className="loading" />
                </div>
            )
            }
            {!username && !error &&<WebInfo />}
            {error && (
                <div className='error-center'>
                    <p className='error-number'>404</p>
                    {error}
                </div>
                )}
            {userData && (
                <>
                    <UserCard
                        avatar_url={userData.avatar_url}
                        name={userData.name}
                        login={userData.login}
                        email={userData.email}
                        url={userData.url}
                        public_repos={userData.public_repos}
                        created_at={userData.created_at}
                        followers={userData.followers}
                        following={userData.following}
                    />
                    <div className="homepage-repo-list">
                    {reposData && reposData.length > 0 &&
                        reposData.map(repo => (
                            <RepoList  
                                key={repo.id}
                                name={repo.name}
                                stargazers_count={repo.stargazers_count}
                                language={repo.language}
                                created_at={repo.created_at}
                                updated_at={repo.updated_at}
                                forks_count={repo.forks_count}
                                username={username}
                            />
                        ))
                    }
                    </div>
                </>
            )}             
        </div>
    )

}