import React, { useState } from 'react';
import './FAQ.css';
import Accordion from './faq_subs/Accordian';

function FAQ() {
    const [questions, setQuestions] = useState([
        {
            question: 'Are the templates accredited?',
            answer: 'Our templates are sourced from various professionals and enthusiasts. While they are crafted with care and expertise, they do not come with formal accreditation. For specific requirements, please verify with your respective institutions or organizations.'
        },
        {
            question: 'Are there any licensing issues with using the logos or images?',
            answer: 'We take licensing issues very seriously. All logos and images used in our templates are either sourced from public domains, licensed appropriately, or contributed by users who hold the rights. If you believe there is an infringement, please contact us via the contact form.'
        },
        {
            question: 'How are these templates collected?',
            answer: 'Our templates are collected through multiple channels, including user submissions, internet resources, and contributions from volunteers. We ensure each template is reviewed for quality and relevance before being made available to you.'
        },
        {
            question: 'Is my payment secure?',
            answer: 'Yes, your payment is secure. We use Stripe for processing payments, which is a highly secure and trusted payment gateway. We do not store or have access to your payment details.'
        },
        {
            question: 'What should I do if I face any issues?',
            answer: 'If you encounter any issues, please reach out to us via the contact form on our website. Our support team will assist you in resolving your concerns promptly.'
        },
        {
            question: 'Can I contribute my own templates?',
            answer: 'Absolutely! We welcome contributions from our users. If you have a template that you think could benefit others, please submit it through our template submission form.'
        },
        {
            question: 'How do I know the templates are of good quality?',
            answer: 'Each template goes through a review process to ensure it meets our quality standards. However, since they are sourced from various contributors, we recommend reviewing and customizing them to fit your specific needs.'
        },
        {
            question: 'Are there any additional fees or hidden charges?',
            answer: 'No, there are no additional fees or hidden charges. The price you see is the price you pay. We believe in transparent pricing.'
        },
        {
            question: 'Can I get a refund if I am not satisfied with a template?',
            answer: 'Yes, we offer a satisfaction guarantee. If you are not satisfied with a template, please contact us within 30 days of your purchase, and we will process a refund for you.'
        },
        {
            question: 'How often are new templates added?',
            answer: 'We strive to add new templates regularly. Our goal is to keep our library fresh and relevant to meet the diverse needs of our users. Stay tuned for updates!'
        }
    ]);
    return (
        <div className='faq_main'>
            <h1>Frequently Asked Questions</h1>
            {questions.map((question, index) => (
                <Accordion key={index} question={question.question} answer={question.answer} />
            ))}

        </div>
    )
}

export default FAQ