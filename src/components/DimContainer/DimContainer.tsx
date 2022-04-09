import React from 'react';

function DimContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="position-absolute d-flex vw-100 vh-100 bg-black-75">
      {children}
    </div>
  );
}

export default DimContainer;
