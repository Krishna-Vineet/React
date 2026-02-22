import './repoModal.css'

import React, { useEffect } from 'react'

export const RepoModal = ({repo, handleClose}) => {
  
    useEffect(() => {
  const handleESCkey = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  window.addEventListener("keydown", handleESCkey);

  return () => {
    window.removeEventListener("keydown", handleESCkey);
  };
}, []);

    return (
        <div id="modalArea" onClick={handleClose}>
            
        <div onClick={(e) => e.stopPropagation()} id="modalBox">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                        <img src={repo?.owner?.avatar_url ?? 'https://imgs.search.brave.com/IY-tr7otmdSEzqRHuIAaBjZ1CAUdhLQOyM74Lp9w9u8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vcEl6V00v/TUFIQS1BcEl6V00v/MS90bC9jYW52YS1n/ZW5lcmljLXVzZXIt/aWNvbi1NQUhBLUFw/SXpXTS5wbmc'} alt="" className="w-12 h-12 rounded-full object-cover border border-orange-600" />
                    <div className="min-w-0 flex-1">
                        <div className="flex items-center space-x-1">
                                {repo?.name}
                        </div>
                        <a href={repo?.owner?.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" >
                            @{repo?.owner?.login}
                        </a>
                    </div>
                </div>
                <a href={repo?.html_url} target='_blank'>
                    <div className="button-bg rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100">
                        <button className="px-8 text-sm py-2.5 text-white rounded-full font-medium bg-green-800">
                            View on Github
                        </button>
                    </div>
                </a>
            </div>

            {/* Content */}
            <div className='content'>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {repo?.description ?? 'No Description available'}
                </p>
            </div>

            {/* Timestamp */}
            <div className='flex justify-around'>
            <div className="text-xs">Created : {new Date(repo?.created_at).toLocaleDateString()}</div>
            <div className="text-xs">Updated : {new Date(repo?.updated_at).toLocaleDateString()}</div>
            </div>
        </div>
        </div>
    )
}
