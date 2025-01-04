import { useState } from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchSection/SearchBar';
import FilterSection from './components/SearchSection/FilterSection';
import Footer from './components/Footer/Footer';
import BusinessCard from './components/Businesses/BusinessCard.jsx';
import BusinessDetail from './components/Businesses/BusinessDetail.jsx';
import businesses from './components/Businesses/BusinessData.jsx';
const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const filterBusinesses = (query, category, rating) => {
    const filtered = businesses.filter(business => {
      const matchesSearch = business.name.toLowerCase().includes(query.toLowerCase()) || business.address.toLowerCase().includes(query.toLowerCase()) || business.location.toLowerCase().includes(query.toLowerCase()) || business.category.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === '' || business.category.toLowerCase() === category.toLowerCase();
      const matchesRating = rating === '' || parseFloat(business.rating) >= parseFloat(rating);
      return matchesSearch && matchesCategory && matchesRating;
    });
    setFilteredBusinesses(filtered);
  };
  const handleSearch = query => {
    setSearchQuery(query);
    filterBusinesses(query, selectedCategory, selectedRating);
  };
  const handleCategoryChange = category => {
    setSelectedCategory(category);
    filterBusinesses(searchQuery, category, selectedRating);
  };
  const handleRatingChange = rating => {
    setSelectedRating(rating);
    filterBusinesses(searchQuery, selectedCategory, rating);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex flex-col"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    className: "flex-grow container mx-auto px-4 py-8"
  }, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement("div", {
      className: "max-w-3xl mx-auto"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-3xl font-bold text-center mb-8"
    }, "Find Local Businesses Near You"), /*#__PURE__*/React.createElement(SearchBar, {
      onSearch: handleSearch
    }), /*#__PURE__*/React.createElement(FilterSection, {
      onCategoryChange: handleCategoryChange,
      onRatingChange: handleRatingChange
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    }, filteredBusinesses.length > 0 ? filteredBusinesses.map(business => /*#__PURE__*/React.createElement(BusinessCard, {
      key: business.id,
      business: business
    })) : /*#__PURE__*/React.createElement("p", {
      className: "text-center text-gray-500"
    })))
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/business/:id",
    element: /*#__PURE__*/React.createElement(BusinessDetailWrapper, null)
  }))), /*#__PURE__*/React.createElement(Footer, null));
};
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
export default App;