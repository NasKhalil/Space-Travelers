import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rockets/rockets';

import {
  RocketContainer, RocketImgContainer, RocketTextContainer,
  RocketTitle, RocketContent, RocketButton, RocketButtonWhite, RocketBadge,
} from '../assets/rocketStyles/rocket';

const Rocket = ({
  id, description, image, reserved, rocketName,
}) => {
  const dispatch = useDispatch();
  const handleClickReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleClickCancel = (id) => {
    dispatch(cancelRocket(id));
  };
  return (
    <>
      <RocketContainer>
        <RocketImgContainer><img src={image} alt="" /></RocketImgContainer>
        <RocketTextContainer>
          <RocketTitle>{rocketName}</RocketTitle>
          <RocketBadge>{reserved && 'Reserved'}</RocketBadge>
          <RocketContent>
            {description}
          </RocketContent>
          { reserved
            ? (
              <RocketButtonWhite
                onClick={() => { handleClickCancel(id); }}
              >
                Cancel Reservation
              </RocketButtonWhite>
            )
            : <RocketButton onClick={() => { handleClickReserve(id); }}>Reserve</RocketButton>}
        </RocketTextContainer>
      </RocketContainer>
    </>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  rocketName: PropTypes.string.isRequired,
};
export default Rocket;
