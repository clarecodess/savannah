const APIIntro = ({ title, description }) => {
    return (
      <section className="py-10">
        <h3 className="text-3xl mb-2">{title}</h3>
        <p className="text-lg">{description}</p>
      </section>
    );
  };
  
  export default APIIntro;
  