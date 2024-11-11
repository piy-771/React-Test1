import axios from "axios";
import { useEffect ,useState} from "react";
const Courses=()=>{
    const [students, setStudents] = useState([]);

    // Fetch student records from JSON Server
    useEffect(() => {
      const fetchStudents = async () => {
        try {
          const response = await axios.get("http://localhost:3000/students");
          setStudents(response.data);
        } catch (error) {
          console.error("Error fetching student data:", error);
        }
      };
  
      fetchStudents();
    }, []); // Empty dependency array ensures this runs only once when the component mounts
  
    return (
      <div>
        <h1>Student Records</h1>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Mono</th>
              <th>Name</th>
              <th>City</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.mono}</td>
                  <td>{student.name}</td>
                  <td>{student.city}</td>
                  <td>{student.salary}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
}

export default Courses;