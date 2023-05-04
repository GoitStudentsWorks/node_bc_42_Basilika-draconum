
// const ModalTaskList = ({ onCloseModal, ...rest }) => {
  
// };

// export default ModalTaskList;


import { useState } from 'react';
import { createPortal } from 'react-dom';
import css from './modal-task.module.scss';

const ModalTaskList = ({ closeModalHeader, logoutConfirm }) => {
  const [openModal] = useState(false);

  const template = (
    <div className={css['overlay']} onClick={closeModalHeader}>
      <div className={css['modal-header']}>
        <button onClick={closeModalHeader} className={css['modal-btnClose']} />
        <p className={css['modal-text']}>Are you sure?</p>    
      </div>
    </div>
  );

  return !openModal ? (
    createPortal(template, document.getElementById('modal'))
  ) : (
    <></>
  );
};

export default ModalTaskList;