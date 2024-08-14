import LetterFilter from "./LetterFilter";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const TermList = () => {
  const { data, loading, error } = useFetch("/data.json");
  const [selectedLetters, setSelectedLetters] = useState([]);

  const handleLetterClick = (letters) => {
    setSelectedLetters(letters);
  };

  const handleReset = () => {
    setSelectedLetters([]);
  };

  const filteredTerms = data?.termList?.filter(
    (term) =>
      selectedLetters.length === 0 ||
      selectedLetters.some((letter) =>
        term.title.toLowerCase().startsWith(letter.toLowerCase())
      )
  );

  const groupedTerms = filteredTerms?.reduce((acc, term) => {
    const letter = term.title.charAt(0).toUpperCase();
    if (!acc[letter]) {
      acc[letter] = [];
    }
    acc[letter].push(term);
    return acc;
  }, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="content-center fixed top-20 bg-white w-3/4 p-6 mx-auto shadow-lg rounded-lg">
      <LetterFilter
        selectedLetters={selectedLetters}
        onLetterClick={handleLetterClick}
        onReset={handleReset}
      />
      {Object.keys(groupedTerms || {}).map((letter) => (
        <div key={letter} id={letter}>
          <h2 className="text-2xl font-light underline-extended mb-3 mt-3">
            {letter}
          </h2>
          <ul className="grid grid-cols-1 gap-1 md:grid-cols-2">
            {groupedTerms[letter].map((term, index) => (
              <li key={index} className="text-blue-500">
                <Link to={term.link}>{term.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

TermList.propTypes = {
  data: PropTypes.shape({
    termList: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TermList;
