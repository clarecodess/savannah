import React from 'react';

const APIIntro = ({ id, title, description }) => {
  return (
    <section id={id} className="p-10 border-b">
      <h3 className="text-2xl mb-2">{title}</h3>
      <p>{description}</p>
    </section>
  );
};

export default APIIntro;
