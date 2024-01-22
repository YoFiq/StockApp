type EntityResults<TEntity> = {
  data: TEntity[]
  first: number
  prev: number
  next: number
  last: number
  pages: number
  items: number
}

export default EntityResults
