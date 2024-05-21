import React, { useState } from 'react';
import './Templates.css';
import Template from './template_subs/Template';
import ViewTemp from './template_subs/ViewTemp';

function Templates() {
    const handleIndustryChange = (e) => {
        console.log("Industry changed:", e.target.value);
    };

    const handleRecommendedChange = (e) => {
        console.log("Recommended filter changed:", e.target.checked);
    };

    const applyFilters = () => {
        console.log("Filters applied");
    };

    const resetFilters = () => {
        console.log("Filters reset");
    };

    const handleSearchChange = (e) => {
        console.log("Search query:", e.target.value);
    };

    const handleExperienceChange = (e) => {
        console.log("Experience level changed:", e.target.value);
    };

    const [templates, setTemplates] = useState([{
        src: "https://firebasestorage.googleapis.com/v0/b/template-nest-da656.appspot.com/o/Resume_Pdf%2FAlakh-Patel-Resume-FS-2024.pdf?alt=media&token=6aee2140-2989-4582-8d35-b2b240619032",
        name: "Full Stack Developer Resume",
        templateNumber: "FS-2024",
        categories: ["Information Technology", "Web Development", "Software Development"],
        recommended: true

    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/template-nest-da656.appspot.com/o/Resume_Pdf%2FResume%203.pdf?alt=media&token=cc01dc38-e539-4d8a-9574-65bbc2254d12",
        name: "Frontend Developer Resume",
        templateNumber: "FD-2023",
        categories: ["Information Technology", "Web Development", "Software Development"],
        recommended: false
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/template-nest-da656.appspot.com/o/Resume_Pdf%2FResume%203.pdf?alt=media&token=cc01dc38-e539-4d8a-9574-65bbc2254d12",
        name: "Frontend Developer Resume",
        templateNumber: "FD-2023",
        categories: ["Information Technology", "Web Development", "Software Development"],
        recommended: false
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/template-nest-da656.appspot.com/o/Resume_Pdf%2FResume%203.pdf?alt=media&token=cc01dc38-e539-4d8a-9574-65bbc2254d12",
        name: "Frontend Developer Resume",
        templateNumber: "FD-2023",
        categories: ["Information Technology", "Web Development", "Software Development"],
        recommended: false
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/template-nest-da656.appspot.com/o/Resume_Pdf%2FResume%203.pdf?alt=media&token=cc01dc38-e539-4d8a-9574-65bbc2254d12",
        name: "Frontend Developer Resume",
        templateNumber: "FD-2023",
        categories: ["Information Technology", "Web Development", "Software Development"],
        recommended: false
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/template-nest-da656.appspot.com/o/Resume_Pdf%2FResume%203.pdf?alt=media&token=cc01dc38-e539-4d8a-9574-65bbc2254d12",
        name: "Frontend Developer Resume",
        templateNumber: "FD-2023",
        categories: ["Information Technology", "Web Development", "Software Development"],
        recommended: false
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/template-nest-da656.appspot.com/o/Resume_Pdf%2FResume%203.pdf?alt=media&token=cc01dc38-e539-4d8a-9574-65bbc2254d12",
        name: "Frontend Developer Resume",
        templateNumber: "FD-2023",
        categories: ["Information Technology", "Web Development", "Software Development"],
        recommended: false
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/template-nest-da656.appspot.com/o/Resume_Pdf%2FResume%203.pdf?alt=media&token=cc01dc38-e539-4d8a-9574-65bbc2254d12",
        name: "Frontend Developer Resume",
        templateNumber: "FD-2023",
        categories: ["Information Technology", "Web Development", "Software Development"],
        recommended: false
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/template-nest-da656.appspot.com/o/Resume_Pdf%2FResume%203.pdf?alt=media&token=cc01dc38-e539-4d8a-9574-65bbc2254d12",
        name: "Frontend Developer Resume",
        templateNumber: "FD-2023",
        categories: ["Information Technology", "Web Development", "Software Development"],
        recommended: false
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/template-nest-da656.appspot.com/o/Resume_Pdf%2FResume%203.pdf?alt=media&token=cc01dc38-e539-4d8a-9574-65bbc2254d12",
        name: "Frontend Developer Resume",
        templateNumber: "FD-2023",
        categories: ["Information Technology", "Web Development", "Software Development"],
        recommended: false
    }

    ]); // Add initial state here
    return (
        <div className='template_main'>
            <ViewTemp />
            <div className='template_header'>
                <h1>Templates</h1>
                <p>Choose from a variety of templates to get started with your job search.</p>
                <p className='new_templates'>New templates are added every week.</p>
            </div>
            <div className='template_filter_parent'>
                <div className='template_filter'>
                    <div className='filter_left'>
                        <div className='filter_top'>
                            <div className='filter_item'>
                                <label htmlFor='industry'>Industry:</label>
                                <div className="custom-dropdown">
                                    <select id='industry' onChange={handleIndustryChange}>
                                        <option value=''>Select Industry</option>
                                        <option value="All">All</option>
                                        <option value='Human Resource'>Human Resource</option>
                                        <option value='Information Technology'>Information Technology</option>
                                        <option value='Finance & Accounting'>Finance & Accounting</option>
                                        {/* Add more options as needed */}
                                    </select>
                                    <div className="dropdown-icon"></div>
                                </div>
                            </div>

                            <div className='filter_item'>
                                <label htmlFor='experience'>Experience Level:</label>
                                <div className="custom-dropdown">
                                    <select id='experience' onChange={handleExperienceChange}>
                                        <option value=''>Select Experience Level</option>
                                        <option value='Newbie/Junior'>Newbie/Junior</option>
                                        <option value='Intermediate'>Intermediate</option>
                                        <option value='Experienced'>Experienced</option>
                                    </select>
                                    <div className="dropdown-icon"></div>
                                </div>
                            </div>
                        </div>
                        <div className='filter_bottom_bottom'>
                            <div className='filter_item'>
                                <label className='checkbox_label' htmlFor='recommended'>
                                    <input type='checkbox' id='recommended' onChange={handleRecommendedChange} />
                                    <span className='checkmark'></span>
                                    <span>Recommended by Recruiters</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="filter_buttons">
                        <button className="apply-button" onClick={applyFilters}>Apply</button>
                        <button className="reset-button" onClick={resetFilters}>Reset</button>
                    </div>
                </div></div>

            <div className='template_list'>
                {templates.map((template, index) => (
                    <Template
                        key={index}
                        src={template.src}
                        name={template.name}
                        title={template.title}
                        templateNumber={template.templateNumber}
                        categories={template.categories}
                        recommended={template.recommended}
                    />
                ))}
            </div>
        </div>
    );
}

export default Templates;
