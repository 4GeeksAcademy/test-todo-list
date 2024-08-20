import React, {useEffect, useState} from "react"; 




const getData = () => {

    const [ characters, setCharacters ] = useState ([])



        function getCharacters (){

           console.log ('getCharacters')

           fetch ('https://rickandmortyapi.com/api/character')
           .then((response) => response.json () )
           .then((data) => console.log (data))


           
        }



        useEffect (()=>{
            console.log ('se cargo el componente')
            getCharacters()

        },[])

        return (

            <>
            <h1>get data</h1>
            </>
        )
    
}

export default getData;
