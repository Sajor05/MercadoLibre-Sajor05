import { useState } from "react"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa"

export function LikeButton() {

    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like)
    }
    const LikeIcon = () => {
        return like ? <FaHeart color="#3483fa" onClick={handleLike} size={19} className="mr-5 cursor-pointer"/> 
        : <FaRegHeart color="#3483fa" onClick={handleLike} size={19} className="mr-5 cursor-pointer"/> 
    }
    if (like) {}

    return (
    <>
        <LikeIcon/>
    </>
  )
}