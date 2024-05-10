interface Query {
  name: string
  value: string | null
}

const setUrlQueires = (url: string, ...qparams: Query[]): string => {
  let resultUrl = url

  for (const query of qparams) {
    if (!query.value) continue

    resultUrl += `${query.name}=${query.value.toLowerCase()}&`
  }

  return resultUrl
}

export default setUrlQueires
