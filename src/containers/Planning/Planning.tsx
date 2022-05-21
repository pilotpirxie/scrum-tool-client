import ShiftedContent from '../../components/ShiftedContent';
import './Planning.css';
import PlanningCard from '../../components/PlanningCard';

function Planning() {
  return (
    <ShiftedContent>
      <div className="vh-100 w-100 bg-planning overflow-y-auto">
        <div className="container d-flex align-items-center">
          <div className="row m-0">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <h1 className="text-white">Planning</h1>
            </div>
            <div className="col-12 col-lg-8 offset-lg-2 ">
              <div className="d-flex flex-row flex-wrap justify-content-center">
                <PlanningCard selected={false} onClick={() => {}} number={1} />
                <PlanningCard selected={false} onClick={() => {}} number={2} />
                <PlanningCard selected={false} onClick={() => {}} number={3} />
                <PlanningCard selected={false} onClick={() => {}} number={5} />
                <PlanningCard selected={false} onClick={() => {}} number={8} />
                <PlanningCard selected={false} onClick={() => {}} number={13} />
                <PlanningCard selected={false} onClick={() => {}} number={21} />
                <PlanningCard selected={false} onClick={() => {}} number={34} />
                <PlanningCard selected={false} onClick={() => {}} number={55} />
                <PlanningCard selected={false} onClick={() => {}} number={89} />
                <PlanningCard
                  selected={false}
                  onClick={() => {}}
                  icon="question"
                />
                <PlanningCard
                  selected={false}
                  onClick={() => {}}
                  icon="coffee"
                />
              </div>
            </div>
            <div className="my-3 col-12 d-flex align-items-center justify-content-center">
              <button type="button" className="btn btn-primary">
                Reset
              </button>
              <button type="button" className="ms-3 btn btn-success">
                Reveal
              </button>
            </div>
          </div>
        </div>
      </div>
    </ShiftedContent>
  );
}

export default Planning;
