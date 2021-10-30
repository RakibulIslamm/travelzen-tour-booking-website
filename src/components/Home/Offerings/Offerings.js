import useFetchData from '../../../hooks/useFetchData';
import Offering from './Offering/Offering';

const Offerings = () => {

    const { packages, loading } = useFetchData();

    return (
        <div className="px-20 xs:px-5 sm:px-8 py-6">
            <h1 className="text-4xl font-medium text-center">Great Deals</h1>
            {
                !loading ? <div className="mt-10 grid grid-cols-3 gap-8 sm:grid-cols-2 md:grid-cols-2 xs:grid-cols-1">
                    {
                        packages.map(pckg => <Offering key={pckg._id} package={pckg}></Offering>)
                    }
                </div> :
                    <p className="text-center py-10 text-2xl font-medium">Loading...</p>
            }

        </div>
    );
};

export default Offerings;