import './Avatar.css';
import { UncontrolledTooltip } from 'reactstrap';

function Avatar({
  image,
  success = false,
  alt,
  tooltipId,
}: {
  image: number;
  success: boolean;
  alt?: string;
  tooltipId: string;
}) {
  return (
    <div>
      {!success ? (
        <div className="m-1">
          <img
            id={`tooltip-${tooltipId}`}
            title={alt}
            src={`/avatars/avatar${image}.png`}
            className="img-fluid avatar"
            alt={alt}
          />
          <UncontrolledTooltip
            placement="right"
            target={`tooltip-${tooltipId}`}
            fade={false}
          >
            {alt}
          </UncontrolledTooltip>
        </div>
      ) : (
        <div className="avatar-bg-success m-1">
          <img
            id={`tooltip-${tooltipId}`}
            title={alt}
            src={`/avatars/avatar${image}.png`}
            className="img-fluid avatar avatar-success"
            alt={alt}
          />
          <UncontrolledTooltip
            placement="right"
            target={`tooltip-${tooltipId}`}
            fade={false}
          >
            {alt}
          </UncontrolledTooltip>
        </div>
      )}
    </div>
  );
}

export default Avatar;
