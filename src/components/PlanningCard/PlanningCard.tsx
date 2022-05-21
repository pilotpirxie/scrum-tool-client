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
    <div className="p-1 planning-card d-flex align-items-center flex-column">
      <div
        className={`w-100 h-100 card card-body ${selected ? 'selected' : ''}`}
        onClick={onClick}
      >
        {number && <div className="planning-card-number">{number}</div>}
        {icon && <div className="planning-card-number">{icon}</div>}
      </div>
    </div>
  );
}

export default PlanningCard;
