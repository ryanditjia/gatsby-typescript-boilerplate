export interface GraphQLNode<T> {
  node: T
}

export interface GraphQLEdges<T> {
  edges: GraphQLNode<T>[]
}

export interface NavItem {
  id: string
  text: string
  href: string
}
