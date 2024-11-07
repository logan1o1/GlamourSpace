import React from 'react'
import Rating from '@mui/material/Rating';


export default function AddReview() {
    const [value, setValue] = useState(null);
  return (
    <div>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  )
}
