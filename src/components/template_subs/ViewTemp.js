import React from 'react';
import './ViewTemp.css';
import useTemplateStore from '../TemplateStore';
import { useUserStore } from '../../Stores/UserStore';
import axios from 'axios';

function ViewTemp({ OpenIt }) {
    const { user, clearUser } = useUserStore();
    const { selectedTemplate, isOpen, setIsOpen } = useTemplateStore();
    const newSrc = selectedTemplate.src + "#toolbar=0&navpanes=0"
    const closeViewTemplate = () => {
        setIsOpen(false);
    };

    const handleDownload = async () => {
        const token = user?.token;
        if (!token) {
            window.location.href = '/login';
            return;
        }
        try {
            const response = await axios.post(process.env.REACT_APP_GET_DOWNLOAD_LINK, {
                token: token,
                templateId: selectedTemplate?.templateId
            })
            if (response.status === 400) {
                alert("Session expired. Please login again.");
                clearUser();
                window.location.href = '/login';
            }
            if (response.status === 200) {
                console.log(response.data)
                const isPremiumMember = response.data.isPremiumUser;
                if (!isPremiumMember) {
                    OpenIt();
                    return;
                }
                else {
                    const downloadLink = response.data.downloadLink;
                    if (downloadLink) {
                        window.open(downloadLink, '_blank');
                    } else {
                        console.log('Failed to get download link');
                        alert('Failed to get download link');
                    }
                }
            } else if (response.status === 401) {
                window.location.href = '/login';

                clearUser()
            } else {
                console.log('Failed to get download link');
                alert('Failed to get download link');
            }
        } catch (error) {
            console.log(error);
            if (error.response.status === 400) {
                alert("Session expired. Please login again.");
                window.location.href = '/login';
                clearUser();
            }
        }

        console.log('Download button clicked');
    };

    return (
        <div className={isOpen ? "viewtemp-main" : "viewtemp-main hide"}>
            <div className='viewtemp-overlay' onClick={closeViewTemplate}></div>
            <div className='viewtemp-container'>
                <button className='viewtemp-close-button' onClick={closeViewTemplate}>×</button>
                <div className='viewtemp-content'>
                    <div className='viewtemp-template-preview'>
                        <embed src={newSrc} type="application/pdf" className='viewtemp-template-embed' />
                    </div>
                    <div className='viewtemp-template-details'>
                        <h2>{selectedTemplate.name}</h2>
                        <p>{selectedTemplate.title}</p>
                        {/* <p>Template Number: {selectedTemplate.templateNumber}</p> */}
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
