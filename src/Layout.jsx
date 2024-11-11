import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link> |
        <Link to="about">About</Link>  |
        <Link to="faculty">Faculty</Link> |
        <Link to="course">Our Courses</Link> |
        <Link to="contact">Contact Us</Link>
        <hr />
        <Outlet/>

        </>
    )
}

export default Layout;