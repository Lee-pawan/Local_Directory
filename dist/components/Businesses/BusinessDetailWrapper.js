import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BusinessDetail from './BusinessDetail';
import businesses from './BusinessData';
const BusinessDetailWrapper = () => {
  const {
    id
  } = useParams();
  const business = businesses.find(b => b.id === parseInt(id));
  if (!business) {
    return /*#__PURE__*/React.createElement("div", {
      className: "text-center text-gray-500"
    }, /*#__PURE__*/React.createElement("h1", null, "No business found."), /*#__PURE__*/React.createElement(Link, {
      to: "/",
      className: "text-blue-500 underline"
    }, "Go back to search"));
  }
  return /*#__PURE__*/React.createElement(BusinessDetail, {
    business: business
  });
};
export default BusinessDetailWrapper;