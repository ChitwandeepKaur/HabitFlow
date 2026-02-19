import { initialState } from "../state/initialState.js";
import { loadPersistedState, savePersistedState } from "../state/persistence.js";

function clone(obj) {
  if (typeof structuredClone === "function") return structuredClone(obj);
  return JSON.parse(JSON.stringify(obj));
}

const persisted = loadPersistedState();
let state = persisted ?? clone(initialState);

if (!persisted) {
savePersistedState(state); // seed localStorage on first run
}

export function getState() {
    return state;
}

export function setState(updater) {
  const next = typeof updater === "function" ? updater(state) : updater;
  state = next;
  savePersistedState(state);
}
