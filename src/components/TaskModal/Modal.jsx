import React, { useEffect } from 'react';
import './Modal.css';

const body = document.querySelector('body');

const Modal = ({ children, active, setActive }) => {
  useEffect(() => {
    const handleEscapeClose = event => {
      if (event.code === 'Escape') {
        setActive(false);
      }
    };

    window.addEventListener('keydown', handleEscapeClose);

    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
      body.classList.toggle('no-scroll');
    };
  }, [setActive]);

  return (
    <div
      className={active ? 'overlay active' : 'overlay'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'modal active' : 'modal'}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
