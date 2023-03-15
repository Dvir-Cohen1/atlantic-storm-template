import React from "react";
import { Link } from "react-router-dom";
import { SOCIAL_LIKNS } from "../../../constants/linksConstant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialNavLinks = () => {
  return (
    <div>
      {SOCIAL_LIKNS.map((link, indexId) => {
        return (
          <span key={indexId} className="ml-5">
            <Link title={link.label} to={link.path}>
              <FontAwesomeIcon icon={link.icon} />
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default SocialNavLinks;
