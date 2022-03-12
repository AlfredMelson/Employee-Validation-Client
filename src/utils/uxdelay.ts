export function uxdelay(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
