import { Socket } from 'socket.io-client';
import { NavigateFunction } from 'react-router-dom';
import { IncomingEvents, OutgoingEvents } from './events';
import { RootDispatch } from '../utils/store';
import actions from '../actions';

function registerUsersHandlers(
  socket: Socket<IncomingEvents, OutgoingEvents>,
  dispatch: RootDispatch,
  navigate: NavigateFunction,
) {
  socket.on('Joined', (data) => {
    dispatch({
      type: actions.cards.SetAllCards,
      payload: {
        cards: data.cards,
      },
    });

    dispatch({
      type: actions.config.SetUserId,
      payload: {
        id: data.localUser.id,
      },
    });

    dispatch({
      type: actions.config.SetAvatar,
      payload: {
        avatar: data.localUser.avatar,
      },
    });

    dispatch({
      type: actions.config.SetNickname,
      payload: {
        nickname: data.localUser.nickname,
      },
    });

    dispatch({
      type: actions.config.SetUsers,
      payload: {
        users: data.users,
      },
    });

    dispatch({
      type: actions.config.SetTimer,
      payload: {
        timerTo: data.board.timerTo,
      },
    });

    dispatch({
      type: actions.config.SetStage,
      payload: {
        stage: data.board.stage,
      },
    });

    dispatch({
      type: actions.config.SetMaxVotes,
      payload: {
        maxVotes: data.board.maxVotes,
      },
    });

    navigate(`/retro/${data.board.id}`);
  });

  socket.on('UsersState', (data) => {
    dispatch({
      type: actions.config.SetUsers,
      payload: {
        users: data.users,
      },
    });
  });

  socket.on('UserState', (data) => {
    dispatch({
      type: actions.config.SetUser,
      payload: {
        user: data.user,
      },
    });
  });
}

export default registerUsersHandlers;
