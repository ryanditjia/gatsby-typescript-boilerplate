import { LinkGetProps } from '@reach/router'
import { GraphQLEdges } from '../types'

/*
 * merge classNames together
 */
export function cx(...args: Array<string | boolean | undefined>) {
	return args
		.filter(
			cls =>
				typeof cls !== 'boolean' &&
				typeof cls !== 'undefined' &&
				cls.trim() !== '',
		)
		.join(' ')
}

/*
 * formal to how many decimal places
 */
export function numberFormat(val: number, decimalPlaces: number) {
	var multiplier = Math.pow(10, decimalPlaces)
	return Number(
		(Math.round(val * multiplier) / multiplier).toFixed(decimalPlaces),
	)
}

/*
 * hex to rgb or rgba
 */
export function hexToRGB(hex: string, alpha: number = 1) {
	const r = parseInt(hex.slice(1, 3), 16)
	const g = parseInt(hex.slice(3, 5), 16)
	const b = parseInt(hex.slice(5, 7), 16)

	if (alpha < 0 || alpha > 1) {
		throw new Error('Alpha value must be between 0 and 1.')
	}

	return alpha === 1
		? `rgb(${r}, ${g}, ${b})`
		: `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/*
 * Check if email is valid
 */
export function isValidEmail(email: string) {
	return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
}

/*
 * Create valid tel: from Indonesia style of writing phone numbers
 */
export function createPhoneNumber({
	phone,
	countryCode = '62',
}: {
	phone: string
	countryCode?: string
}) {
	const splitNumbers =
		phone
			.replace(/-|\s/g, '') // remove hyphens and whitespaces
			.match(/\d+/g) || [] // split into array of numbers (divided by non-numerical characters)

	// check if there’s any number at all
	if (splitNumbers.length > 0) {
		// get the first set of numbers
		const sanitizedNumber = splitNumbers.length > 0 ? splitNumbers[0] : ''

		if (sanitizedNumber.startsWith('0')) {
			// converting to number removes the leading 0
			return countryCode + Number(sanitizedNumber)
		}

		if (sanitizedNumber.startsWith(countryCode)) {
			// if starts with country code, return as is
			return sanitizedNumber
		}

		return countryCode + sanitizedNumber
	}

	throw new Error('Please pass a valid phone number')
}

/*
 *Create WhatsApp link from phone number, with optional text
 */
export function createWhatsAppLink({
	phone,
	text,
}: {
	phone: string
	text?: string
}) {
	let link = `https://wa.me/${createPhoneNumber({ phone })}`

	if (text) {
		link += `?text=${encodeURIComponent(text)}`
	}

	return link
}

/*
 * https://reach.tech/router/api/Link
 * Set prop to Link
 */
export function setPartiallyCurrent({
	href,
	isPartiallyCurrent,
	isCurrent,
}: LinkGetProps) {
	if (isPartiallyCurrent && !isCurrent && href !== '/') {
		return {
			'data-partially-current': true,
		}
	}

	return {}
}

/*
 * Extract data from Relay GraphQL style edge node
 */
export function extractNodes<T>(arr: GraphQLEdges<T>): T[] {
	return arr.edges.map(({ node }) => node)
}

/*
 * Helper for Gatsby’s createPages graphql query
 */
export function fakeGraphQLTag(query: TemplateStringsArray) {
	const tagArgs = arguments

	return tagArgs[0].reduce(
		(accumulator: string, string: string, index: number) => {
			accumulator += string
			if (index + 1 in tagArgs) accumulator += tagArgs[index + 1]
			return accumulator
		},
		'',
	)
}

/*
 * Encoding forms with attachments (input type file)
 */
function encodeWithFiles(data: any): FormData {
	const formData = new FormData()

	Object.entries<any>(data).forEach(([key, value]) => {
		formData.append(key, value)
	})

	return formData
}

/*
 * Encoding forms without attachments
 */
function encodeWithoutFiles(data: any): string {
	return Object.entries<any>(data)
		.map(
			([key, value]) =>
				encodeURIComponent(key) + '=' + encodeURIComponent(value),
		)
		.join('&')
}

/*
 * The function that’s public facing, wrapping the 2 functions above
 */
export function encodeForm({
	data,
	withFiles = false,
}: {
	data: any
	withFiles?: boolean
}) {
	return withFiles ? encodeWithFiles(data) : encodeWithoutFiles(data)
}
