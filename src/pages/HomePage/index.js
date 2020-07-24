import React, { useState, useEffect } from 'react';

import MemberList from '../../components/MemberList';

function HomePage() {
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/JhumurChatterjee/mock-server/members')
      .then(res => res.json())
      .then(
        (result) => { setMemberList(result) }
      );
  }, []);

  if (!memberList.length) return null;

  return (
    <>
      <div className='jumbotron p-5'>
        <h1>Welcome to Activity Tracker..!!</h1>
      </div>

      <MemberList members={memberList} />
    </>
  );
}

export default HomePage;
