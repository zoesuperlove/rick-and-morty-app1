import React from "react";

const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{ maxWidth: "250px" }}>
            <img src={item.image} alt="imagen de la serie Rick & Morty" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <p>Location: {item.location.name}</p>
              <p>Species: {item.species}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Characters;
