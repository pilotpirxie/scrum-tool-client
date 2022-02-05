import { useParams } from 'react-router-dom';

function Planning() {
  const { id } = useParams<{ id: string }>();

  return <div>Planning Module -{id}</div>;
}

export default Planning;
