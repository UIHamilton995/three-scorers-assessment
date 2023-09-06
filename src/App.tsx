// import { useState, useEffect } from 'react'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     document.title = 'ThreeScorers'; // This is the tab title
//   }, []);
//   return (
//     <>
//       <div>
//         Hello World
//         <h1>Way to go Fam</h1>
//       </div>

//     </>
//   )
// }

// export default App

// App.tsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from './Home'; // Import your Home component
// import { SignUp } from "./pages/signUp/SignUp";
import { Login } from "./pages/login/Login";
import { Overview } from "./pages/overview/Overview";
import { User } from "./pages/user/User";
import { Admin } from "./pages/admin/Admin";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/signUp" element={<SignUp />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        </Routes>
    </Router>
  );
}

export default App;
