import { useNavigate } from 'react-router-dom';
const BusinessCard = ({
  business
}) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    const businessUrl = `/business/${business.id}`;
    const newWindow = window.open('', '_blank');
    newWindow.location.href = businessUrl;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer",
    onClick: handleCardClick
  }, /*#__PURE__*/React.createElement("img", {
    src: business.image,
    alt: business.name,
    className: "w-full h-48 object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-semibold"
  }, business.name), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500"
  }, business.description), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500"
  }, "Rating: ", business.rating, " \u2B50")));
};
export default BusinessCard;