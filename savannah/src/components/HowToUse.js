import React from 'react';

const HowToUse = ({ title, steps }) => {
  return (
    <section className="p-10">
      <h3 className="text-2xl mb-4">{title}</h3>
      <ol className="list-decimal list-inside">
        {steps.map((step, index) => (
          <li key={index} className="mb-2">{step}</li>
        ))}
      </ol>
    </section>
  );
};

export default HowToUse;
