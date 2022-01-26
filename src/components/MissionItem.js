/* eslint-disable react/prop-types */

import React from 'react';
import { Button, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MissionItem = (props) => {
  const { name, description } = props;
  return (
    <>
      <td>{name}</td>
      <td>{ description }</td>
      <td><Badge bg="secondary">Not A Member</Badge></td>
      <td><Button variant="secondary" type="button">Join Mission</Button></td>
    </>
  );
};

MissionItem.prototypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItem;
