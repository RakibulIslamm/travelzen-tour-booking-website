import { useEffect, useState } from "react";


const useFetchData = () => {
    const [loading, setLoading] = useState(true);
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://vast-tor-48150.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data);
                setLoading(false);
            })
            .catch(error => console.log(error))
    }, []);


    return {
        packages, setPackages, loading
    }

}


export default useFetchData;

