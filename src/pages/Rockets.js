import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketApi } from '../redux/rockets/rockets';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRocketApi());
    }
  }, []);
  return (
    <>
      { rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          description={rocket.description}
          id={rocket.id}
          image={rocket.flickr_images[0]}
          reserved={rocket.reserved}
          rocketName={rocket.rocket_name}
        />
      ))}
    </>
  );
};

export default Rockets;
