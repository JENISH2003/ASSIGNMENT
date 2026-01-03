import React, { useState, useEffect } from "react";

const ApiFetch = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {
        <table border={1}>
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {user.map((i) => {
              return (
                <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>{i.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      }
    </>
  );
};

export default ApiFetch;
