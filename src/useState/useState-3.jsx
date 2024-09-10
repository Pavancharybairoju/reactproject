import React, { useState } from "react";

function Index() {
  const [showData, setShowData] = useState(false);

  const handleChange = () => {
    setShowData(!showData);
  };
  return (
    <div>
      <button onClick={handleChange}>{showData ? "Hide" : "Show"}</button>

      {showData ? (
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam fugit ipsum esse earum velit aut ipsam nobis nesciunt sint
          minima quos iste.
        </div>
      ) : (
        <div>Data is Hidden</div>
      )}

      {/* {showData && (
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam fugit ipsum esse earum velit aut ipsam nobis nesciunt sint
          minima quos iste.
        </div>
      )} */}
    </div>
  );
}
export default Index;
