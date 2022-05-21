import ShiftedContent from '../../components/ShiftedContent';
import './Planning.css';
import PlanningCard from '../../components/PlanningCard';
import { useSocket } from '../../socket/useSocket';
import { useAppSelector } from '../../utils/hooks';

function Planning() {
  const socketController = useSocket();

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

  return (
    <ShiftedContent>
      <div className="vh-100 w-100 bg-planning overflow-y-auto">
        <div className="container d-flex align-items-center">
          <div className="row m-0">
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
                        selected={localUser.selectedPlanningCard === index + 1}
                        onClick={() => handleSetSelectPlanningCard(index + 1)}
                      />
                    ))}
                </div>
              )}
              {board.mode === 'planning_revealed' && (
                <div className="d-flex flex-row flex-wrap justify-content-center">
                  {users
                    .filter((user) => user.selectedPlanningCard !== 0)
                    .map((user) => (
                      <PlanningCard
                        number={cardsMap[user.selectedPlanningCard].number}
                        icon={cardsMap[user.selectedPlanningCard].icon}
                        voter={user.nickname}
                      />
                    ))}
                </div>
              )}
            </div>
            <div className="my-3 col-12 d-flex align-items-center justify-content-center">
              <button
                onClick={handleResetPlanning}
                type="button"
                className="btn btn-primary"
              >
                Reset
              </button>
              <button
                onClick={handleRevealPlanning}
                type="button"
                className="ms-3 btn btn-success"
              >
                Reveal
              </button>
            </div>
          </div>
        </div>
      </div>
    </ShiftedContent>
  );
}

export default Planning;
