import React from "react";

const QuoteCardComponent = () => {
  return (
    <div className="flex justify-center items-center px-4 py-10 my-20">
      <div className="max-w-3xl w-full text-center">
        <p className="text-gray-700 text-lg md:text-2xl leading-relaxed">
          "He aprendido que la gente olvida lo que dijiste, la gente olvida lo
          que has hecho, pero la gente nunca va a olvidar cómo los hiciste
          sentir"
        </p>
        <p className="mt-4 text-gray-500 font-medium text-lg">Maya Angelou</p>
      </div>
    </div>
  );
};

export default QuoteCardComponent;
