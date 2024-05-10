const stringToQuery = (str: string | null): string | null => {
  if (!str) return null
  return str.trim().replace(/\s+/g, "+")
}

export default stringToQuery
