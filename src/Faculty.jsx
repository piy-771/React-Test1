import { useState } from "react";
import axios from "axios";

const Faculty =()=>{
    const [student, setStudent] = useState({
        mono: "",
        name: "",
        city: "",
        salary: ""
      });
    
      // Handle form change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({
          ...student,
          [name]: value
        });
      };
    
      // Handle form submit
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3000/students", student);
          alert("Student record added successfully!");
          // Clear form after submission
          setStudent({
            mono: "",
            name: "",
            city: "",
            salary: ""
          });
        } catch (error) {
          console.error("Error adding student:", error);
        }
      };
    
      return (
        <div style={{ padding: "20px" }}>
          <h1>Add Student Record</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Mono: </label>
              <input
                type="text"
                name="mono"
                value={student.mono}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={student.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>City: </label>
              <input
                type="text"
                name="city"
                value={student.city}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Salary: </label>
              <input
                type="number"
                name="salary"
                value={student.salary}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Add Student</button>
          </form>
        </div>
      );
}

export default Faculty;