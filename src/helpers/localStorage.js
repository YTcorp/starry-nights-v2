export const loadStorage = (state) => {
  try {
    const serializedState = localStorage.getItem(`${state}`);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state, data) => {
  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(`${state}`, serializedState);
  } catch {}
};

// const serializedState = JSON.stringify(state || data);
//     localStorage.setItem('state', serializedState);
