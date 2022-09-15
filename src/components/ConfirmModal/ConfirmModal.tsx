import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import React from 'react';

function ConfirmModal({
  isOpen,
  title,
  confirmText,
  cancelText,
  children,
  onCancel,
  onConfirm,
}: {
  isOpen?: boolean;
  title: string;
  confirmText: string;
  cancelText: string;
  children: React.ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <Modal isOpen={isOpen} className="rounded-4" toggle={onCancel}>
      <ModalHeader className="text-black" toggle={onCancel}>
        <i className="ri-question-line" /> {title}
      </ModalHeader>
      <ModalBody>
        {children}
        <div className="d-flex justify-content-around mt-3">
          <button
            className="btn btn-primary shadow d-flex align-items-center"
            onClick={onCancel}
            type="button"
          >
            <i className="ri-close-line me-1" /> {cancelText}
          </button>{' '}
          <button
            className="btn btn-outline-success text-black shadow d-flex align-items-center"
            onClick={onConfirm}
            type="button"
          >
            <i className="ri-check-line me-1" /> {confirmText}
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default ConfirmModal;
