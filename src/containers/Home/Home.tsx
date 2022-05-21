import { useState } from 'react';
import { useSocket } from '../../socket/useSocket';
import useLocalStorage from '../../utils/useLocalStorage';

function Home() {
  const [nickname, setNickname] = useLocalStorage<string>(
    'nickname',
    `Guest${Math.floor(Math.random() * 10000)}`,
  );

  const [avatar] = useLocalStorage<number>(
    'avatar',
    Math.floor(Math.random() * 89),
  );

  const [boardId, setBoardId] = useState('');
  const socketController = useSocket();

  const handleJoin = () => {
    if (socketController.socket?.connected) {
      socketController.socket.disconnect();
    }

    socketController.connect(nickname, avatar, boardId);
  };

  return (
    <div className="w-100 vh-100 bg-success">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 col-md-6 offset-md-3 h-100">
            <div className="d-flex justify-content-center align-items-center flex-column h-100">
              <h1 className="fw-bold text-black">ScrumPurr</h1>
              <div className="form-group w-100 mt-3">
                <input
                  className="form-control shadow-lg"
                  placeholder="Nickname"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              </div>
              <div className="form-group w-100 mt-3">
                <input
                  className="form-control shadow-lg"
                  placeholder="Room code, leave empty to create new"
                  value={boardId}
                  onChange={(e) => setBoardId(e.target.value)}
                />
              </div>
              <div className="form-group w-100 mt-3">
                <button
                  onClick={handleJoin}
                  type="button"
                  className="btn btn-primary form-control shadow"
                  disabled={!nickname}
                >
                  Join room
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
