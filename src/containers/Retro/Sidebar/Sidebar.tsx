import './Sidebar.css';

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import logo from './logo.png';
import smallLogo from './small-logo.png';
import Avatar from '../../../components/Avatar';
import DimContainer from '../../../components/DimContainer';
import { useAppSelector } from '../../../utils/hooks';
import { useSocket } from '../../../socket/useSocket';

function Sidebar({
  isOpen,
  onSidebarToggleClick,
  onChangeUserData,
}: {
  isOpen: boolean;
  onSidebarToggleClick: () => void;
  onChangeUserData: () => void;
}) {
  const users = useAppSelector((state) => state.config.users);
  const board = useAppSelector((state) => state.config.board);
  const localUser = useAppSelector((state) => state.config.localUser);

  // const dispatch = useAppDispatch();
  const socketController = useSocket();

  const handleNextStage = () => {
    if (board.stage < 2) {
      socketController.socket?.emit('SetStage', {
        stage: board.stage + 1,
      });
    }
  };

  const handlePreviousStage = () => {
    if (board.stage > 0) {
      socketController.socket?.emit('SetStage', {
        stage: board.stage - 1,
      });
    }
  };

  const handleToggleReady = () => {
    socketController.socket?.emit('ToggleReady');
  };

  const handleSetTimer = (duration: number) => {
    socketController.socket?.emit('SetTimer', {
      duration,
    });
  };

  const timerTo = useAppSelector((state) => state.config.board.timerTo);
  const [timer, setTimer] = useState('');

  const getDiffFormat = (diff: number) =>
    dayjs(dayjs(diff).diff(dayjs())).format('m:ss');

  useEffect(() => {
    setTimer(getDiffFormat(board.timerTo));

    const intervalHandler = setInterval(() => {
      setTimer(getDiffFormat(board.timerTo));
    }, 500);

    return () => {
      clearInterval(intervalHandler);
    };
  }, [timerTo]);

  return isOpen ? (
    <DimContainer>
      <div className="d-flex flex-column justify-content-between p-3 bg-white shadow sidebar">
        <div>
          <div className="d-flex justify-content-between my-2 align-items-center">
            <img src={logo} className="img-fluid p-3" alt="logo" />
            <i
              className="ri-close-line fs-3 cursor-pointer"
              onClick={onSidebarToggleClick}
            />
          </div>
          <div>
            <div className="text-center">
              <div className="fw-bolder text-primary text-uppercase fs-5">
                Stage {board.stage + 1}
              </div>
              <div className="text-uppercase text-success fs-6">
                {board.stage === 0 && <div>Positives & Negatives</div>}
                {board.stage === 1 && <div>Vote for cards</div>}
                {board.stage === 2 && <div>Write action items</div>}
              </div>
            </div>
            <div className="pt-4 d-flex flex-row flex-wrap justify-content-center">
              {users.map((user) => (
                <Avatar
                  key={user.id}
                  image={user.avatar}
                  success={user.isReady}
                  alt={user.nickname}
                />
              ))}
            </div>
            <div className="mt-4">
              <div className="fw-bolder text-primary text-uppercase d-flex align-items-center">
                Username & Avatar <i className="ri-user-smile-line ms-2" />
              </div>
              <button
                type="button"
                className="btn btn-primary form-control shadow mt-1"
                onClick={onChangeUserData}
              >
                Change
              </button>
            </div>
            <div className="mt-4">
              <div className="fw-bolder text-primary text-uppercase d-flex align-items-center">
                Share link to the board <i className="ri-share-line ms-2" />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control form-control-sm mt-1"
                  placeholder="Link to the board"
                  value={`${window.location.origin}/board/${board.boardId}`}
                  readOnly
                />
              </div>
            </div>
            {/* <div className="pt-4"> */}
            {/*  <div className="fw-bolder text-primary text-uppercase d-flex align-items-center"> */}
            {/*    Export <i className="ri-download-line ms-2" /> */}
            {/*  </div> */}
            {/*  <div className="mt-1"> */}
            {/*    <button */}
            {/*      className="btn btn-outline-secondary btn-block btn-sm mx-1 px-3 shadow" */}
            {/*      type="button" */}
            {/*    > */}
            {/*      PDF */}
            {/*    </button> */}
            {/*    <button */}
            {/*      className="btn btn-outline-secondary btn-block btn-sm mx-1 px-3 shadow" */}
            {/*      type="button" */}
            {/*    > */}
            {/*      CSV */}
            {/*    </button> */}
            {/*  </div> */}
            {/* </div> */}
            <div className="pt-4">
              <div className="fw-bolder text-primary text-uppercase d-flex align-items-center">
                Timer <i className="ri-timer-line ms-2" />
              </div>
              <div className="mt-1">
                <button
                  className="btn btn-outline-secondary btn-block btn-sm m-1 px-3 shadow"
                  type="button"
                  onClick={() => handleSetTimer(0)}
                >
                  Clear
                </button>
                <button
                  className="btn btn-outline-secondary btn-block btn-sm m-1 px-3 shadow"
                  type="button"
                  onClick={() => handleSetTimer(60)}
                >
                  1 min
                </button>
                <button
                  className="btn btn-outline-secondary btn-block btn-sm m-1 px-3 shadow"
                  type="button"
                  onClick={() => handleSetTimer(180)}
                >
                  3 min
                </button>
                <button
                  className="btn btn-outline-secondary btn-block btn-sm m-1 px-3 shadow"
                  type="button"
                  onClick={() => handleSetTimer(300)}
                >
                  5 min
                </button>
                <button
                  className="btn btn-outline-secondary btn-block btn-sm m-1 px-3 shadow"
                  type="button"
                  onClick={() => handleSetTimer(600)}
                >
                  10 min
                </button>
                <button
                  className="btn btn-outline-secondary btn-block btn-sm m-1 px-3 shadow"
                  type="button"
                  onClick={() => handleSetTimer(900)}
                >
                  15 min
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="btn-timer p-3 my-3 rounded-4 text-center">
            <div className="text-black fw-bold fs-3 d-flex align-items-center justify-content-center">
              <i className="ri-timer-line" />{' '}
              {timerTo > Date.now() ? timer : '0:00'}
            </div>
          </div>
          <button
            type="button"
            className={`btn ${
              localUser.isReady ? 'btn-success' : 'btn-outline-primary'
            } form-control shadow d-flex align-items-center justify-content-center`}
            onClick={handleToggleReady}
          >
            <i className="ri-checkbox-circle-line fs-5 me-1" />
            {localUser.isReady ? 'Mark as not ready' : 'Mark as ready'}
          </button>
          <button
            type="button"
            disabled={board.stage === 0}
            className="mt-3 btn btn-outline-primary form-control shadow d-flex align-items-center justify-content-center"
            onClick={handlePreviousStage}
          >
            <i className="ri-arrow-left-circle-line fs-5 me-1" />
            Previous stage
          </button>
          <button
            type="button"
            disabled={board.stage === 2}
            className="mt-3 btn btn-outline-primary form-control shadow d-flex align-items-center justify-content-center"
            onClick={handleNextStage}
          >
            <i className="ri-arrow-right-circle-line fs-5 me-1" />
            Next stage
          </button>
        </div>
      </div>
    </DimContainer>
  ) : (
    <div className="position-absolute d-flex vh-100">
      <div className="d-flex flex-column justify-content-between p-3 shadow narrow-sidebar">
        <div>
          <div className="d-flex justify-content-center my-2 align-items-center flex-column">
            <img src={smallLogo} className="img-fluid p-3" alt="logo" />
            <i
              className="ri-menu-5-line fs-3 cursor-pointer"
              onClick={onSidebarToggleClick}
            />
          </div>
          <div className="text-center">
            <div className="fw-bolder text-primary text-uppercase small mb-1">
              Stage {board.stage + 1}
            </div>
          </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden hide-scrollbar">
          <div className="d-flex flex-row flex-wrap justify-content-center">
            {users.map((user) => (
              <Avatar
                key={user.id}
                image={user.avatar}
                success={user.isReady}
                alt={user.nickname}
              />
            ))}
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div
            onClick={
              timerTo < Date.now() ? () => handleSetTimer(180) : undefined
            }
            className={`${
              timerTo < Date.now() ? 'cursor-pointer' : ''
            } btn-timer btn-circle-lg my-3 rounded-circle text-center text-black fw-bold d-flex align-items-center justify-content-center`}
          >
            {timerTo < Date.now() && <i className="ri-timer-line fs-3" />}
            {timerTo > Date.now() ? timer : ''}
          </div>
          <button
            type="button"
            className={`btn ${
              localUser.isReady ? 'btn-success' : 'btn-outline-primary'
            } btn-circle-md form-control shadow rounded-circle fs-3 p-0`}
            onClick={handleToggleReady}
          >
            <i className="ri-checkbox-circle-line" />
          </button>
          <button
            type="button"
            className="mt-3 btn btn-outline-primary btn-circle-md form-control shadow rounded-circle fs-3 p-0"
            onClick={handlePreviousStage}
            disabled={board.stage === 0}
          >
            <i className="ri-arrow-left-circle-line" />
          </button>
          <button
            type="button"
            className="mt-3 btn btn-outline-primary btn-circle-md form-control shadow rounded-circle fs-3 p-0"
            onClick={handleNextStage}
            disabled={board.stage === 2}
          >
            <i className="ri-arrow-right-circle-line" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
