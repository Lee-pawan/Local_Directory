import React, { useState } from 'react';
const LoginPage = ({
  onClose
}) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and Sign Up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]); // Store registered users

  // Function to handle Login or Sign Up submission
  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password || isSignUp && !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (isSignUp) {
      // Handle Sign Up
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      // Check if the email is already registered
      if (users.find(user => user.email === email)) {
        setError('Email is already registered.');
        return;
      }

      // Add user to the list
      setUsers([...users, {
        email,
        password
      }]);
      alert('Sign-Up successful! You can now log in.');
      setError('');
      setIsSignUp(false); // Switch to login after successful sign-up
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      // Handle Login
      const existingUser = users.find(user => user.email === email && user.password === password);
      if (existingUser) {
        alert('Login successful!');
        setError('');
        onClose(); // Close the modal
      } else {
        setError('Invalid email or password.');
      }
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-lg shadow-lg w-96"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center border-b px-4 py-2"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-semibold text-gray-800"
  }, isSignUp ? 'Sign Up' : 'Login'), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "text-gray-600 hover:text-gray-800 p-1"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-gray-700"
  }, "Email Address"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500",
    placeholder: "Enter your email"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "password",
    className: "block text-sm font-medium text-gray-700"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500",
    placeholder: "Enter your password"
  })), isSignUp && /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "confirmPassword",
    className: "block text-sm font-medium text-gray-700"
  }, "Confirm Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "confirmPassword",
    value: confirmPassword,
    onChange: e => setConfirmPassword(e.target.value),
    className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500",
    placeholder: "Confirm your password"
  })), error && /*#__PURE__*/React.createElement("div", {
    className: "mb-4 text-sm text-red-600"
  }, error), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
  }, isSignUp ? 'Sign Up' : 'Login'))), /*#__PURE__*/React.createElement("div", {
    className: "text-center p-4 border-t text-sm"
  }, isSignUp ? /*#__PURE__*/React.createElement("p", null, "Already have an account?", ' ', /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setIsSignUp(false);
      setError('');
    },
    className: "text-blue-500 hover:underline"
  }, "Login")) : /*#__PURE__*/React.createElement("p", null, "Don't have an account?", ' ', /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setIsSignUp(true);
      setError('');
    },
    className: "text-blue-500 hover:underline"
  }, "Sign Up")))));
};
export default LoginPage;