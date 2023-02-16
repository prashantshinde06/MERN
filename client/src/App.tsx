import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegistration from "./components/userregistration/UserRegistration";
import UserLogin from "./components/userlogin/UserLogin";
import UserHomePage from "./components/userhomepage/UserHomePage";
import { ToastContainer } from "react-toastify";
import LoginMessage from "./components/loginmessage/LoginMessage";
import ProtectedRoute from "./utils/ProtectedRout";


function App() {

  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<UserHomePage />}></Route>
        <Route path="/loginMessage" element={<ProtectedRoute Component={LoginMessage}/>}></Route>
        <Route
          path="/signup"
          element={<UserRegistration></UserRegistration>}
        ></Route>
        <Route path="/login" element={<UserLogin></UserLogin>}></Route>
      </Routes>
  
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
