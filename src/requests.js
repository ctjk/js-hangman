export const getPuzzle = async (wordCount) => {
    // Provides random words for the puzzle
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

// These last three functions were used in interim exercises, and are left here for reference purposes only.
const getCountry = async (countryCode) => {
    // Provides a list of all countries
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const countries = await response.json()
        return countries.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch country')
    }
}

const getLocation = async () => {
    // Provides current location (including country code) from IP address
    const response = await fetch('//ipinfo.io/json?token=be2ccef4ea7d67')
    if (response.status === 200) {
        return response.json()      
    } else {
        throw new Error('Unable to fetch location')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}
