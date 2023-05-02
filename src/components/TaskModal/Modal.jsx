import React from 'react';
import './Modal.css';

const Modal = ({ children, active, setActive }) => {
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
