'use client';

import React, { useState, useEffect, MouseEvent } from 'react';
import Modal from 'react-modal';
import RegisterForm from './register-form/register-form';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(77,77,77,0.6)',
    zIndex: '9000',
  },
};

Modal.setAppElement('body');

interface LoginProps {
  children: any;
}

const LoginModal = (props: LoginProps) => {
  const { children } = props;
  const [open, setOpen] = useState<boolean>(false);
  let timer: NodeJS.Timeout;

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  });

  const closeModal = () => {
    document
      .getElementById('login-modal')
      ?.classList.remove('ReactModal__Content--after-open');

    if (document.querySelector('.ReactModal__Overlay')) {
      (
        document.querySelector('.ReactModal__Overlay') as HTMLElement
      ).style.opacity = '0';
    }

    timer = setTimeout(() => {
      setOpen(false);
    }, 350);
  };

  const openModal = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <span onClick={openModal}>
        {children}
      </span>
      {open ? (
        <Modal
          isOpen={open}
          style={customStyles}
          contentLabel="login Modal"
          className="modal-dialog"
          overlayClassName="d-flex align-items-center justify-content-center"
          id="login-modal"
          onRequestClose={closeModal}
          closeTimeoutMS={10}
        >
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" onClick={closeModal}>
                <span aria-hidden="true">
                  <i className="icon-close"></i>
                </span>
              </button>
              <RegisterForm onSubmit={closeModal}/>
            </div>
          </div>
        </Modal>
      ) : (
        ''
      )}
    </>
  );
};

export default LoginModal;
