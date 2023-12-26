
import React, { useState } from 'react';

const ButtonComponent = ({ onClick }) => {
  return (
    <button
      className="fixed top-0 right-0 m-4 p-2 bg-blue-500 text-white rounded-md"
      onClick={onClick}
    >
      Toggle Navigation
    </button>
  );
};

export default ButtonComponent;
