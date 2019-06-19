type GraphQLNode<T> = {
  node: T
}

type GraphQLEdges<T> = {
  edges: GraphQLNode<T>[]
}

declare module '*.svg' {
  const content: any
  export default content
}
