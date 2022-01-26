/* eslint-disable react/prop-types */

import React from 'react';
import { Button, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const MissionItem = (props) => {
  const {
    id, name, description, reserved,
  } = props;

  const dispatch = useDispatch();
  return (
    <>
      <td>{name}</td>
      <td>{ description }</td>
      <td>
        {
          reserved
            ? <Badge bg="info">Active Member</Badge>
            : <Badge bg="secondary">Not A Member</Badge>
        }
      </td>
      <td>
        {
          reserved
            ? (
              <Button
                type="button"
                variant="outline-danger"
                onClick={() => dispatch(leaveMission(id))}
              >
                Leave Mission
              </Button>
            )
            : (
              <Button
                type="button"
                variant="outline-secondary"
                onClick={() => dispatch(joinMission(id))}
              >
                Join Mission
              </Button>
            )
        }
      </td>
    </>
  );
};

MissionItem.prototypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

MissionItem.defaultProps = {
  reserved: false,
};

export default MissionItem;
