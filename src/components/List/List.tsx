import React from 'react';
import './List.css';
import { useSocket } from '../../socket/useSocket';
import useWindowSize from '../../utils/useWindowSize';
import ColumnSelector from '../ColumnSelector';

function List({
  id,
  type,
  children,
  columnWidth,
  selectedColumn,
  onChangeColumn,
}: {
  id: number;
  type: 'positive' | 'negative' | 'actions';
  children: React.ReactNode;
  columnWidth: number;
  selectedColumn: number;
  onChangeColumn: (column: number) => void;
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
    positive: 'Positives',
    negative: 'Negatives',
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
    if (!input) return;
    
    socketController.socket?.emit('CreateCard', {
      column,
      content: input,
    });

    setInput('');
  };

  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;

  return (
    <div
      key={id}
      className={`col-${
        columnWidth || 4
      } p-0 d-flex flex-column justify-content-between vh-100 retro-list`}
    >
      <div className="overflow-y-auto overflow-x-hidden h-100 p-3">
        {!isMobile && <h1 className="text-black">{heading}</h1>}
        {isMobile && (
          <ColumnSelector
            selectedColumn={selectedColumn}
            onChangeColumn={onChangeColumn}
          />
        )}
        <div className="row">{children}</div>
      </div>
      <div className="input-group p-3">
        <input
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
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
