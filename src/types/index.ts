export interface GraphQLNode<T> {
  node: T
}

export interface GraphQLEdges<T> {
  edges: GraphQLNode<T>[]
}
