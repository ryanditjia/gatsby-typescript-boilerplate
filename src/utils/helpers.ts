import { LinkGetProps } from '@reach/router'

function debounce(fn: Function, time: number) {
  let interval: any
  return (...args: any[]) => {
    clearTimeout(interval)
    interval = setTimeout(() => {
      interval = null
      fn(...args)
    }, time)
  }
}

/*
 * hex to rgb or rgba
 */
function hexToRGB(hex: string, alpha?: number) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgb(${r}, ${g}, ${b})`
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
function createCallableNumber(str: string) {
  return addCountryCode(getPrimaryNumber(str))
}

function setPartiallyCurrent({
  href,
  isPartiallyCurrent,
  isCurrent,
}: LinkGetProps) {
  if (isPartiallyCurrent && !isCurrent && href !== '/') {
    return {
      'data-partially-current': true,
    }
  }
}

function extractNodes<T>(arr: GraphQLEdges<T>): T[] {
  return arr.edges.map(({ node }) => node)
}

export {
  debounce,
  hexToRGB,
  createCallableNumber,
  setPartiallyCurrent,
  extractNodes,
}
