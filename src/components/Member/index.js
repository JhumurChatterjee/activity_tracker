import React from 'react';
import PropTypes from 'prop-types';

function Member({ id, name }) {
  return (
    <div className='card mb-2'>
      <div className='card-body'>
        <h4 className='mb-0'>{name}</h4>
      </div>
    </div>
  );
}

Member.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

Member.defaultProps = {
  id: '1',
  name: 'Demo Member'
}

export default Member;
