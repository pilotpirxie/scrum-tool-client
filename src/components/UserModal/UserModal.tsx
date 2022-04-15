import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import AvatarItem from './AvatarItem/AvatarItem';
import './UserModal.css';

function UserModal({ isOpen }: { isOpen?: boolean }) {
  return (
    <Modal isOpen={isOpen} className="rounded-4">
      <ModalHeader className="text-black" toggle={() => {}}>
        <i className="ri-user-line" /> User Settings
      </ModalHeader>
      <ModalBody>
        <input
          type="text"
          className="form-control shadow border-primary border-2 text-black"
          placeholder="Username"
        />
        <div className="row py-3 user-modal">
          <AvatarItem onSelect={() => {}} image={0} />
          <AvatarItem onSelect={() => {}} image={0} />
          <AvatarItem onSelect={() => {}} image={0} selected />
          <AvatarItem onSelect={() => {}} image={0} />
          <AvatarItem onSelect={() => {}} image={0} />
          <AvatarItem onSelect={() => {}} image={0} />
          <AvatarItem onSelect={() => {}} image={0} />
          <AvatarItem onSelect={() => {}} image={0} />
          <AvatarItem onSelect={() => {}} image={0} />
          <AvatarItem onSelect={() => {}} image={0} />
          <AvatarItem onSelect={() => {}} image={0} />
        </div>
        <div className="d-flex justify-content-end mt-3">
          <Button color="primary" className="shadow d-flex align-items-center">
            <i className="ri-save-line me-1" /> Save
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default UserModal;
