import React, { useState } from 'react';
import './Template.css';
import useTemplateStore from '../TemplateStore.js';

function Template({ templateId, src, name, title, templateNumber, categories, recommended }) {
    const [selectedTemplate, setSelectedTemplates] = useState({
        templateId: templateId,
        src: src,
        name: name,
        title: title,
        templateNumber: templateNumber,
        categories: categories,
        recommended: recommended


    });
    const { setSelectedTemplate, setIsOpen } = useTemplateStore()



    const OpenViewTemplate = () => {
        setSelectedTemplate(selectedTemplate);
        setIsOpen(true)
    }

    return (
        <div className='template_card' onClick={OpenViewTemplate}>
            <div className='template_preview'>
                <div className="pdf_overlay"></div>
                <iframe src={src} type="application/pdf" scrolling='no' className='template_embed' title='resume-preview' />
            </div>
            <div className='template_info'>
                <p className='template_name'>{name}</p>
                <p className='template_title'>{title}</p>
                <p className='template_number'>#{templateNumber}</p>
                {/* <div className='template_categories'>
                    <span onClick={toggleAccordion} className={`accordion_icon ${isOpen ? 'open' : ''}`}></span>
                    <div className={`categories_content ${isOpen ? 'open' : ''}`}>
                        {categories.map((category, index) => (
                            <p key={index} className='tem_catergy'>{category}</p>
                        ))}
                    </div>
                </div> */}
                {recommended && <span className='recommended_mark'>Recommended</span>}
            </div>
        </div>
    );
}

export default Template;
