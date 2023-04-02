import React, { useEffect } from 'react';
import { BiUpArrow } from "react-icons/bi"

function ScrollToTopButton() {
  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById('myButton');
      if (window.pageYOffset > 2300) {
        button.classList.add('showTopButton');
      } else {
        button.classList.remove('showTopButton');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button className='ScrollToTopButton' id="myButton" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <BiUpArrow id='icontotop' />
    </button>
  );
}

export default ScrollToTopButton;

