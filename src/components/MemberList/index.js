import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Member from '../Member';

function MemberList({ members }) {
  const [queryText, setQueryText] = useState('');
  let filteredMemberList = null;

  if (queryText.length) {
    filteredMemberList = members.filter(member => member.real_name.toLowerCase().includes(queryText.trim().toLowerCase()));
  } else {
    filteredMemberList = members;
  }

  const memberList = filteredMemberList.map(member => {
    return <Member key={member.id.toString()} id={member.id} name={member.real_name} />;
  });

  return (
    <section>
      <div className='d-flex justify-content-between mb-4'>
        <h2 className='mb-0'>Member List</h2>

        <form className='form-inline my-2 my-lg-0'>
          <input
            className='form-control'
            type='search'
            placeholder='Search'
            aria-label='Search'
            value={queryText}
            onChange={e => setQueryText(e.target.value)}
          />
        </form>
      </div>

      {memberList}
    </section>
  );
}

MemberList.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      real_name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

MemberList.defaultProps = {
  members: []
}

export default MemberList;
