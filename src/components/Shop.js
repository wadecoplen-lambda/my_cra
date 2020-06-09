import React, {useState, useEffect} from 'react';
import axios from 'axios'


function Shop() {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        fetchItems()
        .then(response => {
            console.log(response)
            setResponse(response)
        })
    }, []);
    
    
 
    const fetchItems = () => axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
       
        
  return (
    <div>
       {response.map(item => {
           <h1></h1>
       })}
    </div>
  );
}

export default Shop;