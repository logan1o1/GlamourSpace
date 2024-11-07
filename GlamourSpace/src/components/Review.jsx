import React, { useState } from 'react'
import Rating from '@mui/material/Rating';

export default function Review() {
  const [value, setValue] = useState(null);

  return (
    <div>
      <h3>username</h3>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <p>review</p>
    </div>
  )
}
