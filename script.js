const songUrl = 'https://fsa-async-await.herokuapp.com'

const fetchAllSongs = async () => {
    try {
        const response = await fetch(`${songUrl}/api/guided-practice/songs`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

const init = async () => {
    const songs = fetchAllSongs()
    console.log(songs)
}

init()