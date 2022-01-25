import { Table } from 'react-bootstrap';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missions';
import MissionItem from '../components/MissionItem';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <div>
      <h2>Missions</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>/</th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission) => <MissionItem key={mission.id} name={mission.name} />)
          }
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
