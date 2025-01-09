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
      <div className="d-flex gap-5">
        <div className="fw-semibold  accordian-content">0{num}</div>
        <div className="fw-semibold accordian-content justify-self">{heading}</div>
      </div>
        <div className="plus-icon d-flex justify-content-center align-items-center">
          <span>{isOpen ? "-" : "+"}</span> {/* Change icon based on state */}
        </div>
      </div>
      {isOpen && (
        <div className="mt-3 mb-3 accordian-text">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
