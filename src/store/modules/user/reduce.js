const initialState = { name: "" };

const userReduce = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      const { name } = action;
      return { name: name };
      break;

    default:
      return state;
  }
};

export default userReduce;
