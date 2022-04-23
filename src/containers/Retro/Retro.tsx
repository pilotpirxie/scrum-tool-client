import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import ShiftedContent from '../../components/ShiftedContent';
import './Retro.css';
import Card from '../../components/Card';
import EditModal from '../../components/EditModal';
import UserModal from '../../components/UserModal';
import List from '../../components/List';

function Retro() {
  // const { id } = useParams<{ id: string }>();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // const [cards, setCards] = useState([]);

  return (
    <div>
      <Sidebar
        isOpen={isNavbarOpen}
        onSidebarToggleClick={() => setIsNavbarOpen(!isNavbarOpen)}
      />
      <ShiftedContent>
        <div className="row m-0 vh-100">
          <List type="positive" columnWidth={4}>
            <Card
              id={0}
              content="Lorem ipsum dolor sit amet."
              onDecreaseVote={() => {}}
              votesCount={5}
              onDelete={() => {}}
              onEdit={() => {}}
              onIncreaseVote={() => {}}
            />
            <Card
              id={1}
              content="Lorem ipsum dolor sit amet."
              onDecreaseVote={() => {}}
              votesCount={5}
              onDelete={() => {}}
              onEdit={() => {}}
              onIncreaseVote={() => {}}
            />
            <Card
              id={2}
              content="Lorem ipsum dolor sit amet."
              onDecreaseVote={() => {}}
              votesCount={5}
              onDelete={() => {}}
              onEdit={() => {}}
              onIncreaseVote={() => {}}
              stack
            />
          </List>
          <List type="negative" columnWidth={4}>
            <Card
              id={3}
              content="Lorem ipsum dolor sit amet."
              onDecreaseVote={() => {}}
              votesCount={5}
              onDelete={() => {}}
              onEdit={() => {}}
              onIncreaseVote={() => {}}
            />
          </List>
          <List type="actions" columnWidth={4}>
            <Card
              id={4}
              content="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
              onDecreaseVote={() => {}}
              votesCount={5}
              onDelete={() => {}}
              onEdit={() => {}}
              onIncreaseVote={() => {}}
              stack
            />
            <Card
              id={5}
              content="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
              onDecreaseVote={() => {}}
              votesCount={5}
              onDelete={() => {}}
              onEdit={() => {}}
              onIncreaseVote={() => {}}
            />
            <Card
              id={6}
              content="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
              onDecreaseVote={() => {}}
              votesCount={5}
              onDelete={() => {}}
              onEdit={() => {}}
              onIncreaseVote={() => {}}
            />
            <Card
              id={7}
              content="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
              onDecreaseVote={() => {}}
              votesCount={5}
              onDelete={() => {}}
              onEdit={() => {}}
              onIncreaseVote={() => {}}
              stack
            />
          </List>
        </div>
      </ShiftedContent>
      <EditModal />
      <UserModal />
    </div>
  );
}

export default Retro;
