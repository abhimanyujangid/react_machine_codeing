import {Star} from './star'
import './style.css'
import { useState } from 'react'

interface StarRatingProps {
    value: number;
    numberOfStars?: number;
}

const StarRating = ({ value, numberOfStars = 5 }: StarRatingProps) => {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [clickedIndex, setClickedIndex] = useState<number | null>(value - 1)

    const handleClick = (index: number)  => {
        setClickedIndex(index);
    }

  return (
    <div className='star-rating'>
        {[... new Array(numberOfStars)].map((_, index) => {
            let className = '';

            if(index <= clickedIndex!){
                className = 'filled'
            }

            if(hoveredIndex !== null && index <= hoveredIndex){
                className = className + ' hovered'
            }

            return (
                <button key={index} onClick={()=> handleClick(index)} className={className}
                onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                    <Star key={index}  />
                </button>
            )
        })}
    </div>
  )
}

export default StarRating

