import { useState } from "react";

const App = () => {
  const [res, setRes] = useState([]);
  const [txt, setTxt] = useState("");

  const handleFetchUsers = () => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => setRes(data));
  };

  const handleFetchBooks = () => {
    fetch("http://localhost:3000/api/books")
      .then((response) => response.json())
      .then((data) => setRes(data));
  };

   const handleFetchUsersWithId = (id) => {
    fetch(`http://localhost:3000/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setRes(data));
  };

  const handleFetchBooksWithId = (id) => {
    fetch(`http://localhost:3000/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setRes(data));
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        padding: "20px",
        gap: "20px",
      }}
    >
      {/* Left Side */}
      <div
        style={{
          flex: 1,
          border: "1px solid gray",
          padding: "15px",
          overflow: "auto",
        }}
      >
        <h2>Response</h2>

        <pre>{JSON.stringify(res, null, 2)}</pre>
      </div>

      {/* Right Side */}
      <div
        style={{
          width: "250px",
          border: "1px solid gray",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >

        {/* // Static Route */}
        <h2>Static Routes</h2>

        <button onClick={handleFetchUsers}>
          Fetch Users
        </button>

        <button onClick={handleFetchBooks}>
          Fetch Books
        </button>

        <h2>Dynamic Routes with path params</h2>
        <button
        onClick={()=>handleFetchUsersWithId(1)}
        >
          Fetch User with id 1
        </button>
        <button onClick={()=>handleFetchBooksWithId(101)}>
          Fetch Books with id 101
        </button>

        {/* // Nested Route */}
        <h2>Nested Route</h2>
        <button 
        onClick={()=>{
          fetch('http://localhost:3000/api/users/1/posts/456',{
            method : "GET"
          })
          .then(response=> response.json())
          .then(data=> setRes(data))
        }}
        >Fetch Posts 456 for users 1</button>

        {/* // Query Params */}
        <h2>Query Params</h2>
          <input type="text" onChange={(e)=> setTxt(e.target.value)}/>
          <button
          onClick={()=>{
          fetch(`http://localhost:3000/api/search?q=${txt}`,{
            method : "GET"
          })
          .then(response=> response.json())
          .then(data=> setRes(data))
        }}
          >Search</button>
      </div>
    </div>
  );
};

export default App;