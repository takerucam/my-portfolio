// タイムスタンプ群
export type TimeStaps = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

// microcmsからのレスポンス
export type ClientResponse = {
  contents: Data[]
  totalcount: number
  offset: number
  limit: number
}

export type Data = TimeStaps & {
  title: string
  body: string
  date: string
}
