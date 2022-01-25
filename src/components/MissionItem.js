/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = (props) => {
  const { name } = props;
  return (
    <tr>
      <td>
        {' '}
        {name}
        {' '}
      </td>
    </tr>
  );
};

MissionItem.prototypes = {
  name: PropTypes.string.isRequired,
};

export default MissionItem;
