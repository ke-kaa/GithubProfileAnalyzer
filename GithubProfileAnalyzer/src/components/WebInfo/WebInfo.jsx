import React from 'react'
import './WebInfo.css'

export default function WebInfo() {
    return (
        <div className='web-info'>

            <h3 className='center'>Github Profile Analyzer</h3>

            <p className='center'>"Visualize GitHub repositories, languages, and stars in one click." </p>

            <div className='services-list'>
                <p className='center'>Enter a Github username to:</p>
                <div className='services'>
                    <p className="item-text"><span className='number-circle'>1</span>See a breakdown of programming languages used.</p>
                    <p className="item-text"><span className='number-circle'>2</span>View stars per repository.</p>
                    <p className="item-text"><span className='number-circle'>3</span> Get a summary of their public Github activity.</p>
                </div>
            </div>
        </div>
    )
}
