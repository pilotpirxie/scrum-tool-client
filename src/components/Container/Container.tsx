import React from 'react';

function Container({ children }: { children: React.ReactNode }) {
  return <div className="d-flex vh-100 bg-main">{children}</div>;
}

export default Container;
