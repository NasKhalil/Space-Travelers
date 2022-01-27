import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container, MissionContainer, MissionMenu, MissionList, RocketContainer,
  RocketMenu, RocketList, RocketTitle, MissionTitle,
} from '../assets/profileStyles/profile';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missionsReducer);
  const reservedMission = missions.filter((mission) => mission.reserved);
  const reservedRocket = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <>
      <Container>
        <MissionContainer>
          <MissionTitle>My Missions</MissionTitle>
          <MissionMenu>
            { reservedMission.length ? reservedMission.map((miss) => (
              <>
                <MissionList key={miss.id}>{miss.name}</MissionList>
              </>
            )) : <h2>No list</h2> }
          </MissionMenu>
        </MissionContainer>

        <RocketContainer>
          <RocketTitle>My Rockets</RocketTitle>
          <RocketMenu>
            {reservedRocket.length ? reservedRocket.map((roc) => (
              <>
                <RocketList key={roc.id}>{roc.rocket_name}</RocketList>

              </>
            )) : <h2>No List</h2>}
          </RocketMenu>
        </RocketContainer>
      </Container>
      ;
    </>
  );
};

export default MyProfile;
