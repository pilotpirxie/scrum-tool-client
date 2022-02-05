import { useParams } from 'react-router-dom';

function Retro() {
  const { id } = useParams<{id: string}>();

  return (
    <div>
      Retro Module -
      {id}
    </div>
  );
}

export default Retro;
