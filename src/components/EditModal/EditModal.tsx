import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

function EditModal({
  isOpen,
  onClose,
  onSave,
  content,
  onChange,
  onDelete,
}: {
  isOpen?: boolean;
  content: string;
  onClose: () => void;
  onSave: () => void;
  onDelete: () => void;
  onChange: (content: string) => void;
}) {
  return (
    <Modal isOpen={isOpen} className="rounded-4">
      <ModalHeader className="text-black" toggle={onClose}>
        <i className="ri-edit-2-line" /> Edit
      </ModalHeader>
      <ModalBody>
        <textarea
          className="form-control shadow border-primary border-2 text-black"
          placeholder="Ticket content..."
          value={content}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="d-flex justify-content-between mt-3">
          <Button color="danger" outline className="shadow" onClick={onDelete}>
            Delete
          </Button>
          <Button
            color="primary"
            className="shadow d-flex align-items-center"
            onClick={onSave}
          >
            <i className="ri-save-line me-1" /> Save
          </Button>
        </div>
        {/* <div> */}
        {/*  <hr /> */}
        {/*  <div className="card card-body border-primary shadow border-2"> */}
        {/*    <div className="text-black"> */}
        {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, */}
        {/*      odio. */}
        {/*    </div> */}
        {/*    <div className="d-flex justify-content-end"> */}
        {/*      <div className="btn btn-outline-danger shadow me-1 btn-sm"> */}
        {/*        <i className="ri-delete-bin-2-line" /> Remove */}
        {/*      </div> */}
        {/*      <div className="btn btn-outline-primary shadow me-1 btn-sm"> */}
        {/*        <i className="ri-stack-line" /> Unstack */}
        {/*      </div> */}
        {/*    </div> */}
        {/*  </div> */}
        {/* </div> */}
      </ModalBody>
    </Modal>
  );
}

export default EditModal;
