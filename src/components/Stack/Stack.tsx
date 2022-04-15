function Stack({
  content,
  votesCount,
  onIncreaseVote,
  onDecreaseVote,
  onDelete,
  onEdit,
}: {
  content: string;
  votesCount: number;
  onIncreaseVote: () => void;
  onDecreaseVote: () => void;
  onDelete: () => void;
  onEdit: () => void;
}) {
  return (
    <div className="col-12 col-xl-6">
      <div className="card card-body mt-3 retro-card border-2 border-primary">
        <div className="retro-card-text">{content}</div>
        <div className="retro-card-buttons d-flex align-items-center justify-content-end">
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
  );
}

export default Stack;
