import React, { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const Index = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const fetUsersData = async (apiURL) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      const responce = await fetch(apiURL);
      const data = await responce.json();
      setUsersData(data);
      setLoading(false);
      setIsError({ status: false, msg: "" });
      if (responce.status === 404) {
        throw new Error("data not found");
      }
    } catch (error) {
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || "Something Went Wrong...",
      });
    }
  };

  useEffect(() => {
    fetUsersData(URL);
  }, []);

  if (loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  if (isError?.status) {
    return (
      <div>
        <h3>{isError.msg}</h3>
      </div>
    );
  }

  return (
    <div>
      <h1>Hi</h1>
      <ul>
        {usersData.map((eachUser) => {
          const { id, name, email } = eachUser;
          return (
            <li key={id}>
              <div>{name}</div>
              <div>{email}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
