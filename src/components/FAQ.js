import React, { useState } from 'react';
import './FAQ.css';
import Accordion from './faq_subs/Accordian';

function FAQ() {
    const [questions, setQuestions] = useState([
        {
            question: 'How are templates collected?',
            answer: 'Templates are sourced voluntarily by individuals or collected from the public domain. If you encounter any issues with a template, please fill out our contact form.'
        },
        {
            question: 'Is my payment secure?',
            answer: 'Yes, your payment is securely processed through Stripe. We do not collect or have access to your payment information.'
        },
        {
            question: 'What should I do if I face any issues?',
            answer: 'If you encounter any issues on the website or have any other concerns, please contact us through our contact form.'
        },
        {
            question: 'Can I contribute my own template?',
            answer: 'Certainly! You can email us at template-nest@gmail.com to contribute your own template.'
        },
        {
            question: 'How do I know the templates are of good quality?',
            answer: 'Template Nest does not claim a guarantee of the quality of templates. These templates are provided for your use, and we encourage you to recommend them to your friends if you find them useful.'
        },
        {
            question: 'Are there any additional fees or hidden charges?',
            answer: 'No, there are no additional fees or hidden charges. The premium membership fee is $4.99 for a lifetime, and there are no charges before or after that.'
        },
        {
            question: 'Can I get a refund if I am not satisfied with a template?',
            answer: 'Unfortunately, refunds are not available. However, if you encounter any issues with accessing templates on the website after payment, please contact us.'
        },
        {
            question: 'How often are new templates added?',
            answer: 'New templates are added every week to keep our library fresh and relevant for our users.'
        },
        {
            question: 'How can I contact Template Nest?',
            answer: 'You can contact us by filling out the form (click on Contact on the navbar) or via email at template-nest@gmail.com.'
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

export default FAQ;
