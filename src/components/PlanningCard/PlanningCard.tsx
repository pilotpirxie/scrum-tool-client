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
        className={`w-100 h-100 shadow card card-body planning-card-body d-flex align-items-center justify-content-center ${
          selected ? 'selected' : ''
        }`}
        onClick={onClick}
      >
        {number && <h3 className="text-black">{number}</h3>}
        {icon && (
          <div className="planning-card-number">
            {icon === 'question' && (
              <i className="fs-2 fw-bold text-black ri-question-mark" />
            )}
            {icon === 'coffee' && (
              <i className="fs-2 fw-bold text-black ri-cup-line" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PlanningCard;
