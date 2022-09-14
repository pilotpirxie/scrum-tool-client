import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { RawCard } from '../../socket/events/models';

function EditModal({
  isOpen,
  onClose,
  onSave,
  onUngroup,
  content,
  votesCount,
  onChange,
  onDelete,
  stackItems,
}: {
  isOpen?: boolean;
  content: string;
  votesCount: number;
  onClose: () => void;
  onSave: () => void;
  onUngroup: () => void;
  onDelete: () => void;
  onChange: (content: string) => void;
  stackItems: RawCard[];
}) {
  return (
    <Modal className="rounded-4" isOpen={isOpen} toggle={onClose}>
      <ModalHeader className="text-black" toggle={onClose}>
        <i className="ri-edit-2-line" /> Edit
      </ModalHeader>
      <ModalBody>
        <div className="card card-body">
          <textarea
            className="form-control shadow border-primary border-2 text-black"
            rows={5}
            placeholder="Card content..."
            value={content}
            onChange={(e) => onChange(e.target.value)}
          />
          <div className="d-flex justify-content-end flex-row mt-3">
            <div className="badge rounded-pill text-dark bg-grey d-flex align-items-center">
              <i className="ri-thumb-up-line me-1" /> {votesCount}
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div
              className="btn btn-sm btn-outline-danger shadow"
              onClick={onDelete}
            >
              Delete
            </div>
            <div className="d-flex">
              {stackItems.length > 0 && (
                <div
                  className="btn btn-sm btn-outline-primary shadow d-flex align-items-center me-2"
                  onClick={onUngroup}
                >
                  <i className="ri-stack-line me-1" /> Ungroup
                </div>
              )}
              <div
                className="btn btn-sm btn-primary shadow d-flex align-items-center"
                onClick={onSave}
              >
                <i className="ri-save-line me-1" /> Save
              </div>
            </div>
          </div>
        </div>
        {stackItems.map((card) => (
          <div key={card.id}>
            <hr />
            <div className="card card-body small text-black-50 py-3">
              <div className="d-flex align-items-center flex-row">
                <i className="ri-stack-line me-1" /> {card.content}
              </div>
              <div className="d-flex justify-content-end flex-row">
                <div className="badge rounded-pill text-dark bg-grey d-flex align-items-center">
                  <i className="ri-thumb-up-line me-1" /> {card.votes.length}
                </div>
              </div>
            </div>
          </div>
        ))}
      </ModalBody>
    </Modal>
  );
}

export default EditModal;
