import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
        .then((response) => {
            if(!response.ok){
                throw Error('An Error Occurred');
            }
            return response.json();
        })
        .then((data) => {
            setData(data);
            setError(null);
            setIsPending(false);
        })
        .catch((error) => {
            if(error.name !== 'AbortError'){
                setError(error.message);
                setData(null);
                setIsPending(false);
            }
        });

        return () => { abortController.abort(); }
    }, [url])

    return {data, error, isPending};
}

export default useFetch;
