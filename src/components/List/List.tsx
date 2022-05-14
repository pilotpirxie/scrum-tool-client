import React from 'react';
import './List.css';
import { useSocket } from '../../socket/useSocket';

function List({
  id,
  type,
  children,
  columnWidth,
}: {
  id: number;
  type: 'positive' | 'negative' | 'actions';
  children: React.ReactNode;
  columnWidth: number;
}) {
  const column = {
    positive: 0,
    negative: 1,
    actions: 2,
  }[type];

  const color = {
    positive: 'success',
    negative: 'danger',
    actions: 'primary',
  }[type];

  const heading = {
    positive: 'Positive',
    negative: 'Negative',
    actions: 'Actions',
  }[type];

  const inputPlaceholder = {
    positive: 'Add positive item...',
    negative: 'Add negative item...',
    actions: 'Add action item...',
  }[type];

  const [input, setInput] = React.useState('');
  const socketController = useSocket();
  const handleSubmit = () => {
    socketController.socket?.emit('CreateCard', {
      column,
      content: input,
    });
  };

  return (
    <div
      key={id}
      className={`col-${
        columnWidth || 4
      } p-0 d-flex flex-column justify-content-between vh-100 retro-list`}
    >
      <div className="overflow-y-auto overflow-x-hidden h-100 p-3">
        <h1 className="text-black">{heading}</h1>
        <div className="row">{children}</div>
      </div>
      <div className="input-group p-3">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className={`form-control shadow border-${color} border-2`}
          placeholder={inputPlaceholder}
        />
        <button
          onClick={handleSubmit}
          className={`btn btn-${color} shadow`}
          type="button"
        >
          <i className="ri-add-line" />
        </button>
      </div>
    </div>
  );
}

export default List;
