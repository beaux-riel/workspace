import React from 'react';

const GlassCard = ({ children }) => {
  return (
    <div className="glass p-4 m-2">
      {children}
    </div>
  );
};

export default GlassCard;