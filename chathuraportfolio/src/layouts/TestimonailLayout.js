import React from 'react';

const Testimonial = ({ name, position, comment }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600">{comment}</p>
      <div className="mt-4">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-gray-500">{position}</p>
      </div>
    </div>
  );
};

export default Testimonial;