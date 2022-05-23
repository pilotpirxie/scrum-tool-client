import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { RawCard } from '../../socket/events/models';

function EditModal({
  isOpen,
  onClose,
  onSave,
  content,
  onChange,
  onDelete,
  stackItems,
}: {
  isOpen?: boolean;
  content: string;
  onClose: () => void;
  onSave: () => void;
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
        <textarea
          className="form-control shadow border-primary border-2 text-black"
          placeholder="Card content..."
          value={content}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="d-flex justify-content-between mt-3">
          <div className="btn btn-outline-danger shadow" onClick={onDelete}>
            Delete
          </div>
          <div
            className="btn btn-primary shadow d-flex align-items-center"
            color="primary"
            onClick={onSave}
          >
            <i className="ri-save-line me-1" /> Save
          </div>
        </div>
        {stackItems.map((card) => (
          <div key={card.id}>
            <hr />
            <div className="card card-body small text-black-50 d-flex align-items-center flex-row">
              <i className="ri-stack-line me-1" /> {card.content}
            </div>
          </div>
        ))}
      </ModalBody>
    </Modal>
  );
}

export default EditModal;
