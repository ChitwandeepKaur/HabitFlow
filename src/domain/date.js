export function getTodayISO() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`; // local YYYY-MM-DD
}


export function formatPretttyDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const localDate = new Date(y, m - 1, d); // local midnight

  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(localDate);
}
