import React from 'react';

function Button({ text, className, style,icon }) {
  return (
    <button 
      className={`bg-black flex text-white text-md p-4 rounded-md mt-6 gap-1 ${className}`} 
      style={style}
    >
    {icon}{text}
    </button>
  );
}

export default Button;
