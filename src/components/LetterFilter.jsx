import PropTypes from "prop-types";

const LetterFilter = ({ selectedLetters, onLetterClick, onReset }) => {
  const handleLetterClick = (letter) => {
    if (selectedLetters.includes(letter)) {
      onLetterClick(selectedLetters.filter((l) => l !== letter));
    } else {
      onLetterClick([...selectedLetters, letter]);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10 p-4 text-center">
      <h1 className="text-2xl font-light mb-3 mt-3">
        Treatment, Services and Specialties
      </h1>
      {Array.from({ length: 26 }, (_, i) => {
        const letter = String.fromCharCode(65 + i);
        return (
          <button
            key={i}
            onClick={() => handleLetterClick(letter)}
            style={{
              marginRight: "20px",
              color: selectedLetters.includes(letter) ? "blue" : "lightgray",
            }}
          >
            {letter}
          </button>
        );
      })}
      <button onClick={onReset} className="text-gray-500">
        #
      </button>
    </div>
  );
};

LetterFilter.propTypes = {
  selectedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLetterClick: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default LetterFilter;
