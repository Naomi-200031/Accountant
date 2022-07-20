import React from "react";
import '../../App.css';



const GetIn = () => {
    return (
        <nav>
            <div className='navigation'>
                <a href="/home" className='home-info'> HOME </a>
                <a href="/ingles" className='lenguaje-in'> INGLES </a>
                <a href="/español" className='lenguaje-es'> ESPAÑOL </a>
            </div>
        </nav>
    );
};

export default GetIn;