export const getFilteredResponse = (
  data,
  dataType,
  dataName
) => {
    const filteredData = data.filter(
      value => value[dataType].toLowerCase() === dataName.toLowerCase()
    )

    return JSON.stringify(filteredData)
}