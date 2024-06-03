import React, { useState, useRef, useEffect } from 'react';
import './Accordian.css';

function Accordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState('0px');
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }, [isOpen]);

    return (
        <div className={`accordion_item ${isOpen ? 'open' : ''}`}>
            <div className="accordion_header" onClick={toggleAccordion}>
                <h3>{question}</h3>
            </div>
            <div
                ref={contentRef}
                className="accordion_body"
                style={{ height }}
            >
                <p>{answer}</p>
            </div>
        </div>
    );
}

export default Accordion;
