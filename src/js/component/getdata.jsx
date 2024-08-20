import React, {useEffect, useState} from "react"; 




const getData = () => {

    const [ characters, setCharacters ] = useState ([])



        function getCharacters (){

           console.log ('getCharacters')

           fetch ('https://rickandmortyapi.com/api/character')
           .then((response) => response.json () )
           .then((data) => setCharacters (data.results))


           
        }



        useEffect (()=>{
            console.log ('se cargo el componente')
            getCharacters()

        },[])

        return (

            <>
            <h1>get data</h1>
            {characters.map ( (personaje, index)=><p key={personaje.id}>{personaje.name}   {personaje.id}<img src={personaje.image} alt="" /></p> )}
             
            
             
            </>
        )
    
}

export default getData;
