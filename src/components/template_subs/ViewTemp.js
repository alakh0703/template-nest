import React from 'react';
import './ViewTemp.css';
import useTemplateStore from '../TemplateStore';

function ViewTemp() {
    const { selectedTemplate, isOpen, setIsOpen } = useTemplateStore();

    const closeViewTemplate = () => {
        setIsOpen(false);
    };

    const handleDownload = () => {
        // Dummy function for download
        console.log('Download button clicked');
    };

    return (
        <div className={isOpen ? "viewtemp-main" : "viewtemp-main hide"}>
            <div className='viewtemp-overlay' onClick={closeViewTemplate}></div>
            <div className='viewtemp-container'>
                <button className='viewtemp-close-button' onClick={closeViewTemplate}>×</button>
                <div className='viewtemp-content'>
                    <div className='viewtemp-template-preview'>
                        <embed src={selectedTemplate.src} type="application/pdf" className='viewtemp-template-embed' />
                    </div>
                    <div className='viewtemp-template-details'>
                        <h2>{selectedTemplate.name}</h2>
                        <p>{selectedTemplate.title}</p>
                        <p>Template Number: {selectedTemplate.templateNumber}</p>
                        <div className='viewtemp-template-categories'>
                            {selectedTemplate.categories.map((category, index) => (
                                <span key={index} className='viewtemp-category-tag'>{category}</span>
                            ))}
                        </div>
                        {selectedTemplate.recommended && <span className='viewtemp-recommended-mark'>Recommended by Recruiters</span>}
                        <button className='viewtemp-download-button' onClick={handleDownload}>Download Template</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewTemp;
