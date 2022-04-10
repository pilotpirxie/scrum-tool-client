import React from 'react';
import './ShiftedContent.css';

function ShiftedContent({ children }: { children: React.ReactNode }) {
  return <div className="shifted-content">{children}</div>;
}

export default ShiftedContent;
