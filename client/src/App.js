import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [listOfPosts, setListOfPosts] = useState([]); 

  useEffect( () => {
    axios.get("http://localhost:5000/posts").then((response) => {
      setListOfPosts(response.data);

      console.log(listOfPosts);

    });
  }, []);


  return (
    <div className="App">
      {listOfPosts.map((list, key) => {
          return <div className='post'  key= {list.id}>
            <div>
                {list.title}
            </div>
            <div>{list.postText}</div>
            <div>User: {list.username} Date created: {list.createdAt}</div>

          </div>

        })}
    </div>
  );
}

export default App;
