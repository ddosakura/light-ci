export function save(k, v) {
  localStorage.setItem(k, JSON.stringify(v));
}

export function load(k) {
  return JSON.parse(localStorage.getItem(k));
}
