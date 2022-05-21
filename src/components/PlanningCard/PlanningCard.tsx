import './PlanningCard.css';

function PlanningCard({
  number,
  icon,
  selected,
  onClick,
}: {
  number?: number;
  icon?: 'coffee' | 'question';
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div className="p-2 planning-card d-flex align-items-center flex-column">
      <div
        className={`w-100 h-100 shadow card card-body planning-card-body d-flex align-items-center justify-content-between ${
          selected ? 'selected' : ''
        }`}
        onClick={onClick}
      >
        {number && (
          <div className="w-100 small d-flex justify-content-start text-danger">
            {number}
          </div>
        )}
        {number && <h3 className="text-black">{number}</h3>}
        {number && (
          <div className="w-100 small d-flex justify-content-start text-danger flip-180">
            {number}
          </div>
        )}
        {icon && (
          <div className="planning-card-number d-flex align-items-center justify-content-center w-100 h-100">
            {icon === 'question' && (
              <i className="fs-1 fw-bold text-black ri-question-mark" />
            )}
            {icon === 'coffee' && (
              <i className="fs-1 fw-bold text-black ri-cup-line" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PlanningCard;
