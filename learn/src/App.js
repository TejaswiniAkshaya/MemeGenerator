
import { Navbar } from "./components1/Navbar";
import { Hero } from "./components1/Hero";
import {Cards} from "./components1/Cards"
import "./css/style1.css"
import itemcards from './components1/data'
function App() {

  const items=  itemcards.map((item)=>{
  return(

   <Cards 

   key={item.id}
  /* coverImg={item.coverImg} rating={item.stats.rating}
   reviewCount={item.stats.reviewCount} 
  location={item.location}
    title={item.title}
     price={item.price} 
     openSpots={item.openSpots}*/
     {...item}
     />
  
    )
})

  return (
    <div className="App">
<Navbar/>
<Hero/>
<section className="cards--list">
{items}
</section>
    </div>
  );
}

export default App;
