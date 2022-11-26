import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);

  const handleDlelte = (user) => {
    const confirm = window.confirm("Are you sure?");
    console.log(user);
    if (confirm) {
      fetch(`http://localhost:5000/users/delete/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged && data.deletedCount > 0) {
            const newUsers = displayUsers.filter(
              (item) => item._id !== user._id
            );
            setDisplayUsers(newUsers);
          }
        });
    }
  };
  return (
    <div>
      <div className="nav">
        <Link className="btn btn-primary" to={"/"}>
          Home
        </Link>
        <Link className="btn btn-primary" to={"/user/add"}>
          Add User
        </Link>
      </div>
      {displayUsers.length === 0 ? <h1>No Users Found</h1> : <h1>All Users</h1>}
      {displayUsers.map((user) => {
        return (
          <div key={user._id}>
            <p>
              {user.name} {user.email}{" "}
              <Link to={`/user/update/${user._id}`}><Button>Update</Button></Link>
              <Button className="ms-2" onClick={() => handleDlelte(user)}>X</Button>
            </p>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
