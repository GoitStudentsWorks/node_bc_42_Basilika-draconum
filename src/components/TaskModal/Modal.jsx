import React, { useEffect } from 'react';
import style from './Modal.module.scss';
import { createPortal } from 'react-dom';

const body = document.querySelector('body');
const modalRoot = document.getElementById('modal');
console.log('modalRoot');

const Modal = ({ children, setActive }) => {
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

  return createPortal(
    <div className={style.overlay} onClick={() => setActive(false)}>
      <div className={style.modal} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
