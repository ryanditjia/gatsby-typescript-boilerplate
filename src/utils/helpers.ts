import { LinkGetProps } from '@reach/router'

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

export function createPhoneNumber({
  phone,
  countryCode = '62',
}: {
  phone: string
  countryCode?: string
}) {
  const sanitizedNumber = phone
    .replace(/-|\s/g, '') // remove hyphens and whitespaces
    .match(/\d+/g)[0] // return the first set of numbers (up to a non-numerical character)

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

export function extractNodes<T>(arr: GraphQLEdges<T>): T[] {
  return arr.edges.map(({ node }) => node)
}

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
