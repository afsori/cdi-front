import React from "react";
import "./content.scss";

function Content(props) {
  // console.log("this data", props.data);
  return (
    <div className="container wrapper-card">
      {props.data.map((result) => {
        return (
          <div className="card" key={result.id}>
            <div className="gambar">
              <img src={result.photo} alt="dumy-imag" />
            </div>
            <p>{result.firstName}</p>
            <p>{result.lastName}</p>
            <div className="wrapper-button-cta">
              <button className="edit" onClick={() => props.editData(result)}>
                Edit
              </button>
              <button
                className="detail"
                onClick={() => props.detail(result.id)}>
                Detail
              </button>
              <button
                className="delete"
                onClick={() => props.delete(result.id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
