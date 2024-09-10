import React, { useState } from "react";

const Index = () => {
  const intialArray = [
    {
      id: "asdf",
      firstName: "Pavan",
      lastName: "Chary",
      age: 28,
    },
    {
      id: "asdfgh",
      firstName: "Perla",
      lastName: "Sathi",
      age: 29,
    },
  ];

  const [data, setData] = useState(intialArray);

  const handleDelete = (comingId) => {
    const filterData = data.filter((eachItem) => {
      return eachItem.id !== comingId;
    });
    setData(filterData);
  };

  //   const [firstName, setFirstName] = useState("Pavan");
  //   const [lastName, setLastName] = useState("Chary");
  //   const [age, setAge] = useState(28);

  //   const changeFirstName = () => {
  //     setFirstName("Sathi");
  //   };

  //   const changeLastName = () => {
  //     setLastName("Perla");
  //   };
  //   const changeAge = () => {
  //     setAge(29);
  //   };
  return (
    <div>
      <ul>
        {data.map((eachItem, index) => {
          const { firstName, lastName, age, id } = eachItem;
          return (
            <li key={index}>
              <div>
                My First Name : <strong> {firstName}</strong>
              </div>
              <div>
                My Last Name : <strong> {lastName} </strong>
              </div>
              <div>
                My Age :<strong> {age}</strong>
              </div>
              <button onClick={() => handleDelete(id)}>Delete Me</button>
            </li>
          );
        })}
      </ul>
    </div>

    // <div>
    //   <h1>My Name is {firstName}</h1>
    //   <button onClick={changeFirstName}>Change firstName</button>
    //   <h1>My Name is {lastName}</h1>
    //   <button onClick={changeLastName}>Change lastName</button>
    //   <h2>Age : {age}</h2>
    //   <button onClick={changeAge}>Change Age</button>
    // </div>
  );
};

export default Index;
