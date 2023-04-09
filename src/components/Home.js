import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const snapshot = await getDocs(collection(db, 'posts'));
      const posts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });
  
      console.log('posts', posts);
      setPosts(posts);
    }

    fetchData();
  }, []);

  return (
    <div className="home">
      <h1> Tech Blog </h1>

      <div id="blog-by"> Ankur 
        {
          posts.map((post, index) => (
            <div className="post" key={`post-${index}`}>
              <Link to={`/post/${post.id}`}>
                <h3> {post.title} </h3>
              </Link>

              <p> {post.subtitle} </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
  
export default Home;
  