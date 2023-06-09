import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useFormInput } from "../hooks";

function CreatePost() {
  const title = useFormInput('');
  const subtitle = useFormInput('');
  const content = useFormInput('');

  async function handleSubmit(e) {
    e.preventDefault(); // to stop automatic page reload after form submission
    
    try {
      await addDoc(collection(db, 'posts'), {
        title: title.value,
        subtitle: subtitle.value,
        content: content.value,
        createdAt: new Date()
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="create-post">
      <h1> Create Post </h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label> Title </label>
          <input {...title} />
        </div>
        
        <div className="form-field">
          <label> Subtitle </label>
          <input {...subtitle} />
        </div>

        <div className="form-field">
          <label> Content </label>
          <textarea {...content}></textarea>
        </div>

        <button className="create-post-btn"> Create Post </button>
      </form>
    </div>
  );
}
  
export default CreatePost;
  