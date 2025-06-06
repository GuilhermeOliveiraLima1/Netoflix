import "./Stars.css";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";



function Stars({vote}) {
  const countStars = parseFloat((vote/2).toFixed(1))
  const fullStars = Math.floor(countStars)
  const boolHalfStar = countStars-fullStars >= 0.5
  let emptyStars;
  if(boolHalfStar){
    emptyStars = (5 - fullStars - 1 ).toFixed(0)
  }
  else{
    emptyStars = (5 - fullStars).toFixed(0)
  }

  
  
  return <div>
      {[...Array(fullStars)].map((_,i) => (
        <FaStar key={i} className="star"/>
      ))}
      {boolHalfStar && <FaRegStarHalfStroke className="star" />}
      {[...Array(parseInt(emptyStars))].map((_,i) => (
        <FaRegStar key={i} className="star" />
      ))}
  </div>;
}


export default Stars