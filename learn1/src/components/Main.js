
import {useState,useEffect} from "react"
export const Main=()=>{
    const [meme,setMeme]=useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })
    const handle=(event)=>{
     const {name,value}=event.target
     setMeme(prev=>(
        {
         ...prev,
         [name]:value   
        }
     ))
    }
  
    const [allMemeImages,setAllMemeImages]=useState([])
    useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")   
        .then(res=>res.json())
        .then(data=>setAllMemeImages(data.data.memes))
     
       },[])
    const getImage=(event)=>{
        event.preventDefault()
     const memes=allMemeImages;
     const randomNumber=Math.floor(Math.random() * memes.length)
     const url=memes[randomNumber].url
     setMeme(prev=>(
        {
           ...prev ,
           randomImage:url

        }
     )
      
     )
    console.log(randomNumber)
    }
    return(
        <>
        <main>
            <form className="form">
                <input type="text" name="topText" onChange={handle} value={meme.topText}
                 className="form--input" placeholder="Enter Top Text"/>
                <input type="text" name="bottomText" onChange={handle} value={meme.bottomText}
                  className="form--input" placeholder="Enter Bottom text"/>
                <button type="submit" className="form--button" onClick={getImage}>Get a new Meme Image</button>
      
                <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
              
            </form>
        </main>
       
     
        </>
    )
}