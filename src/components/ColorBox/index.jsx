import React, { useState } from 'react';

function ColorBox(props) {
  const [color, setColor] = useState('blue')
  return (
    <div style={{ color: color }}>
      {color}

      <button onClick={() => setColor('red')}>Change to red</button>
      <button onClick={() => setColor('blue')}>Change to blue</button>
    </div>
  );
}

export default ColorBox;