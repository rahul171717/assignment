// assignment5/actions.js
export const addFD = (fd) => ({
    type: 'ADD_FD',
    payload: fd
  });
  
  export const markFDAsMatured = (index) => ({
    type: 'MARK_FD_MATURED',
    payload: index
  });
  
  export const addRD = (amount) => ({
    type: 'ADD_RD',
    payload: amount
  });
  
  export const adjustRDContribution = (index, change) => ({
    type: 'ADJUST_RD_CONTRIBUTION',
    payload: { index, change }
  });
  