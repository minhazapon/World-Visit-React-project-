import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";

import './coun.css'

const Countries = () => {

   const [desh, setDesh] = useState([])


   useEffect(() => {

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setDesh(data))

 
   } , [])

    return (
        <div>
               <h3>countries: {desh.length} </h3>
               
                <div  className="Coun">

                {
                desh.map(desh => <Country key={desh.cca3} desh={desh}>

                </Country>)
                }

                </div>
        </div>
    );
};

export default Countries;