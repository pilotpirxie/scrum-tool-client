import './PlanningCard.css';

function PlanningCard({
  number,
  icon,
  selected,
  onClick,
  voter,
}: {
  number?: number;
  icon?: 'break pls' | 'not sure';
  selected?: boolean;
  onClick?: () => void;
  voter?: string;
}) {
  return (
    <div className="p-2 planning-card d-flex align-items-center flex-column">
      <div
        className={`w-100 h-100 shadow card card-body planning-card-body d-flex align-items-center justify-content-between ${
          selected ? 'selected' : ''
        }`}
        onClick={onClick}
      >
        <div className="w-100 overflow-hidden small d-flex justify-content-start text-danger">
          {voter || number || icon}
        </div>

        {number && <h3 className="text-black">{number}</h3>}

        {icon && (
          <div className="planning-card-number d-flex align-items-center justify-content-center w-100 h-100">
            {icon === 'not sure' && (
              <i className="fs-1 fw-bold text-black ri-question-mark" />
            )}
            {icon === 'break pls' && (
              <i className="fs-1 fw-bold text-black ri-cup-line" />
            )}
          </div>
        )}

        <div className="w-100 overflow-hidden small d-flex justify-content-start text-danger flip-180">
          {voter || number || icon}
        </div>
      </div>
    </div>
  );
}

export default PlanningCard;
