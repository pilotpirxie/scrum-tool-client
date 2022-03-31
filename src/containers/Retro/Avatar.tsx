import avatar from './avatar0.png';

function Avatar({
  image,
  success = false,
}: {
  image: string | undefined;
  success: boolean;
}) {
  return (
    <div>
      {!success ? (
        <div className="m-1">
          <img src={image} className="img-fluid avatar" alt="avatar" />
        </div>
      ) : (
        <div className="avatar-bg-success m-1">
          <img
            src={avatar}
            className="img-fluid avatar avatar-success"
            alt="avatar"
          />
        </div>
      )}
    </div>
  );
}

export default Avatar;
