
import { useState, useEffect } from 'react';


export default function CountrySummary(props) {
   // useEffect(() => {
      //  console.log(country.name, country.currencies ,country.capital,country.languages);
   // });


    const obj = Object.values(props.country.languages);
    const obj2 = Object.values(props.country.currencies);
    const obj3 = Object.values(obj2[0].name);
    return (
        <div>
           <h1> {'Country Name -'}<span>{" " +props.country.name.common}</span></h1>

         
            <h1>{"Languages -"}{obj.map((x)=>{return (<span>{" "+x+" "}</span>)})}</h1>
           <h1>{"Capital -"}<span>{" "+props.country.capital}</span></h1>
           <h1>{"Currencies - "}<span>{  obj3}</span></h1>
            
        </div>
    );
}