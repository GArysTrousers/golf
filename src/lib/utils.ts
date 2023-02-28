export function arrayIntersects(arr1: any[], arr2: any[]) {
  return arr1.filter(val => arr2.includes(val)).length > 0
}

export function range(amount: number, start: number = 0) {
  return [...Array(amount).keys()].map((v) => v + start);
}

export function strCompare(a:string, b:string) {
  return a.localeCompare(b, "en", { sensitivity: "base" }) == 0
}

export function moveUpInList(list: any[], index:number) {
  if (index <= 0) return list;
  const item = list[index]
  const copy = list
  copy.splice(index, 1)
  copy.splice(index - 1, 0, item)
  return copy;
}

export function moveDownInList(list: any[], index:number) {
  if (index > list.length) return list;
  const item = list[index]
  const copy = list
  copy.splice(index, 1)
  copy.splice(index + 1, 0, item)
  return copy;
}

export function removeIndexFromList(list: any[], index:number) {
  return list.filter((a, i) => i != index);
}

export function clamp(value:number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}