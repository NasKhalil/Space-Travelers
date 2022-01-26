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
    <div className="m-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission) => {
              const { id, name, description } = mission;
              return (
                <tr key={id}>
                  <MissionItem name={name} description={description} />
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
