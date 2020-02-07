class LocationsService {
  getCountries = () => {
    let country = [
      { value: '', label: 'All Countries' },
      { value: 'unitedStates', label: 'United States' },
      { value: 'argentina', label: 'Argentina' },
    ]
    return country
  }

  getCitiesArgentina = () => {
    let argentina = [
      { value: '', label: 'All Cities' },
      { value: 'cordoba', label: 'Córdoba' },
      { value: 'buenosAires', label: 'Buenos Aires CABA' },
      { value: 'santaFe', label: 'Santa Fe' },
      { value: 'mendoza', label: 'Mendoza' },
      { value: 'salta', label: 'Salta' },
      { value: 'tucuman', label: 'Tucuman' },
    ]
    return argentina
  }

  getCitiesUnitedState = () => {
    let unitedState = [
      { value: '', label: 'All Cities' },
      { value: 'arizona', label: 'Arizona' },
      { value: 'california', label: 'California' },
    ]
    return unitedState
  }
}

export default LocationsService
