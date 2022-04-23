import React from 'react';
import { useDrop } from 'react-dnd';
import './List.css';

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

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item: { id: number }) => {
      // eslint-disable-next-line no-console
      console.log('Moved ', item.id, ' to column ', id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`col-${
        columnWidth || 4
      } bg-blue-10 p-0 d-flex flex-column justify-content-between vh-100 retro-list ${
        isOver ? 'is-over' : ''
      }`}
    >
      <div className="overflow-y-auto overflow-x-hidden h-100 p-3">
        <h1 className="text-black">{heading}</h1>
        <div className="row">{children}</div>
      </div>
      <div className="input-group p-3">
        <input
          type="text"
          className={`form-control shadow border-${color} border-2`}
          placeholder={inputPlaceholder}
        />
        <button className={`btn btn-${color} shadow`} type="button">
          <i className="ri-add-line" />
        </button>
      </div>
    </div>
  );
}

export default List;
