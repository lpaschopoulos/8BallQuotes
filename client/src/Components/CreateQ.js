import { useState } from "react";
import axios from "axios";

function CreateQuote() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [urlImage, setUrlImage] = useState("");

  async function createQ(event) {
    event.preventDefault();
    console.log("create")
    let newQuote = {
      content: content,
      author: author,
      urlImage: urlImage || "",
      createdAt: Date()
    };
    try {
      let response = await axios.post("http://localhost:3636/quote/", newQuote)
      if (response.status === 200) {
        alert("Quote created successfully!")
      } else {
        alert("Error")
      }
    } catch (error) {
      console.log('create quote error', error);
    }
  }


  return ( 
    <form onSubmit={createQ} className="form" >
      <label htmlFor="content">Content:</label>
      <textarea name="content"
      id="content"
      cols="30"
      rows="5"
      value={content}
      onChange={(event) => setContent(event.target.value)}
      >  
      </textarea>

      <br />

      <label htmlFor="author">Author:</label>
      <input
      type="text"
      value={author}
      onChange={(event) => setAuthor(event.target.value)} 
      />

      <br />

<label htmlFor="imageUrl">imageUrl:</label>
      <input
      type="text"
      value={urlImage}
      onChange={(event) => setUrlImage(event.target.value)} 
      />

      <br />

      <button type='submit'>Create Quote</button>

    </form>
   );
}

export default CreateQuote;