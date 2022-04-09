import Sidebar from './Sidebar/Sidebar';
import Container from '../../components/Container';

function Retro() {
  // const { id } = useParams<{ id: string }>();
  // const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <Container>
      <Sidebar />
      <div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          dolorem dolorum minima soluta sunt veritatis?
        </h1>
      </div>
    </Container>
  );
}

export default Retro;
