const username = 'coalition'
const password = 'skills-test'
const url = 'https://fedskillstest.coalitiontechnologies.workers.dev'

export const fetchPatientsData = async () => {
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': 'Basic ' + btoa(`${username}:${password}`),
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        return data


    } catch (error) {
        console.error('Fetch error: ', error)
        throw error
    }

}