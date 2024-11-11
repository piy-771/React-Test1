import { useState } from "react";
const About =()=>{
    const [count,Counter] = useState(0);

   
      

    return(
      <>
        <h1>App Counter</h1>
        <button onClick={()=>{Counter(count+10)}}>Increment</button>
        <h1>Counter:{count}</h1>
        <button onClick={()=>{Counter(count-10)}}>Decrement</button>
        <button  onClick={()=>{Counter(0)}}>Reset</button>
        
      </>
    )
}

export default About;