const enumToStringArray = (enumObject: any): string[] => {
  const keys = Object.keys(enumObject).filter((key) => {
    return typeof enumObject[key] === "string"
  })

  return keys.map((key) => enumObject[key])
}

export default enumToStringArray
