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

  const socketController = useSocket();

  const handleJoin = () => {
    if (socketController.socket?.connected) {
      socketController.socket.disconnect();
    }

    socketController.connect(nickname, avatar, '');
  };

  const bgIndex = Math.floor(Math.random() * 20);

  return (
    <div className="w-100 vh-100" style={{backgroundImage: `url(/bg/a${bgIndex}.png)`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 col-md-6 offset-md-3 h-100">
            <div className="d-flex justify-content-center align-items-center flex-column h-100">
              <div>
                <div className="d-flex card card-body shadow-lg p-5">
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
                    <button
                      onClick={handleJoin}
                      type="button"
                      className="btn btn-success form-control shadow"
                      disabled={!nickname}
                    >
                      Create room
                    </button>
                  </div>
                  <div className="mt-3 small text-center text-dark">
                    Made with <span className="text-danger">&hearts;</span> by{' '}
                    <a
                    className='text-dark'
                      href="https://github.com/pilotpirxie/scrum-tool-client"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PilotPirxie
                    </a>{' '}
                    and{' '}
                    <a
                                        className='text-dark'
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
      </div>
    </div>
  );
}

export default Home;
