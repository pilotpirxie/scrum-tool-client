import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import EditModal from '../../components/EditModal';
import UserModal from '../../components/UserModal';
import { useSocket } from '../../socket/useSocket';
import { useAppSelector } from '../../utils/hooks';
import useLocalStorage from '../../utils/useLocalStorage';
import Retro from '../Retro';

function Board() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const socketController = useSocket();

  const [modalCardId, setModalCardId] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editModalContent, setEditModalContent] = useState<string>('');

  const [nickname, setNickname] = useLocalStorage<string>(
    'nickname',
    `Guest${Math.floor(Math.random() * 10000)}`,
  );

  const [avatar, setAvatar] = useLocalStorage<number>(
    'avatar',
    Math.floor(Math.random() * 89),
  );

  useEffect(() => {
    if (!socketController.socket?.connected) {
      if (!id) navigate('/');

      socketController.connect(nickname, avatar, id || '');
    }

    return () => {
      socketController.socket?.disconnect();
    };
  }, []);

  const handleEditModalSave = () => {
    socketController.socket?.emit('UpdateCard', {
      cardId: modalCardId,
      content: editModalContent,
    });
    setIsEditModalOpen(false);
  };

  const handleEditModalDelete = () => {
    socketController.socket?.emit('DeleteCard', { cardId: modalCardId });

    setIsEditModalOpen(false);
  };

  const localUser = useAppSelector((state) => state.config.localUser);

  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [userModalNickname, setUserModalNickname] = useState('');
  const [userModalAvatar, setUserModalAvatar] = useState(0);

  const handleUserModalOpen = () => {
    setUserModalNickname(localUser.nickname);
    setUserModalAvatar(localUser.avatar);
    setIsUserModalOpen(true);
  };

  const handleUserModalSave = () => {
    if (!userModalNickname) return;

    socketController.socket?.emit('ChangeUserData', {
      nickname: userModalNickname,
      avatar: userModalAvatar,
    });
    setNickname(userModalNickname);
    setAvatar(userModalAvatar);
    setIsUserModalOpen(false);
  };

  return (
    <div>
      <Sidebar
        isOpen={isNavbarOpen}
        onSidebarToggleClick={() => setIsNavbarOpen(!isNavbarOpen)}
        onChangeUserData={handleUserModalOpen}
      />
      <Retro
        setIsEditModalOpen={setIsEditModalOpen}
        setEditModalContent={setEditModalContent}
        setModalCardId={setModalCardId}
      />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleEditModalSave}
        onChange={setEditModalContent}
        onDelete={handleEditModalDelete}
        content={editModalContent}
      />
      <UserModal
        isOpen={isUserModalOpen}
        avatar={userModalAvatar}
        nickname={userModalNickname}
        onSave={handleUserModalSave}
        onChangeAvatar={setUserModalAvatar}
        onChangeNickname={setUserModalNickname}
        onClose={() => setIsUserModalOpen(false)}
      />
    </div>
  );
}

export default Board;
