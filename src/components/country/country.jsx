

 
import { useState } from 'react';
import './Desh.css'
  
  const Country = ({desh}) => {
    
    const {name, flags, population, area, cca3} = desh;

    const [visited, setvisited] = useState(false);

    const visit = () => {
       
        setvisited(true)


    }

    return (
        <div className={`Desh ${visited && 'visited'}`}>
            <h2>name: {name?.common} </h2>
             
             <img src={flags.png} alt="" />

             <h2>{population}</h2>

             <h2> {area} </h2>

             <p>code: {cca3} </p>

             <button onClick={visit}>visited</button>
             {visited && 'i had visited this countries'}
        </div>
    );
  };
  
  export default Country;
