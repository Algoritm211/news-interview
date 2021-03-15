

export function getStringShorter(str: string, needLength: number) {
  if (str.length > needLength) {
    return `${str.slice(0, needLength)}...`
  }
  return str
}
