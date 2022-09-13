import { useState } from 'react';
import List from '../../components/List';
import Card from '../../components/Card';
import ShiftedContent from '../../components/ShiftedContent';
import useWindowSize from '../../utils/useWindowSize';
import { useAppSelector } from '../../utils/hooks';
import { useSocket } from '../../socket/useSocket';
import EditModal from '../../components/EditModal';
import { RawCard } from '../../socket/events/models';

const getCardsStack = (firstCardId: string, allCards: Array<RawCard>) => {
  const cardsStack: Array<RawCard> = [];

  let cardOnTopOfStack = allCards.find((card) => card.id === firstCardId);
  while (cardOnTopOfStack && cardOnTopOfStack.stackedOn !== '') {
    cardOnTopOfStack = allCards.find(
      // eslint-disable-next-line no-loop-func
      (card) => card.id === cardOnTopOfStack?.stackedOn,
    );
    if (cardOnTopOfStack) cardsStack.push(cardOnTopOfStack);
  }
  return cardsStack;
};

const getVotes = (
  card: RawCard,
  allCards: Array<RawCard>,
  boardStage: number,
  localUserId: string,
) => {
  let votesCount = card.votes.length;

  if (boardStage === 1) {
    votesCount = card.votes.filter(
      (vote) => vote.userId === localUserId,
    ).length;
  }

  if (card.stackedOn) {
    const stack = getCardsStack(card.id, allCards);

    if (boardStage === 1) {
      for (let i = 0; i < stack.length; i++) {
        const item = stack[i];
        votesCount += item.votes.filter(
          (vote) => vote.userId === localUserId,
        ).length;
      }
    } else {
      for (let i = 0; i < stack.length; i++) {
        votesCount += stack[i].votes.length;
      }
    }
  }

  return votesCount;
};

function Retro() {
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

  const handleUpvote = (cardId: string) => {
    socketController.socket?.emit('UpvoteCard', { cardId });
  };

  const handleDownvote = (cardId: string) => {
    socketController.socket?.emit('DownvoteCard', { cardId });
  };

  const [modalCardId, setModalCardId] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editModalContent, setEditModalContent] = useState<string>('');

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

  let cardsStack: Array<RawCard> = [];

  if (modalCardId) {
    cardsStack = getCardsStack(modalCardId, cards);
  }

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
    <>
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
              {cards.filter(
                (card) =>
                  card.column === 0 &&
                  card.userId === localUser.id &&
                  !cards.some((nestedCard) => nestedCard.stackedOn === card.id),
              ).length === 0 && (
                <div>
                  <div className="mt-5 fs-5 fw-bold text-center text-dark opacity-10">
                    What nice have happened recently? <br /> (hint: give someone
                    kudos) 🎉
                  </div>
                </div>
              )}
              {cards
                .filter(
                  (card) =>
                    card.column === 0 &&
                    !cards.some(
                      (nestedCard) => nestedCard.stackedOn === card.id,
                    ),
                )
                .filter(
                  (card) => board.stage !== 0 || card.userId === localUser.id,
                )
                .map((card) => ({
                  ...card,
                  votes: getVotes(card, cards, board.stage, localUser.id),
                }))
                .sort((a, b) => {
                  if (board.stage !== 2) {
                    return b.createdAt - a.createdAt;
                  }
                  return b.votes - a.votes;
                })
                .map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    content={card.content}
                    onDecreaseVote={() => handleDownvote(card.id)}
                    votesCount={card.votes}
                    onEdit={() => handleCardEdit(card.id, card.content)}
                    onGroup={handleCardGroup}
                    onUngroup={handleCardUngroup}
                    onIncreaseVote={() => handleUpvote(card.id)}
                    stack={!!card.stackedOn}
                    displayVotes={board.stage !== 0}
                    color="success"
                    createdAt={card.createdAt}
                  />
                ))}
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
              {cards.filter(
                (card) =>
                  card.column === 1 &&
                  card.userId === localUser.id &&
                  !cards.some((nestedCard) => nestedCard.stackedOn === card.id),
              ).length === 0 && (
                <div>
                  <div className="mt-5 fs-5 fw-bold text-center text-dark opacity-10">
                    What needs to be improved? 🤔
                  </div>
                </div>
              )}
              {cards
                .filter(
                  (card) =>
                    card.column === 1 &&
                    !cards.some(
                      (nestedCard) => nestedCard.stackedOn === card.id,
                    ),
                )
                .map((card) => ({
                  ...card,
                  votes: getVotes(card, cards, board.stage, localUser.id),
                }))
                .sort((a, b) => {
                  if (board.stage !== 2) {
                    return b.createdAt - a.createdAt;
                  }
                  return b.votes - a.votes;
                })
                .map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    content={card.content}
                    onDecreaseVote={() => handleDownvote(card.id)}
                    votesCount={card.votes}
                    onEdit={() => handleCardEdit(card.id, card.content)}
                    onGroup={handleCardGroup}
                    onUngroup={handleCardUngroup}
                    onIncreaseVote={() => handleUpvote(card.id)}
                    stack={!!card.stackedOn}
                    displayVotes={board.stage !== 0}
                    color="danger"
                    createdAt={card.createdAt}
                  />
                ))}
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
              {cards.filter(
                (card) =>
                  card.column === 2 &&
                  card.userId === localUser.id &&
                  !cards.some((nestedCard) => nestedCard.stackedOn === card.id),
              ).length === 0 && (
                <div>
                  <div className="mt-5 fs-5 fw-bold text-center text-dark opacity-10">
                    What are the plans for the future? 🚀 <br />
                    #strivetodobetter
                  </div>
                </div>
              )}
              {cards
                .filter(
                  (card) =>
                    card.column === 2 &&
                    !cards.some(
                      (nestedCard) => nestedCard.stackedOn === card.id,
                    ),
                )
                .map((card) => ({
                  ...card,
                  votes: getVotes(card, cards, board.stage, localUser.id),
                }))
                .sort((a, b) => {
                  if (board.stage !== 2) {
                    return b.createdAt - a.createdAt;
                  }
                  return b.votes - a.votes;
                })
                .map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    content={card.content}
                    onDecreaseVote={() => handleDownvote(card.id)}
                    votesCount={card.votes}
                    onEdit={() => handleCardEdit(card.id, card.content)}
                    onGroup={handleCardGroup}
                    onUngroup={handleCardUngroup}
                    onIncreaseVote={() => handleUpvote(card.id)}
                    stack={!!card.stackedOn}
                    displayVotes={board.stage !== 0}
                    color="primary"
                    createdAt={card.createdAt}
                  />
                ))}
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
        stackItems={cardsStack}
      />
    </>
  );
}

export default Retro;
