import { useEffect, useState } from "react";



const useFetchData = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://vast-tor-48150.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);

    return {
        packages, setPackages,
    }

}


export default useFetchData;

