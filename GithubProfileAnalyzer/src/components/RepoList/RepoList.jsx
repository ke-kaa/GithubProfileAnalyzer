import React from 'react'
import './RepoList.css'
// import LanguageChart from '../LanguageChart/LanguageChart'

export default function RepoList({name, stargazers_count, language, created_at, updated_at, forks_count}) {
  return (
    <div className='repo-card'>
        <div className='name-starcount'>
            {/* <p>{name}</p> */}
                <p><span>Repo Name: </span>{name}</p>

            <div className='star-count'>
                <p><span> Star count: </span>{stargazers_count}</p>

            </div>
        </div>
        <div className='repo-extra-info'>
            <div className='main-lang'>
                <p>{language}</p>
                <p>Language</p>
            </div>
            <div>
                <p>{created_at}</p>
                <p>Created</p>
            </div>
            <div>
                <p>{updated_at}</p>
                <p>Last Update</p>
            </div>
            <div>
                <p>{forks_count}</p>
                <img src="" alt="" className='fork-icon'/>
            </div>
        </div>

        {/* <LanguageChart /> */}
    </div>
  )
}

/* 
    repo name
    start count

    main language
    created at
    last update
    for count
    
    language chart
*/