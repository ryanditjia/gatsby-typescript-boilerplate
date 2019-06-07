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

/*
 * remove all whitespace from a string
 */
function removeWhitespace(str: string) {
  return str.replace(/\s/g, '')
}

/*
 * return the first set of numbers it finds (before it finds a non-numerical character)
 */
function getFirstSetOfNumbers(str: string) {
  return str.match(/\d+/g)[0]
}

/*
 * run removeWhitespace then getLeadingNumbers
 */
function getPrimaryNumber(str: string) {
  return getFirstSetOfNumbers(removeWhitespace(str))
}

/*
 * make a valid number for tel: in <a> tag
 * default to 62 (Indonesia)
 */
function addCountryCode(str: string, cc: string = '62') {
  // converting to number removes the leading 0
  if (str.startsWith('0')) {
    return `+${cc}${Number(str)}`
  }

  if (str.startsWith(cc)) {
    return `+${str}`
  }

  if (str.startsWith(`+${cc}`)) {
    return str
  }

  return `+${cc}${str}`
}

// the only function that the app calls, the rest of the functions above are helpers
export function createCallableNumber(str: string) {
  return addCountryCode(getPrimaryNumber(str))
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

export function extractNodes<T>(arr: Gatsby.GraphQLEdges<T>): T[] {
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
