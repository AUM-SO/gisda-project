import React from 'react';
import { BiUpArrow } from "react-icons/bi"

window.addEventListener('scroll', function () {
  let button = document.getElementById('myButton');
  if (window.pageYOffset > 2300) {
    button.classList.add('showTopButton');
  } else {
    button.classList.remove('showTopButton');
  }
});

function ScrollToTopButton() {

  return (
    <button className='ScrollToTopButton' id="myButton" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <BiUpArrow id='icontotop' />
    </button>
  );
}

export default ScrollToTopButton;
