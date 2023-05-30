import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CountrySummary from './countries';


function App() {

  const [countries, setCountry] = useState();
  const [selected, setSelected] = useState();

  useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies,languages';
    console.log(url);
    axios.get(url).then((response) => {
        console.log(response.data);
        setCountry(response.data);
        
    });
}, []);

  return (
    <>
    <div className="App">
        <select
            onChange={(e) => {
                const c = countries?.find(
                    (x) => {return(x.name.common === e.target.value?x:null);}
                );
                setSelected(c);
            }}
            defaultValue="default"  
        >
            <option value="default">Choose an option</option>
            {countries
                ? countries.map((country) => {
                      return (
                          <option key={country.name.common} value={country.name.common}>
                              {country.name.common}
                          </option>
                      );
                  })
                : null}
        </select>
    </div>

    {selected ? <CountrySummary country={selected} /> : null}

    </>
);
}
    

export default App;
