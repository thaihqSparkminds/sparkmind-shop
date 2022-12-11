import { Modal } from 'antd';
import React from 'react';

interface ModalComponentProps {
  openModal: boolean;
  title: string;
  onOk: () => void;
  onCancel?: () => void;
  setOpenModal: (value: boolean) => void;
  description: string;
}

export const ModalComponent: React.FunctionComponent<ModalComponentProps> = ({
  openModal,
  title,
  onOk,
  onCancel,
  setOpenModal,
  description,
}) => {
  const handleOk = () => {
    onOk();
    setOpenModal(false);
  };
  const handleCancel = () => {
    onCancel && onCancel();
    setOpenModal(false);
  };
  return (
    <Modal title={title} visible={openModal} onOk={handleOk} onCancel={handleCancel}>
      <p>{description}</p>
    </Modal>
  );
};
