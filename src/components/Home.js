import React from 'react';
import './Home.css'; // Import your CSS file
import Card from './home_subs/Card';

import industryTemplateImage from '../logos/industry.webp'; // titan Ui
import modernDesignImage from '../logos/modern.jpg'; // Zety
import instantDownloadImage from '../logos/instant.jpg'; // VectorStock
import saveTimeImage from "../logos/savetime.png"; // latino community credit union
import recommendedImage from "../logos/prof.webp"; // AllTopStartups

function Home() {
    const go2Templates = () => {
        window.location.href = '/templates'
    }

    return (
        <div className="home_container">
            <h1 className="home_tagline">
                Explore hundreds of professionally designed templates to create<br />
                <span className="highlight"> standout </span>
                resumes and cover letters.
            </h1>
            <button className='home_explore_btn' onClick={go2Templates}>Explore Templates</button>
            <div className="home_features">
                <Card title="Industry-Specific Templates" imgSrc={industryTemplateImage} description="Find templates tailored to various industries, including IT, finance, marketing, and more." />
                <Card title="Modern Design" imgSrc={modernDesignImage} description="Choose from modern and stylish templates designed to impress recruiters and hiring managers." />
                <Card title="Instant Downloads" imgSrc={instantDownloadImage} description="Download your chosen templates instantly and start using them right away." />
            </div>
            <div className="home_features2">
                <Card title="Time-Saving" imgSrc={saveTimeImage} description="Save time and effort with pre-designed templates, allowing you to focus on your job search." />
                <Card title="Templates Recommended by Recruiters" imgSrc={recommendedImage} description="Discover templates that are recommended by recruiters and industry professionals to maximize your chances of success." />
            </div>
        </div>
    );
}

export default Home;
