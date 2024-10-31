import { Globe, Mail, MapPin, Phone } from "lucide-react";

import PropTypes from "prop-types";

const ProfileHeader = ({
  name,
  title,
  email,
  phone,
  location,
  portfolio,
  linkedin,
  github,
}) => {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{name}</h1>
      <h2 className="text-xl text-blue-600 mb-4">{title}</h2>
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-1">
          <Mail className="w-4 h-4" />
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-1">
          <Phone className="w-4 h-4" />
          <span>{phone}</span>
        </div>
        {location && (
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        )}
        {portfolio && (
          <div className="flex items-center gap-1">
            <Globe className="w-4 h-4" />
            <span>{portfolio}</span>
          </div>
        )}
        {linkedin && (
          <div className="flex items-center gap-1">
            <Globe className="w-4 h-4" />
            <span>{linkedin}</span>
          </div>
        )}
        {github && (
          <div className="flex items-center gap-1">
            <Globe className="w-4 h-4" />
            <span>{github}</span>
          </div>
        )}
      </div>
    </header>
  );
};
ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.string,
  portfolio: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
};

export default ProfileHeader;
