function AvatarItem({
  selected = false,
  onSelect,
  image,
}: {
  selected?: boolean;
  onSelect: () => void;
  image: number;
}) {
  return (
    <div className="col-6 col-sm-4 col-md-3 mb-2">
      <div
        className={`card card-body cursor-pointer ${
          selected ? 'border-primary border-2' : ''
        } shadow`}
        onClick={() => onSelect()}
      >
        <img
          src={`/avatars/avatar${image}.png`}
          alt="Avatar"
          className="img-fluid"
        />
      </div>
    </div>
  );
}

export default AvatarItem;
