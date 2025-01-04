import React from 'react';
import PropTypes from 'prop-types';
const BusinessDetail = ({
  business
}) => {
  if (!business) return /*#__PURE__*/React.createElement("div", {
    className: "text-center text-gray-500"
  }, "No business selected.");
  return /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 py-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: business.image,
    alt: business.name,
    className: "w-full h-64 object-contain"
  }), /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold mb-4"
  }, business.name), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-700 mb-4"
  }, business.description), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500 font-bold mb-4"
  }, "Rating: ", business.rating, " \u2B50"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500 font-bold mb-4"
  }, "Phone: ", business.phone), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500 font-bold mb-4"
  }, "Category: ", business.category), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500 font-bold mb-4"
  }, "Address: ", business.address))));
};
BusinessDetail.propTypes = {
  business: PropTypes.object
};
export default BusinessDetail;