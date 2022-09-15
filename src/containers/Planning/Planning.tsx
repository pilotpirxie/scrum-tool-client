import { useState } from 'react';
import ShiftedContent from '../../components/ShiftedContent';
import './Planning.css';
import PlanningCard from '../../components/PlanningCard';
import { useSocket } from '../../socket/useSocket';
import { useAppSelector } from '../../utils/hooks';
import ConfirmModal from '../../components/ConfirmModal';

function Planning() {
  const socketController = useSocket();
  const [isConfirmRevealModalOpen, setIsConfirmRevealModalOpen] =
    useState(false);

  const localUser = useAppSelector((state) => state.config.localUser);
  const board = useAppSelector((state) => state.config.board);
  const users = useAppSelector((state) => state.config.users);

  const handleSetSelectPlanningCard = (selectedPlanningCard: number) => {
    socketController.socket?.emit('SetSelectedPlanningCard', {
      selectedPlanningCard,
    });
  };

  const handleResetPlanning = () => {
    socketController.socket?.emit('SetBoardMode', { mode: 'planning_hidden' });
  };

  const handleRevealPlanning = () => {
    socketController.socket?.emit('SetBoardMode', {
      mode: 'planning_revealed',
    });
    setIsConfirmRevealModalOpen(false);
  };

  const cardsMap: Array<{
    number: number | undefined;
    icon: 'not sure' | 'break pls' | undefined;
  }> = [
    { number: 0, icon: undefined },
    { number: 1, icon: undefined },
    { number: 2, icon: undefined },
    { number: 3, icon: undefined },
    { number: 5, icon: undefined },
    { number: 8, icon: undefined },
    { number: 13, icon: undefined },
    { number: 21, icon: undefined },
    { number: 34, icon: undefined },
    { number: 55, icon: undefined },
    { number: 89, icon: undefined },
    { number: undefined, icon: 'not sure' },
    { number: undefined, icon: 'break pls' },
  ];

  const userVotes = users.filter((user) => user.selectedPlanningCard !== 0);

  const userVotesWithNumbers = userVotes.filter(
    (user) =>
      user.selectedPlanningCard !== 11 && user.selectedPlanningCard !== 12,
  );

  const sum = userVotesWithNumbers.reduce(
    (acc, user) => acc + (cardsMap[user.selectedPlanningCard].number || 0),
    0,
  );

  const average = Number((sum / (userVotesWithNumbers.length || 1)).toFixed(1));

  const comments = [
    'The voting is over.',
    'How did our players vote?',
    'What did the players choose?',
    "Let's see what the planning contestants have chosen!",
    'The ancient sages have made their decision.',
    'What a choice!',
    'The dust has settled after the vote.',
    'The choice has been made, let the discussion begin!',
    'The choice was not easy, it was not easy!',
    'Time to check the valuation!',
  ];

  return (
    <>
      <ShiftedContent>
        <div className="vh-100 w-100 bg-planning overflow-y-auto">
          <div className="container d-flex align-items-center">
            <div className="row m-0 w-100">
              <div className="mt-5 col-12 col-lg-8 offset-lg-2 ">
                {board.mode === 'planning_hidden' && (
                  <div className="d-flex flex-row flex-wrap justify-content-center">
                    {cardsMap
                      .filter((card) => card.number !== 0)
                      .map((card, index) => (
                        <PlanningCard
                          key={card.number}
                          number={card.number}
                          icon={card.icon}
                          selected={
                            localUser.selectedPlanningCard === index + 1
                          }
                          onClick={() => handleSetSelectPlanningCard(index + 1)}
                        />
                      ))}
                  </div>
                )}
                {board.mode === 'planning_revealed' && (
                  <div>
                    <div className="small text-white text-center">
                      {
                        comments[
                          (userVotesWithNumbers.length + sum + users.length) %
                            comments.length
                        ]
                      }
                    </div>
                    <h1 className="text-white text-center">{average}</h1>
                    <div className="d-flex flex-row flex-wrap justify-content-center">
                      {userVotes.map((user) => (
                        <PlanningCard
                          key={user.nickname}
                          number={cardsMap[user.selectedPlanningCard].number}
                          icon={cardsMap[user.selectedPlanningCard].icon}
                          voter={user.nickname}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="my-3 col-12 d-flex align-items-center justify-content-center">
                <button
                  onClick={handleResetPlanning}
                  type="button"
                  className="btn btn-primary"
                  disabled={board.mode === 'planning_hidden'}
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsConfirmRevealModalOpen(true)}
                  type="button"
                  className="ms-3 btn btn-success"
                  disabled={board.mode === 'planning_revealed'}
                >
                  Reveal
                </button>
              </div>
            </div>
          </div>
        </div>
      </ShiftedContent>
      <ConfirmModal
        title="Confirm cards reveal"
        cancelText="Cancel"
        confirmText="Reveal"
        onCancel={() => setIsConfirmRevealModalOpen(false)}
        onConfirm={handleRevealPlanning}
        isOpen={isConfirmRevealModalOpen}
      >
        <div className="text-black">
          <b>Everyone ready?</b> Are you sure you want to reveal cards?
        </div>
      </ConfirmModal>
    </>
  );
}

export default Planning;
