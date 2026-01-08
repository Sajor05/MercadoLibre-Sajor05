import { useState } from "react"
import {FaStar} from "react-icons/fa"

export function RatingStars(){
  const [value, setValue] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)
  const stars = Array(5).fill(0)
  
  const handleClick = (value) => {
    setValue(value)
  };

  const handleMouseHover = (value) => {
    setHoverValue(value)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  return (
    <div className="mt-4" style={styles.container}>
        {stars.map((_, index) => {
            return(
                <FaStar
                 key={index}
                 size={14}
                 color={(hoverValue || value) > index ? color.blue : color.grey}
                 onClick={() => handleClick(index+1)}
                 onMouseOver={() => handleMouseHover(index+1)}
                 onMouseLeave={() => handleMouseLeave()}
                 className="cursor-pointer"
                 />
            );
        })}            
    </div>
  )
}

const color = {
    blue : "#3483fa",
    grey : "#a9a9a9"
}

const styles = {
    container : {
        display : "flex",
        flexDirection : "col",
        alignItems : "center"
    }
}