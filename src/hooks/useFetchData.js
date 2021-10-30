import { useEffect, useState } from "react";


const useFetchData = () => {
    const [loading, setLoading] = useState(true);
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://vast-tor-48150.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
            .catch(error => console.log(error))
        setLoading(false);
    }, []);


    return {
        packages, setPackages, loading
    }

}


export default useFetchData;

