import { useState, useEffect } from 'react';

export const useFetch = <T> (url: string) => {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try { 
                setLoading(true);
                const response = await fetch(url);
                 if (!response.ok) throw new Error('Error en la red');

                 const result: T = await response.json();

                 setData(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

    