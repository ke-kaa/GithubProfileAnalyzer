import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import WebInfo from '../components/WebInfo/WebInfo';
import UserCard from '../components/UserCard/UserCard';
import RepoList from '../components/RepoList/RepoList';
import { fetchUserData, fetchUserRepos, fetchRepoLanguages } from '../services/githubService';


export default function HomePage() {
    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [reposData, setReposData] = useState([])

    const handleSearch = async (username) => {
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

        };
        setLoading(false)
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {!username && <WebInfo />}
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
// const HomePage = () => {
//     const [error, setError] = useState(null);

//     const handleSearch = async (username) => {
//         setError(null);

//         try {
//         const reposWithLanguages = await Promise.all(
//             repos.map(async (repo) => {
//             const languages = await fetchRepoLanguages(repo.languages_url);
//             return { ...repo, languages };
//             })
//         );

//         setUserData(user);
//         setReposData(reposWithLanguages);
//         } catch (err) {
//         setError('User not found or GitHub API error.');
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="container">
//         <SearchBar onSearch={handleSearch} error={error} />
        
//         {/* {loading && <p>Loading...</p>} */}

//         {/* {!userData && !loading && !error && <WebInfo />} */}

//         {userData && <UserCard user={userData} />}

//         {reposData.length > 0 &&
//             reposData.map((repo) => (
//             <RepoCard key={repo.id} repo={repo} languagesData={repo.languages} />
//             ))}
//         </div>
//     );
// };

// export default HomePage;
