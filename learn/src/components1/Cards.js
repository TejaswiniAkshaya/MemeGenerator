import "../css/style1.css"
export const Cards=({id,coverImg,stats,location,title,price,openSpots})=>{
   
   let badge;
   if(openSpots===0){
    badge="SOLD OUT"
   }else if(location==="Online"){
    badge="ONLINE"
   }
    return(
        <div className="card" key={id}>
            {  badge &&
        <div className="card-badge"> {badge}</div>
         
}
         <img src={`../images/${coverImg}`} className="card--img"></img>
         
        <div className="cards--stats">
        <img src="../images/star.png" className="star--img"></img>
        <span>{stats.rating}</span>
        <span className="gray">&nbsp;({stats.reviewCount})</span>
        <span className="gray">&nbsp; .{location}</span>
   
        </div>
        <p className="card--title">{title}</p>
        <p><span className="bold">From ${price}</span> / Person</p>
        </div>
    )
}