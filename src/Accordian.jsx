import React, { useState } from "react";

const Accordion = ({num, heading, content}) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle visibility

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Toggle the state on click
  };

  return (
    <div className="show-box-cont">
      <div
        className="show-box d-flex justify-content-between align-items-center"
        onClick={toggleAccordion} // Attach click event to toggle visibility
        style={{ cursor: "pointer" }}
      >
        <div className="fw-semibold fs-4">0{num}</div>
        <div className="fs-5 fw-semibold">{heading}</div>
        <div className="plus-icon d-flex justify-content-center align-items-center">
          <span>{isOpen ? "-" : "+"}</span> {/* Change icon based on state */}
        </div>
      </div>
      {isOpen && (
        <div className="text-center mt-3 mb-3">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
