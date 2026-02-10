import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";

const ApiCrud = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });

  const [allData, setAllData] = useState([]);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    disp();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const disp = () => {
    setLoading(true);
    axios
      .get("http://localhost:3000/users")
      .then((res) => setAllData(res.data))
      .finally(() => setLoading(false));
  };

  const saveData = (e) => {
    e.preventDefault();
    setLoading(true);

    if (id === "") {
      axios
        .post("http://localhost:3000/users", data)
        .then(() => disp())
        .finally(() => setLoading(false));
    } else {
      axios
        .put(`http://localhost:3000/users/${id}`, data)
        .then(() => disp())
        .finally(() => setLoading(false));
    }

    setData({ name: "", age: "", salary: "" });
    setId("");
  };

  const delData = (id) => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then(() => disp())
      .finally(() => setLoading(false));
  };

  // edit
  const editData = (id) => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        setData(res.data);
        setId(id);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h2>CRUD with JSON Server</h2>

      <form onSubmit={saveData}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Age: </label>
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Salary: </label>
        <input
          type="number"
          name="salary"
          value={data.salary}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">{id === "" ? "Submit" : "Update"}</button>
      </form>

      <br />

      {loading && <div className="loader"></div>}

      <br />

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((i, index) => (
            <tr key={i.id}>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.age}</td>
              <td>{i.salary}</td>
              <td>
                <button
                  style={{ marginRight: "5px", backgroundColor: "lightblue" }}
                  onClick={() => editData(i.id)}
                >
                  Edit
                </button>
                <button
                  style={{ backgroundColor: "#FFCCCB" }}
                  onClick={() => delData(i.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiCrud;
