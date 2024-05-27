import React, { useEffect } from 'react';
import "./cursor.css";

const Cursor = () => {
    
    useEffect(() => {
        document.body.setAttribute('data-theme', localStorage.getItem('data-theme'));

        const cursor = document.querySelector('.cursor');

        const handleMouseMove = (e) => {
            cursor.setAttribute('style', 'top:' + (e.pageY - 20) + 'px; left:' + (e.pageX - 20) + 'px;');
        };

        const handleClick = () => {
            cursor.classList.add('expand');
            setTimeout(() => {
                cursor.classList.remove('expand');
            }, 500);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
        };
    }, []);
    return <div className="cursor"></div>;
}

export default Cursor
