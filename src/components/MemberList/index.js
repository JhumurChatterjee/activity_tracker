import React from 'react';
import PropTypes from 'prop-types';

import Member from '../Member';

function MemberList({ members }) {
  const memberList = members.map(member => {
    return <Member key={member.id.toString()} id={member.id} name={member.real_name} />;
  });

  return (
    <section>
      <h2 className='mb-4'>Member List</h2>

      {memberList}
    </section>
  );
}

MemberList.propTypes = {
  members: PropTypes.array.isRequired
}

MemberList.defaultProps = {
  members: []
}

export default MemberList;
