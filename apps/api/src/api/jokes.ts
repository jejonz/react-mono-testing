import axios from 'axios';

const getJoke = async (abortController: AbortController) => {
  
    try {
        const { data } = await axios.get('https://official-joke-api.appspot.com/random_joke', {
            signal: abortController.signal,
            headers: {
            Accept: 'application/json',
            },
        });
        return data;
    } catch (error) {
        const err = error as Error;
        if (err.name !== 'CanceledError') {
            throw err;
        }
    }
};

export default getJoke;