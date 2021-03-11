import {mkdir} from "fs";


export type NewsType = {
  by: string,
  descendants: number,
  id: number,
  kids: Array<number> | undefined | Array<CommentType>,
  score: number,
  time: number,
  title: string,
  type: string,
  url: string
}

export type CommentType = {
  by: string,
  id: number,
  kids: Array<number> | undefined | Array<CommentType>,
  parent: number,
  text: string,
  time: number,
  type: string
}
