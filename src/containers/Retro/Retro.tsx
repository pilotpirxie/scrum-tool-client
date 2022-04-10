import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import ShiftedContent from '../../components/ShiftedContent';

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
          <div className="col-4 bg-light p-3 d-flex flex-column justify-content-between">
            <div>
              <h1 className="text-black">Positives</h1>
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Add positive note..."
              />
              <button className="btn btn-success" type="button">
                <i className="ri-add-line" />
              </button>
            </div>
          </div>
          <div className="col-4 bg-main p-3 d-flex flex-column justify-content-between">
            <div>
              <h1 className="text-black">Negatives</h1>
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Add negative note..."
              />
              <button className="btn btn-danger" type="button">
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
                className="form-control"
                placeholder="Add action note..."
              />
              <button className="btn btn-primary" type="button">
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
