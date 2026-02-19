const STORAGE_KEY = "habitFlowStateV1";

export function loadPersistedState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null; //no persisted state found
        return JSON.parse(raw);
    } catch (error) {
        console.error("Failed to load persisted state", error);
        return null;
    }
}

export function savePersistedState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.error("Failed to save state", error);   
    }
}