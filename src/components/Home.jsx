import Attract from './Attract';
import Banner from './Banner';
import Estates from './Estates';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br className='mt-[30px]'></br>
            <Attract></Attract>
            <Estates></Estates>
        </div>
    );
};

export default Home;