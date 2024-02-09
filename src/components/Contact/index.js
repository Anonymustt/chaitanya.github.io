import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_fby5iwm',
                'template_9j95g6c',
                refForm.current,
                'F58_X4wDyeYFmqYiE'
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send, please retry');
                }
            );
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p></p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" required />
                                </li>
                                <li className="half">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" required />
                                </li>
                                <li>
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" required />
                                </li>
                                <li>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" required></textarea>
                                </li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
