declare namespace Gatsby {
  type GraphQLNode<T> = {
    node: T
  }

  type GraphQLEdges<T> = {
    edges: GraphQLNode<T>[]
  }
}
