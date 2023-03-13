import React from 'react'
import './write.css'

function write() {
  return (
    <div className="write">
        <img 
            className="writeimg" 
            src="../../Images/img6.jpg" 
            alt="" 
        />
      <form className="writeform">
        <div className="writeformgroup">
            <label htmlFor="fileinput">
                <i class="writeicon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileinput" style={{display:"none"}} />
            <input type="text" placeholder="Title" className="writeinput" autofocus={true} />
        </div>
        <div className="writeformgroup">
            <textarea 
                placeholder="Tell your story..." 
                type="text" 
                className="writeinput writetext"
            ></textarea>
        </div>
        <button className="writesubmit">Publish</button>
      </form>
    </div>
  )
}

export default write
