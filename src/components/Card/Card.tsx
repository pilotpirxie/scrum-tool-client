function Card() {
  return (
    <div className="col-12 col-xl-6">
      <div className="card card-body mt-3 retro-card">
        <div className="retro-card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          deserunt, labore? Atque doloribus esse ex fugiat illo impedit nostrum
          quo!
        </div>
        <div className="retro-card-buttons d-flex align-items-center justify-content-end">
          <div className="btn btn-outline-primary btn-sm">
            <i className="ri-edit-2-line" />
          </div>
          <div className="btn btn-outline-primary btn-sm">16</div>
          <div className="btn btn-outline-primary btn-sm">
            <i className="ri-add-line" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
