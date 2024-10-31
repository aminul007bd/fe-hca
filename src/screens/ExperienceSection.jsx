import PropTypes from "prop-types";

const ExperienceSection = ({ experiences }) => {
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold border-b-2 border-gray-200 mb-4 pb-2">
        Work Experience
      </h3>

      {experiences.map((experience, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                {experience.title}
              </h4>
              <h5 className="text-blue-600">{experience.company}</h5>
            </div>
            <span className="text-gray-600">{experience.dates}</span>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {experience.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

ExperienceSection.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      dates: PropTypes.string.isRequired,
      responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ExperienceSection;
