import React from 'react';

const Button = (props) => {
  const buttonClasses = `bg-indigo-500 mx-1 rounded-sm hover:bg-indigo-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline-blue`;

  return (
    <button className={buttonClasses} type="submit">
      {props.texto}
    </button>
  );
}

export default Button;