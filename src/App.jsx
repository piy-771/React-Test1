import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import About from "./About";
import Faculty from "./Faculty";
import Courses from "./Courses";
import Contact from "./Contact";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Layout/>}>
      <Route  index element={<Home/>}/>
      <Route  path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
       <Route path="faculty" element={<Faculty/>}/>
       <Route path="course" element={<Courses/>}/>
       <Route path="contact" element={<Contact/>}/>

       </Route>

    </Routes>
    
    
    </BrowserRouter>
    
      
    </>
  )
}

export default App;