import { Meta } from '@storybook/react';
import React, { useState } from 'react';
import Button from '../Button/Button';
import { purple } from '../../styles/color';
import Modal from './Modal';
import Flex from '../Flex/Flex';

export default {
  title: 'Components/Modal',
  // component: Modal,
} as Meta;

export const Basic = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleSaveContent = () => {
    console.log('Save Contents');
  };

  return (
    <>
      <Button
        children="Open"
        variant="solid"
        size="medium"
        color={purple['500']}
        onClick={handleOpenModal}
      />
      <Modal.Root isOpen={isOpen} setIsOpen={setIsOpen}>
        <Modal.BackDrop />
        <Modal.Content>
          <Modal.Header>Modal Header</Modal.Header>
          <Modal.Body>Modal Body Content</Modal.Body>
          <Flex gap={12} justifyContent="center">
            <Modal.CloseTrigger>Cancel</Modal.CloseTrigger>
            <Modal.NextTrigger customAction={handleSaveContent}>
              Save
            </Modal.NextTrigger>
          </Flex>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};
