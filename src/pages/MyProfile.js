import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsReducer);
  let filteredMissions;
  if (missions) {
    filteredMissions = missions.filter((mission) => mission.reserved);
  }

  const styles = {
    missions: {
      border: '1px solid #000',
      borderRadius: '6px',
      padding: '16px',
      margin: '16px',
      width: '350px',
    },
  };
  return (
    <>
      <div>
        <h2>My Missions</h2>
        <ul style={styles.missions}>
          {filteredMissions.map((mission) => {
            const { name, id } = mission;
            return (
              <li
                key={id}
                className="list"
              >
                <h4 className="name">{name}</h4>
                <hr />
              </li>
            );
          })}
        </ul>
        {(!filteredMissions.length >= 1)
          ? <h4>No Mission </h4>
          : null}
      </div>
    </>
  );
};

export default MyProfile;
