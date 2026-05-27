// [Reason] Lightweight className merge without extra dependencies
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
