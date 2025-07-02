import React, { useState } from 'react';

export const Login = () => {
  const [user, setUser] = useState('');

  return (
    <>
      <label>
        username:
        <input type='text' onChange={(e) => setUser(e.target.value)} />
      </label>
    </>
  );
};
