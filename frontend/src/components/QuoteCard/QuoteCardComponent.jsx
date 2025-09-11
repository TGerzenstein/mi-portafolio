import React from "react";

const QuoteCardComponent = () => {
  return (
    <div className="flex justify-center items-center px-4 py-10 my-20">
      <div className="max-w-3xl w-full text-center">
        <p className="text-gray-700 text-lg md:text-2xl leading-relaxed">
          "La gente olvidará lo que dijiste, olvidará lo que hiciste, pero nunca
          olvidará cómo la hiciste sentir."
        </p>
        <p className="mt-4 text-gray-500 font-medium text-lg">Maya Angelou</p>
      </div>
    </div>
  );
};

export default QuoteCardComponent;
