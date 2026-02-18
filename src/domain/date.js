export function getTodayISO () {
    const today = new Date(); // Get today's date
    return today.toISOString().split('T')[0]; // Convert to ISO format which is something like this - 2026-02-18T23:11:05.641Z and extract the date part by splitting at 'T' and taking the first part
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
