import { useParams } from 'react-router-dom';

function Kudos() {
  const { id } = useParams<{id: string}>();

  return (
    <div>
      Kudos Module -
      {id}
    </div>
  );
}

export default Kudos;
