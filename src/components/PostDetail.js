import { db } from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const [ post, setPost ] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(collection(db, 'posts'), postId);
      const snapshot = await getDoc(docRef);
  
      console.log('snapshot', snapshot.data());
      setPost(snapshot.data());
    }

    fetchData();
  }, []);

  return (
    <div className="post-detail">
      <h1> {post.title} </h1>
      <p> {post.content} </p>
    </div>
  );
}
  
export default PostDetail;