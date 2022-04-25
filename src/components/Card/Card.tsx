import './Card.css';
import { useDrag, useDrop } from 'react-dnd';

function Card({
  id,
  content,
  votesCount,
  onIncreaseVote,
  onDecreaseVote,
  onDelete,
  onEdit,
  onGroup,
  stack = false,
}: {
  id: string;
  content: string;
  votesCount: number;
  onIncreaseVote: () => void;
  onDecreaseVote: () => void;
  onDelete: () => void;
  onEdit: () => void;
  onGroup: (sourceCard: string, targetCard: string) => void;
  stack?: boolean;
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'card',
    item: {
      id,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item: { id: string }) => {
      onGroup(item.id, id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className="col-12 col-xl-6 position-relative" key={id}>
      <div
        ref={drag}
        className={`card card-body mt-3 retro-card border-2 border-primary ${
          isDragging ? `is-dragging` : ''
        } ${isOver ? `is-over` : ''}`}
      >
        <div className="retro-card-text">
          {stack && <i className="ri-stack-line ms-1" />} {content}
        </div>
        <div className="retro-card-buttons d-flex align-items-center justify-content-end">
          <div>
            <div
              className="btn btn-outline-primary shadow me-1 btn-sm"
              onClick={onDelete}
            >
              <i className="ri-delete-bin-2-line" />
            </div>
            <div
              className="btn btn-outline-primary shadow me-1 btn-sm"
              onClick={onEdit}
            >
              <i className="ri-edit-2-line" />
            </div>
            <div
              className="btn btn-outline-primary shadow me-1 btn-sm"
              onClick={onDecreaseVote}
            >
              {votesCount}
            </div>
            <div
              className="btn btn-outline-primary shadow me-1 btn-sm"
              onClick={onIncreaseVote}
            >
              <i className="ri-add-line" />
            </div>
          </div>
        </div>
      </div>
      {stack && (
        <>
          <div className="card card-body mt-3 retro-card border-2 border-primary stack position-absolute" />
          <div className="card card-body mt-3 retro-card border-2 border-primary stack-2 position-absolute" />
        </>
      )}
    </div>
  );
}

export default Card;
