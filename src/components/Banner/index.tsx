import './banner.css';

const Banner = () => {
    return (
        <header className="header">
            <img src={`${process.env.PUBLIC_URL}/images/banner.png`} alt="Organo logo" />
        </header>
    );
};

export default Banner;
