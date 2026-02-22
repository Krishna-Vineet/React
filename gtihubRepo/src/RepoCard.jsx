import React, { useState } from 'react'
import './repoCard.css'

export const RepoCard = ({
repoName,
repoLang = 'txt',
repoDescription = "No description available",
handleRepoClick
}) => {


  return (
    <div className="repoCard" onClick={handleRepoClick && handleRepoClick}>
        <div className="repoCardHeading">
            <h2>{repoName}</h2>
            <p>{repoLang ?? 'Text'}</p>
        </div>
        <p className='description'>{repoDescription ?? "No description available"}</p>
    </div>
  )
}
