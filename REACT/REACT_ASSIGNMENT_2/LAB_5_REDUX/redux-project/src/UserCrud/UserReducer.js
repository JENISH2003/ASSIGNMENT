import { ins, del, upd } from "./UserAction";

const initialState = {
  data: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ins:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case del:
      return {
        ...state,
        data: state.data.filter((_, index) => index !== action.payload),
      };

    case upd:
      return {
        ...state,
        data: state.data.map((item, index) =>
          index === action.payload.id ? action.payload.data : item
        ),
      };

    default:
      return state;
  }
};

export default UserReducer;
