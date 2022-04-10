import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import ShiftedContent from '../../components/ShiftedContent';
import './Retro.css';

function Retro() {
  // const { id } = useParams<{ id: string }>();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div>
      <Sidebar
        isOpen={isNavbarOpen}
        onSidebarToggleClick={() => setIsNavbarOpen(!isNavbarOpen)}
      />
      <ShiftedContent>
        <div className="row m-0 vh-100">
          <div className="col-4 bg-blue-10 p-3 d-flex flex-column justify-content-between">
            <div>
              <h1 className="text-black">Positives</h1>
              <div className="row">
                <div className="col-12 col-xl-6">
                  <div className="card card-body mt-3 retro-card">
                    <div className="retro-card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus deserunt, labore? Atque doloribus esse ex fugiat
                      illo impedit nostrum quo!
                    </div>
                    <div className="retro-card-buttons d-flex align-items-center justify-content-end">
                      <div className="btn btn-outline-primary btn-sm">
                        <i className="ri-edit-2-line" />
                      </div>
                      <div className="btn btn-outline-primary btn-sm">16</div>
                      <div className="btn btn-outline-primary btn-sm">
                        <i className="ri-add-line" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-6">
                  <div className="card card-body mt-3 retro-card">
                    <div className="retro-card-text">
                      Lorem ipsum dolor sit.
                    </div>
                    <div className="retro-card-buttons d-flex align-items-center justify-content-end">
                      <div className="btn btn-outline-primary btn-sm">
                        <i className="ri-edit-2-line" />
                      </div>
                      <div className="btn btn-outline-primary btn-sm">16</div>
                      <div className="btn btn-outline-primary btn-sm">
                        <i className="ri-add-line" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-6">
                  <div className="card card-body mt-3 retro-card">
                    <div className="retro-card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aut iusto magnam minus mollitia numquam officia, pariatur.
                      Blanditiis, debitis dignissimos id magnam optio
                      praesentium voluptatibus! Accusantium cupiditate harum
                      illo officia sapiente.
                    </div>
                    <div className="retro-card-buttons d-flex align-items-center justify-content-end">
                      <div className="btn btn-outline-primary btn-sm">
                        <i className="ri-edit-2-line" />
                      </div>
                      <div className="btn btn-outline-primary btn-sm">16</div>
                      <div className="btn btn-outline-primary btn-sm">
                        <i className="ri-add-line" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-6">
                  <div className="card card-body mt-3 retro-card">
                    <div className="retro-card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus deserunt, labore? Atque doloribus esse ex fugiat
                      illo impedit nostrum quo!
                    </div>
                    <div className="retro-card-buttons d-flex align-items-center justify-content-end">
                      <div className="btn btn-outline-primary btn-sm">
                        <i className="ri-edit-2-line" />
                      </div>
                      <div className="btn btn-outline-primary btn-sm">16</div>
                      <div className="btn btn-outline-primary btn-sm">
                        <i className="ri-add-line" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control shadow"
                placeholder="Add positive note..."
              />
              <button className="btn btn-success shadow" type="button">
                <i className="ri-add-line" />
              </button>
            </div>
          </div>
          <div className="col-4 bg-grey p-3 d-flex flex-column justify-content-between">
            <div>
              <h1 className="text-black">Negatives</h1>
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control shadow"
                placeholder="Add negative note..."
              />
              <button className="btn btn-danger shadow" type="button">
                <i className="ri-add-line" />
              </button>
            </div>
          </div>
          <div className="col-4 bg-light p-3 d-flex flex-column justify-content-between">
            <div>
              <h1 className="text-black">Actions</h1>
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control shadow"
                placeholder="Add action note..."
              />
              <button className="btn btn-primary shadow" type="button">
                <i className="ri-add-line" />
              </button>
            </div>
          </div>
        </div>
      </ShiftedContent>
    </div>
  );
}

export default Retro;
