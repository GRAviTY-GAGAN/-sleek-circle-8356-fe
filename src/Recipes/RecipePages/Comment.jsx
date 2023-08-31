import { Box } from '@chakra-ui/react';
import React from 'react';
import { MdStarBorderPurple500 } from "react-icons/md";
import "./Comment.css";
import reviewImage from "../../assets/reviews.png";

const Comment = () => {
  return (
    <div className='container'>
        <Box className='box'>
            <div className='flex'>
            <MdStarBorderPurple500 fontSize="30px" style={{margin:"auto"}} />
            <MdStarBorderPurple500 fontSize="30px" style={{margin:"auto"}} />
            <MdStarBorderPurple500 fontSize="40px" style={{margin:"auto"}} />
            <MdStarBorderPurple500 fontSize="30px" style={{margin:"auto"}} />
            <MdStarBorderPurple500 fontSize="30px" style={{margin:"auto"}} />
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
            <p>What do you think of this recipe? Share your experience to help others.</p>
            <button className='addButton'>ADD RATING & REVIEW</button>
            </div>
            <div>
                <img src={reviewImage} alt="" />
            </div>
        </Box>
    </div>
  )
}

export default Comment