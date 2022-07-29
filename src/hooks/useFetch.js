import { useState,useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(url);
    const [loading, setLoading] = useState(true);

    

    const getData = async () => {
        const res = await fetch(url);
        const dataJson = await res.json();
        setData(dataJson);
        setLoading(false);
    }
    useEffect(() => {
        getData();
        setLoading(true)
    }, [url]);

    return{
        data,
        setData,
        loading
    }
}