import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Storyblog from "./pages/Storyblog";
import Resources from "./pages/Resources";
import Chatbot from "./pages/Chatbot";
import Health from "./pages/Health";
import Education from "./pages/Education";
import Challenges from "./pages/Challenges";
import GenderEquality from "./pages/GenderEquality";
import ChildAndAdult from "./pages/ChildAndAdult";
import MbarangaGasarabwe from './pages/DetailedStories/MbarangaGasarabwe'
import Teocah from './pages/DetailedStories/Teocah'
import VincentSweeney from './pages/DetailedStories/VincentSweeney'
import Elizabeth from './pages/DetailedStories/Elizabeth'
import Yentyl from './pages/DetailedStories/Yentyl'
import LeizelOlegario from './pages/DetailedStories/LeizelOlegario'
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile";

import { useAuthStore } from "./stores/useAuthStore";
import { useEffect } from "react";

function App() {
  // const API_KEY = `AIzaSyAeU8QRUE6k4MSnFzvyqlkPr4a0-TneNWo`; gemini api
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

useEffect(()=> {
  checkAuth();
},[checkAuth])

if (isCheckingAuth && !authUser ) {
  return(
    <span className="loading loading-spinner text-info flex items-center justify-center w-5 h-5 " ></span>
  )
}

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat-bot" element={<Chatbot />} />
        <Route path="/story-blog" element={<Storyblog />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} /> 
        <Route path="/resources-health" element={<Health />} />
        <Route path="/resources-education" element={<Education />} />
        <Route path="/resources-challenges" element={<Challenges />} />
        <Route path="/resources-gender-equality" element={<GenderEquality />} />
        <Route path="/resources-child-and-adult" element={<ChildAndAdult/>} />
        <Route path="/mbarangagasarabwe" element={<MbarangaGasarabwe/>}/>
        <Route path="/teocah" element={<Teocah/>} />
        <Route path="/vincentsweeney" element={<VincentSweeney/>} />
        <Route path="/elizabeth" element={<Elizabeth/>} />
        <Route path="/yentyl" element={<Yentyl/>} />
        <Route path="/leizelolegario" element={<LeizelOlegario/>} />
        <Route path="/signup" element={!authUser ? <Signup/> : <Navigate to='/'/>} />
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to='/'/>} />
        <Route path="/profile" element={authUser ? <Profile /> : <Navigate to='/login'/>} />
      </Routes>

      <Toaster/>
    </>
  );
}

export default App;
