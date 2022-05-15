import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import ShiftedContent from '../../components/ShiftedContent';
import './Retro.css';
import Card from '../../components/Card';
import EditModal from '../../components/EditModal';
import UserModal from '../../components/UserModal';
import List from '../../components/List';
import { RootDispatch } from '../../utils/store';
import actions from '../../actions';
import { useSocket } from '../../socket/useSocket';
import { useAppSelector } from '../../utils/hooks';

function Retro() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const dispatch = useDispatch<RootDispatch>();
  const socketController = useSocket();

  const [modalCardId, setModalCardId] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editModalContent, setEditModalContent] = useState<string>('');

  const cards = useAppSelector((state) => state.cards);
  const board = useAppSelector((state) => state.config.board);

  useEffect(() => {
    if (!socketController.socket?.connected) {
      const nickname = `Guest${Math.floor(Math.random() * 10000)}`;

      if (!id) navigate('/');

      socketController.connect(nickname, id || '');
    }

    return () => {
      socketController.socket?.disconnect();
    };
  }, []);

  const handleCardGroup = (sourceCard: string, targetCard: string) => {
    dispatch({
      type: actions.cards.GroupCards,
      payload: {
        sourceCard,
        targetCard,
      },
    });
  };

  const handleCardDelete = (cardId: string) => {
    socketController.socket?.emit('DeleteCard', { cardId });
  };

  const handleUpvote = (cardId: string) => {
    socketController.socket?.emit('UpvoteCard', { cardId });
  };

  const handleDownvote = (cardId: string) => {
    socketController.socket?.emit('DownvoteCard', { cardId });
  };

  const handleCardEdit = (cardId: string, content: string) => {
    setIsEditModalOpen(true);
    setModalCardId(cardId);
    setEditModalContent(content);
  };

  const handleEditModalSave = () => {
    socketController.socket?.emit('UpdateCard', {
      cardId: modalCardId,
      content: editModalContent,
    });
    setIsEditModalOpen(false);
  };

  const handleEditModalDelete = () => {
    handleCardDelete(modalCardId);
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
    socketController.socket?.emit('ChangeUserData', {
      nickname: userModalNickname,
      avatar: userModalAvatar,
    });
    setIsUserModalOpen(false);
  };

  return (
    <div>
      <Sidebar
        isOpen={isNavbarOpen}
        onSidebarToggleClick={() => setIsNavbarOpen(!isNavbarOpen)}
        onChangeUserData={handleUserModalOpen}
      />
      <ShiftedContent>
        <div className="row m-0 vh-100">
          <List id={0} type="positive" columnWidth={board.stage === 2 ? 4 : 6}>
            {cards
              .filter(
                (card) =>
                  card.column === 0 &&
                  !cards.some((nestedCard) => nestedCard.stackedOn === card.id),
              )
              .map((card) => {
                const votesCount =
                  board.stage === 1
                    ? card.votes.filter((vote) => vote.userId === localUser.id)
                        .length
                    : card.votes.length;
                return (
                  <Card
                    key={card.id}
                    id={card.id}
                    content={card.content}
                    onDecreaseVote={() => handleDownvote(card.id)}
                    votesCount={votesCount}
                    onDelete={() => handleCardDelete(card.id)}
                    onEdit={() => handleCardEdit(card.id, card.content)}
                    onGroup={handleCardGroup}
                    onIncreaseVote={() => handleUpvote(card.id)}
                    stack={!!card.stackedOn}
                    displayVotes={board.stage !== 0}
                  />
                );
              })}
          </List>
          <List id={1} type="negative" columnWidth={board.stage === 2 ? 4 : 6}>
            {cards
              .filter(
                (card) =>
                  card.column === 1 &&
                  !cards.some((nestedCard) => nestedCard.stackedOn === card.id),
              )
              .map((card) => {
                const votesCount =
                  board.stage === 1
                    ? card.votes.filter((vote) => vote.userId === localUser.id)
                        .length
                    : card.votes.length;
                return (
                  <Card
                    key={card.id}
                    id={card.id}
                    content={card.content}
                    onDecreaseVote={() => handleDownvote(card.id)}
                    votesCount={votesCount}
                    onDelete={() => handleCardDelete(card.id)}
                    onEdit={() => handleCardEdit(card.id, card.content)}
                    onGroup={handleCardGroup}
                    onIncreaseVote={() => handleUpvote(card.id)}
                    stack={!!card.stackedOn}
                    displayVotes={board.stage !== 0}
                  />
                );
              })}
          </List>
          {board.stage === 2 && (
            <List id={2} type="actions" columnWidth={4}>
              {cards
                .filter(
                  (card) =>
                    card.column === 2 &&
                    !cards.some(
                      (nestedCard) => nestedCard.stackedOn === card.id,
                    ),
                )
                .map((card) => {
                  const votesCount =
                    board.stage === 1
                      ? card.votes.filter(
                          (vote) => vote.userId === localUser.id,
                        ).length
                      : card.votes.length;
                  return (
                    <Card
                      key={card.id}
                      id={card.id}
                      content={card.content}
                      onDecreaseVote={() => handleDownvote(card.id)}
                      votesCount={votesCount}
                      onDelete={() => handleCardDelete(card.id)}
                      onEdit={() => handleCardEdit(card.id, card.content)}
                      onGroup={handleCardGroup}
                      onIncreaseVote={() => handleUpvote(card.id)}
                      stack={!!card.stackedOn}
                      displayVotes={board.stage !== 0}
                    />
                  );
                })}
            </List>
          )}
        </div>
      </ShiftedContent>
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

export default Retro;
