
import React from "react"
import boxes from "./components/boxes"
import Box from "./components/Box"
import "./styles/style.css"
import {Form} from "./components/Form"
export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) {
        setSquares((prevSquares) => {
          /*const newSquares = []
            for(let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            } */
            return prevSquares.map((obj)=>{
              return (obj.id===id)? {...obj,on:!obj.on}:obj;
             })

         
       
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
    
    return (
      <>
        <main>
            {squareElements}
        </main><br></br>
        <Form/>
        </>

    )
}
