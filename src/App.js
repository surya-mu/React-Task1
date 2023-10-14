import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  return (
    <div className="App">
      <h1>Paragraph Dynamic Word Counter!</h1>
      <textarea
        rows="4"
        
        
        value={text}
        onChange={handleTextChange}
      />
      <p>Words: {wordCount}</p>
    </div>
  );
}

export default App;