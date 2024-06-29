// src/components/UserList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import User from './User';

const UserList = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div>
      <button onClick={handleFetchUsers}>Fetch Data</button>
      {userState.loading && <p>Loading...</p>}
      {userState.error && <p>{userState.error}</p>}
      {userState.users && userState.users.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
};

export default UserList;
