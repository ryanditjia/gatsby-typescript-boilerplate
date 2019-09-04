export interface GraphQLNode<T> {
	node: T
}

export interface GraphQLEdges<T> {
	edges: GraphQLNode<T>[]
}

export type Anchor = React.AnchorHTMLAttributes<HTMLAnchorElement>
export type AnchorExcludeHref = Omit<Anchor, 'href'>

export interface NavItem {
	id: string
	text: string
	href: string
}

interface BaseFormData {
	'form-name': string
}

export type FormDataWithFile = BaseFormData & Record<string, string | File>
export type FormDataWithoutFile = BaseFormData & Record<string, string>
