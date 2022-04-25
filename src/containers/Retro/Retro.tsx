import { useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar/Sidebar';
import ShiftedContent from '../../components/ShiftedContent';
import './Retro.css';
import Card from '../../components/Card';
import EditModal from '../../components/EditModal';
import UserModal from '../../components/UserModal';
import List from '../../components/List';
import { RootState } from '../../utils/store';

function Retro() {
  // const { id } = useParams<{ id: string }>();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // const [cards, setCards] = useState([]);

  const cards = useSelector((state: RootState) => state.cards);

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
                  id={card.id}
                  content={card.content}
                  onDecreaseVote={() => {}}
                  votesCount={card.votes}
                  onDelete={() => {}}
                  onEdit={() => {}}
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
                  id={card.id}
                  content={card.content}
                  onDecreaseVote={() => {}}
                  votesCount={card.votes}
                  onDelete={() => {}}
                  onEdit={() => {}}
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
                  id={card.id}
                  content={card.content}
                  onDecreaseVote={() => {}}
                  votesCount={card.votes}
                  onDelete={() => {}}
                  onEdit={() => {}}
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
