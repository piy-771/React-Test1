import { useState } from "react";
const Contact =()=>{
    const [basicSalary, setBasicSalary] = useState("");
  const [ta, setTA] = useState("");
  const [da, setDA] = useState("");
  const [hra, setHRA] = useState("");

  // State for calculated salary and tax
  const [totalSalary, setTotalSalary] = useState(0);
  const [tax, setTax] = useState(0);

  // Function to calculate total salary and tax
  const calculateSalary = (e) => {
    e.preventDefault();

    const basic = parseFloat(basicSalary);
    const travelAllowance = parseFloat(ta);
    const dearnessAllowance = parseFloat(da);
    const houseRentAllowance = parseFloat(hra);

    const total = basic + travelAllowance + dearnessAllowance + houseRentAllowance;
    setTotalSalary(total);

    // Calculate tax based on total salary
    let calculatedTax = 0;
    if (total >= 80000) {
      calculatedTax = total * 0.2;
    } else if (total >= 50000) {
      calculatedTax = total * 0.15;
    } else if (total >= 30000) {
      calculatedTax = total * 0.1;
    } else {
      calculatedTax = 0;
    }

    setTax(calculatedTax);
  };

  return (
    <div>
      <h1>Salary and Tax Calculator</h1>
      <form onSubmit={calculateSalary}>
        <div>
          <label>Basic Salary: </label>
          <input
            type="number"
            value={basicSalary}
            onChange={(e) => setBasicSalary(e.target.value)}
            required
          />
        </div>

        <div>
          <label>TA (Travel Allowance): </label>
          <input
            type="number"
            value={ta}
            onChange={(e) => setTA(e.target.value)}
            required
          />
        </div>

        <div>
          <label>DA (Dearness Allowance): </label>
          <input
            type="number"
            value={da}
            onChange={(e) => setDA(e.target.value)}
            required
          />
        </div>

        <div>
          <label>HRA (House Rent Allowance): </label>
          <input
            type="number"
            value={hra}
            onChange={(e) => setHRA(e.target.value)}
            required
          />
        </div>

        <button type="submit">Calculate Total Salary and Tax</button>
      </form>

      {totalSalary > 0 && (
        <div>
          <h2>Total Salary: ₹{totalSalary}</h2>
          <h2>Tax: ₹{tax}</h2>
        </div>
      )}
    </div>
  );
}

export default Contact;