import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import ShiftedContent from '../../components/ShiftedContent';
import './Retro.css';
import Card from '../../components/Card';
import EditModal from '../../components/EditModal';
import UserModal from '../../components/UserModal';
import List from '../../components/List';
import { RootDispatch, RootState } from '../../utils/store';
import actions from '../../actions';
import { useSocket } from '../../socket/useSocket';

function Retro() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const dispatch = useDispatch<RootDispatch>();
  const socketController = useSocket();

  const cards = useSelector((state: RootState) => state.cards);

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

  return (
    <div>
      <Sidebar
        isOpen={isNavbarOpen}
        onSidebarToggleClick={() => setIsNavbarOpen(!isNavbarOpen)}
      />
      <ShiftedContent>
        <div className="row m-0 vh-100">
          <List id={0} type="positive" columnWidth={4}>
            {cards
              .filter(
                (card) =>
                  card.column === 0 &&
                  !cards.some((nestedCard) => nestedCard.stackedOn === card.id),
              )
              .map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  content={card.content}
                  onDecreaseVote={() => {}}
                  votesCount={card.votes}
                  onDelete={() => handleCardDelete(card.id)}
                  onEdit={() => {}}
                  onGroup={handleCardGroup}
                  onIncreaseVote={() => {}}
                  stack={!!card.stackedOn}
                />
              ))}
          </List>
          <List id={1} type="negative" columnWidth={4}>
            {cards
              .filter(
                (card) =>
                  card.column === 1 &&
                  !cards.some((nestedCard) => nestedCard.stackedOn === card.id),
              )
              .map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  content={card.content}
                  onDecreaseVote={() => {}}
                  votesCount={card.votes}
                  onDelete={() => handleCardDelete(card.id)}
                  onEdit={() => {}}
                  onGroup={handleCardGroup}
                  onIncreaseVote={() => {}}
                  stack={!!card.stackedOn}
                />
              ))}
          </List>
          <List id={2} type="actions" columnWidth={4}>
            {cards
              .filter(
                (card) =>
                  card.column === 2 &&
                  !cards.some((nestedCard) => nestedCard.stackedOn === card.id),
              )
              .map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  content={card.content}
                  onDecreaseVote={() => {}}
                  votesCount={card.votes}
                  onDelete={() => handleCardDelete(card.id)}
                  onEdit={() => {}}
                  onGroup={handleCardGroup}
                  onIncreaseVote={() => {}}
                  stack={!!card.stackedOn}
                />
              ))}
          </List>
        </div>
      </ShiftedContent>
      <EditModal />
      <UserModal />
    </div>
  );
}

export default Retro;
