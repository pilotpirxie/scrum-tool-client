import { useState } from 'react';
import { useSocket } from '../../socket/useSocket';
import useLocalStorage from '../../utils/useLocalStorage';
import './Home.css';

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
    <div className="w-100 vh-100 bg-primary">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 col-md-6 offset-md-3 h-100">
            <div className="d-flex justify-content-center align-items-center flex-column h-100">
              <img
                src="/img/logo-big.png"
                alt="logo"
                className="img-fluid animated-logo"
              />
              <div className="form-group w-100 mt-4">
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
                  className="btn btn-success form-control shadow"
                  disabled={!nickname}
                >
                  Join room
                </button>
              </div>
              <div className="mt-3 text-white small">
                Made with <span className="text-danger">&hearts;</span> by{' '}
                <a
                  className="text-white"
                  href="https://github.com/pilotpirxie/scrum-tool-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PilotPirxie
                </a>{' '}
                and{' '}
                <a
                  className="text-white"
                  href="https://behance.net/krzysztofsojka1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Krzysztof Sojka
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
