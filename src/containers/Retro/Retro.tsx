import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import ShiftedContent from '../../components/ShiftedContent';
import './Retro.css';
import Card from '../../components/Card';
import EditModal from '../../components/EditModal';
import UserModal from '../../components/UserModal';

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
          <div className="col-4 bg-blue-10 p-0 d-flex flex-column justify-content-between vh-100">
            <div className="overflow-y-auto overflow-x-hidden h-100 p-3">
              <h1 className="text-black">Positives</h1>
              <div className="row">
                <Card
                  content="Lorem ipsum dolor sit amet."
                  onDecreaseVote={() => {}}
                  votesCount={5}
                  onDelete={() => {}}
                  onEdit={() => {}}
                  onIncreaseVote={() => {}}
                />
                <Card
                  content="Lorem ipsum dolor sit amet."
                  onDecreaseVote={() => {}}
                  votesCount={5}
                  onDelete={() => {}}
                  onEdit={() => {}}
                  onIncreaseVote={() => {}}
                />
                <Card
                  content="Lorem ipsum dolor sit amet."
                  onDecreaseVote={() => {}}
                  votesCount={5}
                  onDelete={() => {}}
                  onEdit={() => {}}
                  onIncreaseVote={() => {}}
                />
              </div>
            </div>
            <div className="input-group p-3">
              <input
                type="text"
                className="form-control shadow border-success border-2"
                placeholder="Add positive note..."
              />
              <button className="btn btn-success shadow" type="button">
                <i className="ri-add-line" />
              </button>
            </div>
          </div>
          <div className="col-4 bg-grey p-0 d-flex flex-column justify-content-between vh-100">
            <div className="overflow-y-auto overflow-x-hidden h-100 p-3">
              <h1 className="text-black">Negatives</h1>
              <div className="row">
                <Card
                  content="Lorem ipsum dolor sit amet."
                  onDecreaseVote={() => {}}
                  votesCount={5}
                  onDelete={() => {}}
                  onEdit={() => {}}
                  onIncreaseVote={() => {}}
                />
              </div>
            </div>
            <div className="input-group p-3">
              <input
                type="text"
                className="form-control shadow border-danger border-2"
                placeholder="Add negative note..."
              />
              <button className="btn btn-danger shadow" type="button">
                <i className="ri-add-line" />
              </button>
            </div>
          </div>
          <div className="col-4 bg-light p-0 d-flex flex-column justify-content-between vh-100">
            <div className="overflow-y-auto overflow-x-hidden h-100 p-3">
              <h1 className="text-black">Actions</h1>
              <div className="row">
                <Card
                  content="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
                  onDecreaseVote={() => {}}
                  votesCount={5}
                  onDelete={() => {}}
                  onEdit={() => {}}
                  onIncreaseVote={() => {}}
                  stack
                />
                <Card
                  content="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
                  onDecreaseVote={() => {}}
                  votesCount={5}
                  onDelete={() => {}}
                  onEdit={() => {}}
                  onIncreaseVote={() => {}}
                />
                <Card
                  content="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
                  onDecreaseVote={() => {}}
                  votesCount={5}
                  onDelete={() => {}}
                  onEdit={() => {}}
                  onIncreaseVote={() => {}}
                />
                <Card
                  content="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
                  onDecreaseVote={() => {}}
                  votesCount={5}
                  onDelete={() => {}}
                  onEdit={() => {}}
                  onIncreaseVote={() => {}}
                  stack
                />
              </div>
            </div>
            <div className="input-group p-3">
              <input
                type="text"
                className="form-control shadow border-primary border-2"
                placeholder="Add action note..."
              />
              <button className="btn btn-primary shadow" type="button">
                <i className="ri-add-line" />
              </button>
            </div>
          </div>
        </div>
      </ShiftedContent>
      <EditModal />
      <UserModal />
    </div>
  );
}

export default Retro;
