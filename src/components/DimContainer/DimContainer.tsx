import React from 'react';
import './DimContainer.css';

function DimContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="position-absolute d-flex vw-100 vh-100 bg-black-75 dim-container">
      {children}
    </div>
  );
}

export default DimContainer;
