import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import UserModal from '../../components/UserModal';
import { useSocket } from '../../socket/useSocket';
import { useAppSelector } from '../../utils/hooks';
import useLocalStorage from '../../utils/useLocalStorage';
import Planning from '../Planning/Planning';
import Retro from '../Retro';

function Board() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const socketController = useSocket();

  const [nickname, setNickname] = useLocalStorage<string>(
    'nickname',
    `Guest${Math.floor(Math.random() * 10000)}`,
  );

  const [avatar, setAvatar] = useLocalStorage<number>(
    'avatar',
    Math.floor(Math.random() * 89),
  );

  const localUser = useAppSelector((state) => state.config.localUser);
  const board = useAppSelector((state) => state.config.board);

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

  useEffect(() => {
    if (id !== '' && window.localStorage.getItem('nickname') === null) {
      handleUserModalOpen();
    }

    if (!socketController.socket?.connected) {
      if (!id) navigate('/');

      socketController.connect(nickname, avatar, id || '');
    }

    return () => {
      socketController.socket?.disconnect();
    };
  }, []);

  return (
    <div>
      <Sidebar
        isOpen={isNavbarOpen}
        onSidebarToggleClick={() => setIsNavbarOpen(!isNavbarOpen)}
        onChangeUserData={handleUserModalOpen}
      />
      {board.mode === 'retro' && <Retro />}
      {(board.mode === 'planning_hidden' ||
        board.mode === 'planning_revealed') && <Planning />}

      <UserModal
        isOpen={isUserModalOpen}
        avatar={userModalAvatar}
        nickname={userModalNickname}
        onSave={handleUserModalSave}
        onChangeAvatar={setUserModalAvatar}
        onChangeNickname={setUserModalNickname}
        onClose={handleUserModalSave}
      />
    </div>
  );
}

export default Board;
