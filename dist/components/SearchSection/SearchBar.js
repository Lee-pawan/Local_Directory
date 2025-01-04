import React, { useState } from 'react';
import PropTypes from 'prop-types';
const SearchBar = ({
  onSearch
}) => {
  const [input, setInput] = useState('');
  const handleInputChange = e => {
    setInput(e.target.value);
    onSearch(e.target.value);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center border rounded-lg p-2 shadow-sm"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "flex-grow p-2 border-none outline-none",
    placeholder: "Search by name, address, or location",
    value: input,
    onChange: handleInputChange
  }));
};
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};
export default SearchBar;