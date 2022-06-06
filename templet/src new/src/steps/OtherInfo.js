import React from "react";
import "./steps.css";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
      className="other-info-container"
        type="text"
        placeholder="Nationality..."
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
      className="other-info-container"
        type="text"
        placeholder="Other..."
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
    </div>
  );
}

export default OtherInfo;
