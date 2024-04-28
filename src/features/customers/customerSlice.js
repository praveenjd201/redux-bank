const Customer_initialState = {
  fullName: "",
  id: "",
  createdAt: "",
};

export default function customerReducer(state = Customer_initialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.name,
        id: action.payload.id,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

// Action creator funciton for customer
export function createCustomer(name, id) {
  return {
    type: "customer/createCustomer",
    payload: { name, id, createdAt: new Date().toISOString() },
  };
}
export function updateName(name) {
  return { type: "customer/updateName", payload: name };
}
