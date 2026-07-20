export const getQueryParams = (searchParams, data) => {
  const { continent, country, is_open_to_poublic } = searchParams

  if (continent) { data = data.fitler(
    destination => 
      destination.continent.toLowerCase() === continent.toLowerCase()
  )}

  if (country) { data = data.fitler(
    destination => 
      destination.country.toLowerCase() === country.toLowerCase()
  )}

  if (is_open_to_poublic) { data = data.fitler(
    destination => 
      destination.is_open_to_poublic === JSON.parse(is_open_to_poublic.toLowerCase())
  )}

  return data
}