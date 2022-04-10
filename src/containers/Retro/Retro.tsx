import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Container from '../../components/Container';
import ShiftedContent from '../../components/ShiftedContent';

function Retro() {
  // const { id } = useParams<{ id: string }>();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <Container>
      <Sidebar
        isOpen={isNavbarOpen}
        onSidebarToggleClick={() => setIsNavbarOpen(!isNavbarOpen)}
      />
      <ShiftedContent>
        <div className="p-3">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            dolorem dolorum minima soluta sunt veritatis?
          </h1>
        </div>
      </ShiftedContent>
    </Container>
  );
}

export default Retro;
