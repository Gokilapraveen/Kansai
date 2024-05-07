import BannerComponent from './Banner/Banner';
import FilterDataCardComponent from './FilterCard/FilterDataCard';
import Filter from './FilterCard/FilterData';

const Home = () => {
    return (
        <>
            <BannerComponent />
            <Filter/>
            <FilterDataCardComponent />
        </>
    );
}

export default Home;