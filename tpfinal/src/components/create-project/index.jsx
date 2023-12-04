import React from "react";
import "./index.scss";
import { useState } from "react";
import { postProject } from "@/utils/projectManager";

function CreateProject() {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);

  const handleNew = (event) => {
    event.preventDefault();
    postProject(name,description,icon);
  };

  return (
    <div className="create-project-container">
      <form>
        <input
          className="text-field name"
          type="text"
          placeholder="Nombre del proyecto"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <textarea
          rows={10}
          className="text-field desc"
          type="text"
          placeholder="Descripcion del proyecto"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></textarea>
        <div className="icon-selector">
          <p>selecciona un icono!</p>
          <button className="icon" type="Button"
            onClick={()=>setIcon("🚀")}
          >🚀</button>
          <button className="icon" type="Button"
            onClick={()=>setIcon("🔍")}
          >🔍</button>
          <button className="icon" type="Button"
            onClick={()=>setIcon("📈")}
          >📈</button>
          <button className="icon" type="Button"
            onClick={()=>setIcon("📝")}
          >📝</button>
          <button className="icon" type="Button"
            onClick={()=>setIcon("🎯")}
          >🎯</button>
        </div>
        <button className="create-project-submit"
          onClick={handleNew}
        >Submit</button>
      </form>
    </div>
  );
}

export default CreateProject;
