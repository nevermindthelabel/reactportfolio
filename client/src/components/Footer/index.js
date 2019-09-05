import React from 'react';

const Footer = () => {
  return <div className="fixed-bottom bg-light"><p className='text-center mt-3 mb-2'>Developed by <a href='https://github.com/nevermindthelabel'> Matt Kilcup</a> &copy; 2018 - {new Date().getFullYear()}</p></div>;
}

export default Footer;
