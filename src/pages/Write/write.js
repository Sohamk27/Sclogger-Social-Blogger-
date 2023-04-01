import React from 'react'
import './write.css'
import img6 from '../../Images/img6.jpg'
import {useState, useContext} from 'react'
import axios from 'axios'
import {Context} from '../../context/Context'

function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const {user} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try{
        await axios.post("/upload", data)
      }
      catch(err){
      }
      try{
        const res = await axios.post("/posts", newPost);
        window.location.replace("/post/" + res.data._id);
      }
      catch(err){
      }
    }
  }
  return (
    <div className="write">
      {file && (
        <img 
            className="writeimg" 
            src={URL.createObjectURL(file)} 
            alt="" 
        />
      )}
      <form className="writeform" onSubmit={handleSubmit}>
        <div className="writeformgroup">
            <label htmlFor="fileinput">
                <i class="writeicon fa-solid fa-plus"></i>
            </label>
            <input 
              type="file" 
              id="fileinput" 
              style={{display:"none"}} 
              onChange={e=>setFile(e.target.files[0])}   
            />
            <input 
              type="text" 
              placeholder="Title" 
              className="writeinput" 
              autofocus={true} 
              onChange={e=>setTitle(e.target.value)}
            />
        </div>
        <div className="writeformgroup">
            <textarea 
                placeholder="Tell your story..." 
                type="text" 
                className="writeinput writetext"
                onChange={e=>setDescription(e.target.value)}
            ></textarea>
        </div>
        <button className="writesubmit" type="submit">Publish</button>
      </form>
    </div>
  )
}

export default Write
