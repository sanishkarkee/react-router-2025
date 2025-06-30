import React from 'react';
import { useParams } from 'react-router-dom';

export const UserDetails = () => {
  // const params = useParams();
  // const userId = params.userId;

  // OR

  const { userId } = useParams();

  return <>Details about user: {userId}</>;
};
