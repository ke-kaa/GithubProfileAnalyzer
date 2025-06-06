import React from 'react'
import { useState, useEffect } from 'react'
import "./UserCard.css"
// import {FaGithub} from "react-icons"


export default function UserCard({avatar_url, name, login, email, url, public_repos, created_at, followers, following}) {
    return (
        <div className='user-card'> 
            <div className='avatar-info'>
                <img src={avatar_url} alt="User's avatar" />
                <div>
                    <p><span>Full Name: </span>{name}</p>
                    <p><span>username: </span>{login}</p>
                    <p><span>email: </span>{email || 'N/A'}</p>
                </div>
            </div>
            <p className='github-url'>
                <span>Github:</span>
                <a href={url} target="_blank" rel="noopener noreferrer"></a>
            </p>
            <div className='extra-info'>
                <div>
                    <p>{public_repos}</p>
                    <p>Repositories</p>
                </div>
                <div>
                    <p>{new Date(created_at).toLocaleString()}</p>
                    <p>Joined</p>
                </div>
                <div>
                    <p>{followers}</p>
                    <p>Followers</p>
                </div>
                <div>
                    <p>{following}</p>
                    <p>Following</p>
                </div>
            </div>
        </div>
    )
}
