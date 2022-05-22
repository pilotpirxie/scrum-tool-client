import { useState } from 'react';
import List from '../../components/List';
import Card from '../../components/Card';
import ShiftedContent from '../../components/ShiftedContent';
import useWindowSize from '../../utils/useWindowSize';
import { useAppSelector } from '../../utils/hooks';
import { useSocket } from '../../socket/useSocket';

function Retro({
  setIsEditModalOpen,
  setModalCardId,
  setEditModalContent,
}: {
  setIsEditModalOpen: (isOpen: boolean) => void;
  setModalCardId: (cardId: string) => void;
  setEditModalContent: (content: string) => void;
}) {
  const cards = useAppSelector((state) => state.cards);
  const board = useAppSelector((state) => state.config.board);
  const localUser = useAppSelector((state) => state.config.localUser);

  const socketController = useSocket();

  const handleCardGroup = (cardId: string, stackedOn: string) => {
    socketController.socket?.emit('GroupCards', { cardId, stackedOn });
  };

  const handleCardUngroup = (cardId: string) => {
    socketController.socket?.emit('UngroupCards', { cardId });
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

  const [selectedColumn, setSelectedColumn] = useState(0);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;
  let columnWidth = 12;
  if (!isMobile) {
    columnWidth = board.stage === 2 ? 4 : 6;
  }

  return (
    <ShiftedContent>
      <div className="row m-0 vh-100">
        {(!isMobile || selectedColumn === 0) && (
          <List
            id={0}
            type="positive"
            columnWidth={columnWidth}
            selectedColumn={selectedColumn}
            onChangeColumn={setSelectedColumn}
          >
            {cards
              .filter(
                (card) =>
                  card.column === 0 &&
                  !cards.some((nestedCard) => nestedCard.stackedOn === card.id),
              )
              .filter(
                (card) => board.stage !== 0 || card.userId === localUser.id,
              )
              .sort((a, b) => {
                if (board.stage !== 2) {
                  return b.createdAt - a.createdAt;
                }
                return b.votes.length - a.votes.length;
              })
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
                    onUngroup={handleCardUngroup}
                    onIncreaseVote={() => handleUpvote(card.id)}
                    stack={!!card.stackedOn}
                    displayVotes={board.stage !== 0}
                    color="success"
                    createdAt={card.createdAt}
                  />
                );
              })}
          </List>
        )}
        {(!isMobile || selectedColumn === 1) && (
          <List
            id={1}
            type="negative"
            columnWidth={columnWidth}
            selectedColumn={selectedColumn}
            onChangeColumn={setSelectedColumn}
          >
            {cards
              .filter(
                (card) =>
                  card.column === 1 &&
                  !cards.some((nestedCard) => nestedCard.stackedOn === card.id),
              )
              .filter(
                (card) => board.stage !== 0 || card.userId === localUser.id,
              )
              .sort((a, b) => {
                if (board.stage !== 2) {
                  return b.createdAt - a.createdAt;
                }
                return b.votes.length - a.votes.length;
              })
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
                    onUngroup={handleCardUngroup}
                    onIncreaseVote={() => handleUpvote(card.id)}
                    stack={!!card.stackedOn}
                    displayVotes={board.stage !== 0}
                    color="danger"
                    createdAt={card.createdAt}
                  />
                );
              })}
          </List>
        )}
        {((board.stage === 2 && !isMobile) ||
          (isMobile && selectedColumn === 2)) && (
          <List
            id={2}
            type="actions"
            columnWidth={columnWidth}
            selectedColumn={selectedColumn}
            onChangeColumn={setSelectedColumn}
          >
            {cards
              .filter(
                (card) =>
                  card.column === 2 &&
                  !cards.some((nestedCard) => nestedCard.stackedOn === card.id),
              )
              .filter(
                (card) => board.stage !== 0 || card.userId === localUser.id,
              )
              .sort((a, b) => {
                if (board.stage !== 2) {
                  return b.createdAt - a.createdAt;
                }
                return b.votes.length - a.votes.length;
              })
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
                    onUngroup={handleCardUngroup}
                    onIncreaseVote={() => handleUpvote(card.id)}
                    stack={!!card.stackedOn}
                    displayVotes={board.stage !== 0}
                    color="primary"
                    createdAt={card.createdAt}
                  />
                );
              })}
          </List>
        )}
      </div>
    </ShiftedContent>
  );
}

export default Retro;
