import './Sidebar.css';

import logo from './logo.png';
import smallLogo from './small-logo.png';
import Avatar from '../../../components/Avatar';
import DimContainer from '../../../components/DimContainer';

function Sidebar({
  isOpen,
  onSidebarToggleClick,
}: {
  isOpen: boolean;
  onSidebarToggleClick: () => void;
}) {
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
                Stage 1
              </div>
              <div className="text-uppercase text-success fs-6">
                Positives & Negatives
              </div>
            </div>
            <div className="pt-4 d-flex flex-row flex-wrap justify-content-center">
              <Avatar image={1} success={false} />
              <Avatar image={2} success={false} />
              <Avatar image={3} success />
              <Avatar image={4} success={false} />
              <Avatar image={5} success />
              <Avatar image={6} success />
              <Avatar image={7} success={false} />
              <Avatar image={8} success={false} />
              <Avatar image={9} success={false} />
              <Avatar image={10} success={false} />
            </div>
            <div className="mt-4">
              <div className="fw-bolder text-primary text-uppercase d-flex align-items-center">
                Username & Avatar <i className="ri-user-smile-line ms-2" />
              </div>
              <button
                type="button"
                className="btn btn-primary form-control shadow mt-1"
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
                  value="https://scrm.ly/43kjb17d81"
                  readOnly
                />
              </div>
            </div>
            <div className="pt-4">
              <div className="fw-bolder text-primary text-uppercase d-flex align-items-center">
                Export <i className="ri-download-line ms-2" />
              </div>
              <div className="mt-1">
                <button
                  className="btn btn-outline-secondary btn-block btn-sm mx-1 px-3 shadow"
                  type="button"
                >
                  PDF
                </button>
                <button
                  className="btn btn-outline-secondary btn-block btn-sm mx-1 px-3 shadow"
                  type="button"
                >
                  CSV
                </button>
              </div>
            </div>
            <div className="pt-4">
              <div className="fw-bolder text-primary text-uppercase d-flex align-items-center">
                Timer <i className="ri-timer-line ms-2" />
              </div>
              <div className="mt-1">
                <button
                  className="btn btn-outline-secondary btn-block btn-sm mx-1 px-3 shadow"
                  type="button"
                >
                  1 min
                </button>
                <button
                  className="btn btn-outline-secondary btn-block btn-sm mx-1 px-3 shadow"
                  type="button"
                >
                  3 min
                </button>
                <button
                  className="btn btn-outline-secondary btn-block btn-sm mx-1 px-3 shadow"
                  type="button"
                >
                  5 min
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="btn-timer p-3 my-3 rounded-4 text-center">
            <div className="text-black fw-bold fs-3 d-flex align-items-center justify-content-center">
              <i className="ri-timer-line" /> 4:49
            </div>
          </div>
          <button
            type="button"
            className="btn btn-outline-primary form-control shadow d-flex align-items-center justify-content-center"
          >
            <i className="ri-checkbox-circle-line fs-5 me-1" />
            Mark as done
          </button>
          <button
            type="button"
            className="mt-3 btn btn-outline-primary form-control shadow d-flex align-items-center justify-content-center"
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
              Stage 1
            </div>
          </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden hide-scrollbar">
          <div className="d-flex flex-row flex-wrap justify-content-center">
            <Avatar image={1} success={false} />
            <Avatar image={2} success={false} />
            <Avatar image={3} success />
            <Avatar image={4} success={false} />
            <Avatar image={5} success />
            <Avatar image={6} success />
            <Avatar image={7} success={false} />
            <Avatar image={8} success={false} />
            <Avatar image={9} success={false} />
            <Avatar image={10} success={false} />
            <Avatar image={11} success={false} />
            <Avatar image={12} success={false} />
            <Avatar image={13} success={false} />
            <Avatar image={14} success={false} />
            <Avatar image={15} success={false} />
            <Avatar image={16} success={false} />
            <Avatar image={17} success={false} />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="btn-timer btn-circle-lg my-3 rounded-circle text-center text-black fw-bold d-flex align-items-center justify-content-center">
            4:49
          </div>
          <button
            type="button"
            className="btn btn-outline-primary btn-circle-md form-control shadow rounded-circle fs-3 p-0"
          >
            <i className="ri-checkbox-circle-line" />
          </button>
          <button
            type="button"
            className="mt-3 btn btn-outline-primary btn-circle-md form-control shadow rounded-circle fs-3 p-0"
          >
            <i className="ri-arrow-right-circle-line" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
