
import { useState } from 'react';
import './App.css'
import { useFindRepos } from './useFindRepos';
import { RepoCard } from './RepoCard';
import { RepoModal } from './RepoModal';

function App() {
  
  // const [repos, setRepos] = useState([])
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('');
  const [selectedRepo, setSelectedRepo] = useState(null)
  const repos = useFindRepos(userName);

  const searchUser = () => {
    console.log(`Input is ${input}`);
    setUserName(input)
  };

  const handleEnter = (e) => {
    if(e.key == 'Enter') searchUser();
  }

  return (
    <>
    <main>
      
      <h1>Github Lite</h1>
      <div id="input">
        <input type="text" placeholder='Enter Github Username...' value={input} onKeyDown={handleEnter} onChange={(e) => setInput(e.target.value)} name="" id="usernameInput" />
        <button onClick={searchUser}>Find Repos</button>
      </div>

      <div id='repoArea'>
        {repos.map((repo) => (
          <RepoCard handleRepoClick={() => setSelectedRepo(repo)} key={repo.id} repoName={repo.name} repoLang={repo.language} repoDescription={repo.description}/>
        ))}
      </div>
    </main>

    {selectedRepo && <RepoModal repo={selectedRepo} handleClose={() => setSelectedRepo(null)} />}
    </>
  )
}

export default App
