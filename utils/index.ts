export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'bf7f4ab01cmsh9129b4f4e9b4fb9p1a8098jsnefef0fda3d2f',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers })

    const result = await response.json()

    return result

}