tsx
import React, { useState } from 'react';

export const UserInterface = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div style={{ position: 'absolute', top: 20, left: 20, backgroundColor: 'rgba(0,0,0,0.5)', padding: 10, borderRadius: 5 }}>
      {showMenu && (
        <>
          <h2>Enchanted Forest</h2>
          <p>Explore the enchanted forest. Use arrow keys to move.</p>
        </>
      )}
      <button onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? 'Hide Menu' : 'Show Menu'}
      </button>
    </div>
  );
};
