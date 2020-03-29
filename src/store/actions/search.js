export function setDebouncedValue(value) {
  return {
    type: "SET_VALUE",
    debouncedValue: value
  }
}