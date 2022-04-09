import avatar0 from './avatar0.png';
import './Avatar.css';

const avatarMap = [avatar0];

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
            src={avatarMap[image]}
            className="img-fluid avatar"
            alt="avatar"
          />
        </div>
      ) : (
        <div className="avatar-bg-success m-1">
          <img
            src={avatarMap[image]}
            className="img-fluid avatar avatar-success"
            alt="avatar"
          />
        </div>
      )}
    </div>
  );
}

export default Avatar;
