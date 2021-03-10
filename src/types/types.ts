

export type NewsType = {
  by: string,
  descendants: number,
  id: number,
  kids: Array<number> | undefined,
  score: number,
  time: number,
  title: string,
  type: string,
  url: string
}

