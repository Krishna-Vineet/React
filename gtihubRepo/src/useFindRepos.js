import { useEffect, useState } from "react";

const useFindRepos = (username) => {
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    if (!username) {
      setRepoList([]);
      return;
    }

    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );

        if (!response.ok) {
          // invalid user, 404, etc.
          setRepoList([]);
          console.log(`${username} is an invalid Github username.`);
          return;
        }
        
        const data = await response.json();
        
        if (Array.isArray(data)) {
            setRepoList(data);
          console.log(repoList);
          
        } else {
            setRepoList([]);
            console.log(`${username} is an invalid Github username.`);
            
        }

    } catch (error) {
        console.error("Fetch error:", error);
        setRepoList([]);
        console.log(`${username} is an invalid Github username.`);
      }
    };

    fetchRepos();
  }, [username]);

  return repoList;
};

export { useFindRepos };