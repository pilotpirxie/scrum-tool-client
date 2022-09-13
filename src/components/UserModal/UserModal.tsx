import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import AvatarItem from './AvatarItem/AvatarItem';
import './UserModal.css';

function UserModal({
  isOpen,
  onChangeAvatar,
  nickname,
  onChangeNickname,
  onClose,
  onSave,
  avatar,
}: {
  isOpen?: boolean;
  avatar: number;
  nickname: string;
  onChangeAvatar: (avatar: number) => void;
  onChangeNickname: (nickname: string) => void;
  onClose: () => void;
  onSave: () => void;
}) {
  const avatars = [];

  for (let i = 0; i <= 88; i++) {
    avatars.push(i);
  }

  return (
    <Modal isOpen={isOpen} className="rounded-4" toggle={onClose}>
      <ModalHeader className="text-black" toggle={onClose}>
        <i className="ri-user-line" /> User Settings
      </ModalHeader>
      <ModalBody>
        <input
          type="text"
          className="form-control shadow border-primary border-2 text-black mb-3"
          placeholder="Username"
          value={nickname}
          onChange={(e) => onChangeNickname(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onSave();
            }
          }}
        />
        <div className="row py-3 user-modal">
          {avatars.map((avatarId) => (
            <AvatarItem
              key={avatarId}
              onSelect={() => onChangeAvatar(avatarId)}
              image={avatarId}
              selected={avatar === avatarId}
            />
          ))}
        </div>
        <div className="d-flex justify-content-end mt-3">
          <button
            className="btn btn-primary shadow d-flex align-items-center"
            onClick={onSave}
            disabled={!nickname}
            type="button"
          >
            <i className="ri-save-line me-1" /> Save
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default UserModal;
