import React, { useEffect, useState } from "react";

const ApiFetch = () => {
  const [user, setUSer] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUSer(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <table border={1} cellPadding={10} cellSpacing={5}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((u, index) => {
            return (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ApiFetch;
