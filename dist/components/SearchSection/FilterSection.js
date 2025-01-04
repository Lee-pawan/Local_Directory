import React, { useState } from "react";
const FilterSection = ({
  onCategoryChange,
  onRatingChange
}) => {
  const [isRatingEnabled, setIsRatingEnabled] = useState(false);
  const categories = ['Restaurant', 'Retail', 'Healthcare', 'Entertainment', 'Services', 'Bakery', 'Bank', 'Saloon'];
  const handleCategoryChange = category => {
    onCategoryChange(category);
    setIsRatingEnabled(!!category);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-4 my-4"
  }, /*#__PURE__*/React.createElement("select", {
    className: "px-4 py-2 border border-gray-300 rounded-lg",
    onChange: e => handleCategoryChange(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select Category"), categories.map(category => /*#__PURE__*/React.createElement("option", {
    key: category,
    value: category
  }, category))), /*#__PURE__*/React.createElement("select", {
    className: "px-4 py-2 border border-gray-300 rounded-lg",
    onChange: e => onRatingChange(e.target.value),
    disabled: !isRatingEnabled
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Rating"), /*#__PURE__*/React.createElement("option", {
    value: "5"
  }, "5 Stars"), /*#__PURE__*/React.createElement("option", {
    value: "4"
  }, "4+ Stars"), /*#__PURE__*/React.createElement("option", {
    value: "3"
  }, "3+ Stars")));
};
export default FilterSection;