import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = ({ title, subtitle1, subtitle2 }) => {
  return (
    <div className="jumbotron jumbotron-fluid mb-4">
      <div className="container text-center py-4">
        <h1 className="text-white display-3">{title}</h1>
        <div className="d-inline-flex align-items-center text-white">
          <p className="m-0"><a className="text-white">{subtitle1}</a></p>
          <FontAwesomeIcon icon={faCircle} className="px-3" />
          <p className="m-0">{subtitle2}</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
