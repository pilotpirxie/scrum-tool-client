import { io, Socket } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { IncomingEvents, OutgoingEvents } from './events';
import actions from '../actions';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import registerBoardsHandlers from './boardsHandlers';
import registerCardsHandlers from './cardsHandlers';
import registerUsersHandlers from './usersHandlers';

export type SocketHook = {
  connect: (nickname: string, boardId: string) => void;
  socket: Socket<IncomingEvents, OutgoingEvents> | null;
};

export function useSocket(): SocketHook {
  const socket = useAppSelector((state) => state.config.socket);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function connect(nickname: string, boardId: string) {
    if (socket?.connected) {
      socket.disconnect();
    }

    const newSocket: Socket<IncomingEvents, OutgoingEvents> = io(
      'http://localhost:3001/',
      {
        transports: ['websocket', 'polling'],
      },
    );

    newSocket.on('connect', () => {
      newSocket.emit('Join', {
        nickname,
        boardId,
      });

      dispatch({
        type: actions.config.SetNickname,
        payload: {
          nickname,
        },
      });

      dispatch({
        type: actions.config.SetBoardId,
        payload: {
          boardId,
        },
      });
    });

    registerUsersHandlers(newSocket, dispatch, navigate);
    registerBoardsHandlers(newSocket, dispatch);
    registerCardsHandlers(newSocket, dispatch);

    dispatch({
      type: actions.config.SetSocket,
      payload: {
        socket: newSocket,
      },
    });
  }

  return { connect, socket };
}
