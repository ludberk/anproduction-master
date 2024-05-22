import axios from 'axios'

const Http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const getUserApi = async () => {
    try {
        const response = await Http.get('users')
        if (response) {
            return response.data
        } else {
            return []
        }
    } catch (err) {
        console.error('Error fetching user data:', err.message)
        throw err
    }
}

export const createGalleryImage = async (data) => {
    try {
        const response = await Http.post({
            data: data,
        })
        if (response) {
            return response.data
        } else {
            return []
        }
    } catch (err) {
        console.error('Error fetching user data:', err.message)
        throw err
    }
}
