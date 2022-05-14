import './Avatar.css';

function Avatar({
  image,
  success = false,
}: {
  image: number;
  success: boolean;
}) {
  return (
    <div>
      {!success ? (
        <div className="m-1">
          <img
            src={`/avatars/avatar${image}.png`}
            className="img-fluid avatar"
            alt="avatar"
          />
        </div>
      ) : (
        <div className="avatar-bg-success m-1">
          <img
            src={`/avatars/avatar${image}.png`}
            className="img-fluid avatar avatar-success"
            alt="avatar"
          />
        </div>
      )}
    </div>
  );
}

export default Avatar;
