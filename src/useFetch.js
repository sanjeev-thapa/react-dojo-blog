import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(url)
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
            setError(error.message);
            setData(null);
            setIsPending(false);
        });
    }, [url])

    return {data, error, isPending};
}

export default useFetch;
