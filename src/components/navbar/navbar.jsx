import React from "react";
import '../../App.css';
import { useTranslation } from 'react-i18next';



const GetIn = () => {
    const { i18n } = useTranslation();
    function changeLanguage(language) {
        i18n.changeLanguage(language);

      }
    return (
        <nav>
            <div className='navigation'>
                <a href="/home" className='hover-underline-animation'> HOME </a>
                <a className='hover-underline-animation' onClick={() => changeLanguage("en")}> INGLES </a>
                <a className='hover-underline-animation' onClick={() => changeLanguage("es")}> ESPAÑOL </a>
            </div>
        </nav>
    );
};

export default GetIn;