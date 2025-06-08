import React from 'react'
import './RepoList.css'
import LanguageChart from '../LanguageChart/LanguageChart'
import forkIcon from '../../assets/icons/forkIcon.png'
import starIcon from '../../assets/icons/starIcon.png'

export default function RepoList({name, stargazers_count, language, created_at, updated_at, forks_count, username}) {
    return (
        <div className='repo-card'>
            <div className='name-starcount'>
                <p>{name}</p>
                
                <div className='star-count'>
                    <img src={starIcon} alt="" className='star-icon'/>
                    <span>{stargazers_count}</span>   
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
                    <img src={forkIcon} alt="" className='fork-icon'/>
                </div>
            </div>
            <LanguageChart  user={username} repo={name}/>
        </div>
    )
}