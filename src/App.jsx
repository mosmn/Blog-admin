import Routes from './routes';

const App = () => (
  <div>
    <Routes />
  </div>
);

export default App;

// /* eslint-disable react-hooks/exhaustive-deps */
// import {  useState } from "react";
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import "./App.css";
// import { login } from "./api/auth";
// import { createComment } from "./api/blog";

// function App() {
//   const [comment, setComment] = useState("");
//   const [createdat, setCreatedAt] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = await createComment("65c8478992816403e1460e16", comment);
//     if(!data) {
//       console.log("Failed to create comment");
//       return;
//     }
//     setComment(data.content);
//     setCreatedAt(data.createdAt);
//     console.log(data);
//   }

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <input 
//           name="comment"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           placeholder="Comment"
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>

//       <div>
//         <h2>Comment: {comment}</h2>
//         <h2>Created At: {createdat}</h2>
//         </div>
//     </div>
//   );
// }


// // function App() {
// //   const [username, setUsername] = useState("");
// //   const [type, setType] = useState("");
// //   const [id, setId] = useState("");
// //   const [formData, setFormData] = useState({
// //     username: "",
// //     password: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const data = await login(formData);
// //     console.log(data);
// //     setUsername(data.payload.username);
// //     setType(data.payload.type);
// //     setId(data.payload.id);
// //   };

// //   return (
// //     <>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           name="username"
// //           value={formData.username}
// //           onChange={handleChange}
// //           placeholder="Username"
// //           required
// //         />
// //         <input
// //           name="password"
// //           type="password"
// //           value={formData.password}
// //           onChange={handleChange}
// //           placeholder="Password"
// //           required
// //         />
// //         <button type="submit">Register</button>
// //       </form>

// //       <div>
// //         <h2>Username: {username}</h2>
// //         <h2>Type: {type}</h2>
// //         <h2>ID: {id}</h2>
// //       </div>
// //     </>
// //   );
// // }

// export default App;




// // import React, { useState } from 'react';

// // function AddComment() {
// //   const [content, setContent] = useState('');

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     const token = localStorage.getItem('token');

// //     const response = await fetch('/posts/:id/comments', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'Authorization': `Bearer ${token}`
// //       },
// //       body: JSON.stringify({ content })
// //     });

// //     if (response.ok) {
// //       setContent('');
// //       alert('Comment added successfully');
// //     } else {
// //       alert('Failed to add comment');
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <textarea
// //         value={content}
// //         onChange={e => setContent(e.target.value)}
// //         placeholder="Add a comment"
// //       />
// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // }

// // export default AddComment;