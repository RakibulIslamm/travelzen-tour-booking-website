import { useEffect, useState } from "react";


const useFetchData = () => {
    const [loading, setLoading] = useState(true);
    const [packages, setPackages] = useState([]);
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('https://vast-tor-48150.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data);
                setLoading(false);
            })
            .catch(error => console.log(error))
    }, []);


    useEffect(() => {
        fetch('https://vast-tor-48150.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => {
                setDestinations(data);
                setLoading(false);
            })
            .catch(error => console.log(error))
    }, []);


    return {
        packages, setPackages,
        loading,
        destinations, setDestinations
    }

}


export default useFetchData;

