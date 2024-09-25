import React from 'react';
import './ButtonStyles.css'; // Ensure you have correct styles
import ContactButton from './Contact';
import CVButton from './cvButton';


const ButtonComponent: React.FC = () => {
    return (
        <div className="container">
            <ContactButton /> {/* Renders the Contact Me button */}
            <CVButton /> {/* Renders the Download CV button */}
        </div>
    );
}

export default ButtonComponent;
