import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';

function Member({ id, name }) {

  return (
    <div className='card mb-2'>
      <div className='card-body d-flex justify-content-between'>
        <h4 className='mb-0'>{name}</h4>

        <section>
          <button type='button' className='btn btn-primary btn-sm mr-1' data-toggle='modal' data-target='#exampleModal'>
            Today's Activities
          </button>
          <button type='button' className='btn btn-secondary btn-sm'>All Activities</button>
        </section>

        <Modal memberId={id} />
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
