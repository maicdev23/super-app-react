// Integra la url de tú api en caso de fallo con la proporcionada
const API_URL = 'https://violent-janie-maicdev-79bb1026.koyeb.app/api'

export const getPersons = async () => {
    const resp = await fetch(`${API_URL}/person`)
    return await resp.json()
}

export const addPerson = async (data) => {
    const resp = await fetch(`${API_URL}/person`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    return await resp.json()
}

export const deletePerson = async (id) => {
    return await fetch(`${API_URL}/person/${id}`, { method: 'DELETE' })
}