import React, { useEffect, useState } from 'react';
import './Templates.css';
import Template from './template_subs/Template';
import ViewTemp from './template_subs/ViewTemp';
import PremiumFeatures from './PremiumFeatures';
import axios from 'axios';

function Templates() {
    const [templates, setTemplates] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [premiumModalOpen, setPremiumModalOpen] = useState(false); // Add initial state here
    const [industry, setIndustry] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');
    const [isRecommended, setIsRecommended] = useState(false);
    const [totalTemp, setTotalTemp] = useState(0);
    const [isFilterApplied, setIsFilterApplied] = useState(false);
    const handleIndustryChange = (e) => {
        setIndustry(e.target.value);
        console.log("Industry changed:", e.target.value);
    };

    const handleRecommendedChange = (e) => {
        setIsRecommended(e.target.checked);
        console.log("Recommended filter changed:", e.target.checked);
    };

    const handleExperienceChange = (e) => {
        setExperienceLevel(e.target.value);
        console.log("Experience level changed:", e.target.value);
    };

    const applyFilters = async () => {
        if (!industry && !experienceLevel && !isRecommended) {
            console.log("No filters applied");
            return;
        }

        const filters = {
            industry,
            experienceLevel,
            isRecommended,
        };

        const response = await axios.post(process.env.REACT_APP_GET_TEMPALTE_BF, {
            filters
        })
        const filteredTemplates = await response?.data.templates;
        const totalTemplates = await response?.data.totalTemplates || 0;
        setTotalTemp(totalTemplates);
        const totalPages = Math.ceil(totalTemplates / 10);
        setTotalPages(totalPages);
        if (!filteredTemplates || filteredTemplates.length === 0) {
            setTemplates([]);
            return
        }

        setIsFilterApplied(true);
        setTemplates(filteredTemplates);

        console.log("Response from server:", response?.data.templates);
        console.log("Filters applied", filters);
    };

    const resetFilters = () => {
        setIndustry('');
        setExperienceLevel('');
        setIsFilterApplied(false);

        setIsRecommended(false);
        fetchTemplates();

        console.log("Filters reset");
    };


    const fetchTemplates = async (page) => {
        try {
            const response = await axios.get(`http://localhost:5000/template/get-templates/${page}`);
            const data = await response?.data.templates;
            setTemplates(data);

            const totalTemplates = await response?.data.totalTemplates || 0;
            setTotalTemp(totalTemplates);
            const totalPages = Math.ceil(totalTemplates / 10);
            setTotalPages(totalPages);
        } catch (error) {
            console.error("Error fetching templates:", error);
        }
    };

    useEffect(() => {
        fetchTemplates(1);
    }, []);

    return (
        <div className='template_main'>
            <ViewTemp OpenIt={() => setPremiumModalOpen(true)} />
            {premiumModalOpen && <PremiumFeatures onClose={() => setPremiumModalOpen(false)} />}
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
                                    <select id='industry' value={industry} onChange={handleIndustryChange}>
                                        <option value=''>Select Industry</option>
                                        <option value="ALL">All</option>
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
                                    <select id='experience' value={experienceLevel} onChange={handleExperienceChange}>
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
                                    <input type='checkbox' id='recommended' checked={isRecommended} onChange={handleRecommendedChange} />
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
                </div>
            </div>
            <p className='total_templates'>{totalTemp} templates found</p>
            <div className='template_list'>
                {templates.map((template, index) => (
                    <Template
                        key={index}
                        src={template.templatePdfLink}
                        name={template.templateTitle}
                        templateId={template.templateId}
                        title=''
                        templateNumber={template.templateNumber}
                        categories={template.templateCategory}
                        recommended={template.isRecommended}
                    />
                ))}
                {templates.length === 0 && <h2>No templates found</h2>}
            </div>

            <div className='template_pagination'>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Templates;


// import React, { useEffect, useState } from 'react';
// import './Templates.css';
// import Template from './template_subs/Template';
// import ViewTemp from './template_subs/ViewTemp';
// import PremiumFeatures from './PremiumFeatures';
// import axios from 'axios';

// function Templates() {
//     const [templates, setTemplates] = useState([]);
//     const [premiumModalOpen, setPremiumModalOpen] = useState(false); // Add initial state here
//     const handleIndustryChange = (e) => {
//         console.log("Industry changed:", e.target.value);
//     };

//     const handleRecommendedChange = (e) => {
//         console.log("Recommended filter changed:", e.target.checked);
//     };

//     const applyFilters = () => {
//         console.log("Filters applied");

//     };

//     const resetFilters = () => {
//         console.log("Filters reset");
//     };


//     const handleExperienceChange = (e) => {
//         console.log("Experience level changed:", e.target.value);
//     };

//     const fetchTemplates = async () => {
//         const response = await axios.get("http://localhost:5000/template/get-templates/1")
//         const data = await response?.data.templates;

//         console.log("Templates fetched:", data)
//         setTemplates(data);
//     };

//     useEffect(() => {
//         fetchTemplates();
//     }, []);




//     return (
//         <div className='template_main'>
//             <ViewTemp OpenIt={() => setPremiumModalOpen(true)} />
//             {premiumModalOpen && <PremiumFeatures onClose={() => setPremiumModalOpen(false)} />}
//             <div className='template_header'>
//                 <h1>Templates</h1>
//                 <p>Choose from a variety of templates to get started with your job search.</p>
//                 <p className='new_templates'>New templates are added every week.</p>
//             </div>
//             <div className='template_filter_parent'>
//                 <div className='template_filter'>
//                     <div className='filter_left'>
//                         <div className='filter_top'>
//                             <div className='filter_item'>
//                                 <label htmlFor='industry'>Industry:</label>
//                                 <div className="custom-dropdown">
//                                     <select id='industry' onChange={handleIndustryChange}>
//                                         <option value=''>Select Industry</option>
//                                         <option value="All">All</option>
//                                         <option value='Human Resource'>Human Resource</option>
//                                         <option value='Information Technology'>Information Technology</option>
//                                         <option value='Finance & Accounting'>Finance & Accounting</option>
//                                         {/* Add more options as needed */}
//                                     </select>
//                                     <div className="dropdown-icon"></div>
//                                 </div>
//                             </div>

//                             <div className='filter_item'>
//                                 <label htmlFor='experience'>Experience Level:</label>
//                                 <div className="custom-dropdown">
//                                     <select id='experience' onChange={handleExperienceChange}>
//                                         <option value=''>Select Experience Level</option>
//                                         <option value='Newbie/Junior'>Newbie/Junior</option>
//                                         <option value='Intermediate'>Intermediate</option>
//                                         <option value='Experienced'>Experienced</option>
//                                     </select>
//                                     <div className="dropdown-icon"></div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='filter_bottom_bottom'>
//                             <div className='filter_item'>
//                                 <label className='checkbox_label' htmlFor='recommended'>
//                                     <input type='checkbox' id='recommended' onChange={handleRecommendedChange} />
//                                     <span className='checkmark'></span>
//                                     <span>Recommended by Recruiters</span>
//                                 </label>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="filter_buttons">
//                         <button className="apply-button" onClick={applyFilters}>Apply</button>
//                         <button className="reset-button" onClick={resetFilters}>Reset</button>
//                     </div>
//                 </div></div>

//             <div className='template_list'>
//                 {templates.map((template, index) => (
//                     <Template
//                         key={index}
//                         src={template.templatePdfLink}
//                         name={template.templateTitle}
//                         templateId={template.templateId}
//                         title=''
//                         templateNumber={template.templateNumber}
//                         categories={template.templateCategory}
//                         recommended={template.isRecommended}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Templates;
