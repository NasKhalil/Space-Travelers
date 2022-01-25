/* eslint-disable consistent-return */
import Axios from 'axios';
// actions

const FETCH_ROCKET = 'FETCH_ROCKET';

const RESERVE_ROCKET = 'RESERVE_ROCKET';

const CANCEL_ROCKET = 'CANCEL_ROCKET';

const fetchRocket = (payload) => ({
  type: FETCH_ROCKET,
  payload,
});

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancelRocket = (payload) => ({
  type: CANCEL_ROCKET,
  payload,
});

export const fetchRocketApi = () => async (dispatch) => {
  try {
    const { data } = await Axios.get('https://api.spacexdata.com/v3/rockets');
    dispatch(fetchRocket(data));
  } catch (error) {
    return error;
  }
};

// initialize State

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return action.payload.map((rocket) => ({ ...rocket, reserved: false }));

    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    }

    case CANCEL_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
