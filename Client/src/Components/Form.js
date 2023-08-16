import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/endpoint", formData);
      console.log(response.data);
      // Handle success or show a message to the user
    } catch (error) {
      console.error(error);
      // Handle error or show an error message to the user
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Search for the product item</h2>
      <form onSubmit={handleSubmit} className="form-example">
        <div className="form-input-group">
          <label htmlFor="title" className="form-input-label">
            Enter Product ID:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="form-input"
          />
          <button type="submit" className="form-button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
