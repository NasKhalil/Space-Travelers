const FETCH_MISSION = 'missions/FETCH_MISSION';

const missionApiUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchMission = (payload) => ({
  type: FETCH_MISSION,
  payload,
});

export const fetchMissionsApi = async () => {
  const missions = await fetch(missionApiUrl);
  const response = await missions.json();
  const newRes = response.map((mission) => (
    {
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    }
  ));
  return newRes;
};

export const getMissions = () => async (dispatch) => {
  const missionsArr = await fetchMissionsApi();
  if (missionsArr) {
    dispatch(fetchMission(missionsArr));
  }
};

const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSION:
      return [...action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
