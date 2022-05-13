import { io, Socket } from 'socket.io-client';
import { IncomingEvents, OutgoingEvents } from './events';
import actions from '../actions';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import registerCardsHandlers from './cardsHandlers';

export type SocketHook = {
  connect: (nickname: string, boardId: string) => void;
  socket: Socket<IncomingEvents, OutgoingEvents> | null;
};

export function useSocket(): SocketHook {
  const socket = useAppSelector((state) => state.config.socket);
  const dispatch = useAppDispatch();

  function connect(nickname: string, boardId: string) {
    if (socket) {
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
    });

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
