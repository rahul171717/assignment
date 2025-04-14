// assignment5/reducers.js
const initialState = {
    fdList: [],
    rdList: [],
    notifications: []
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_FD':
        return {
          ...state,
          fdList: [...state.fdList, { ...action.payload, matured: false }],
          notifications: [...state.notifications, `New FD created for ₹${action.payload.amount}`]
        };
      case 'MARK_FD_MATURED':
        return {
          ...state,
          fdList: state.fdList.map((fd, i) =>
            i === action.payload ? { ...fd, matured: true } : fd
          ),
          notifications: [...state.notifications, `FD #${action.payload + 1} marked as matured`]
        };
      case 'ADD_RD':
        return {
          ...state,
          rdList: [...state.rdList, { amount: action.payload, tenure: 12 }],
          notifications: [...state.notifications, `New RD created with ₹${action.payload}/month`]
        };
      case 'ADJUST_RD_CONTRIBUTION':
        return {
          ...state,
          rdList: state.rdList.map((rd, i) =>
            i === action.payload.index
              ? { ...rd, amount: rd.amount + action.payload.change }
              : rd
          )
        };
      default:
        return state;
    }
  }
  