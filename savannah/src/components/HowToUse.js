const HowToUse = ({ title, steps }) => {
    return (
      <section className="py-10 bg-gray-100">
        <h3 className="text-3xl mb-2">{title}</h3>
        <ol className="list-decimal ml-5">
          {steps.map((step, index) => (
            <li key={index} className="text-lg mb-2">{step}</li>
          ))}
        </ol>
      </section>
    );
  };
  
  export default HowToUse;
  