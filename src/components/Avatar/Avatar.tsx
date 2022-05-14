import './Avatar.css';

function Avatar({
  image,
  success = false,
  alt,
}: {
  image: number;
  success: boolean;
  alt?: string;
}) {
  return (
    <div>
      {!success ? (
        <div className="m-1">
          <img
            title={alt}
            src={`/avatars/avatar${image}.png`}
            className="img-fluid avatar"
            alt={alt}
          />
        </div>
      ) : (
        <div className="avatar-bg-success m-1">
          <img
            title={alt}
            src={`/avatars/avatar${image}.png`}
            className="img-fluid avatar avatar-success"
            alt={alt}
          />
        </div>
      )}
    </div>
  );
}

export default Avatar;
