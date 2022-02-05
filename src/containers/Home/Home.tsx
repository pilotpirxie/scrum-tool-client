import { useParams } from 'react-router-dom';

function Home() {
  const { id } = useParams<{id: string}>();

  return (
    <div>
      Home Module -
      {id}
    </div>
  );
}

export default Home;
