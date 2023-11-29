import Slider from "react-slick";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { SliderSettings } from "./type/sliderSettings";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function App() {
    const settings: SliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="overflow-hidden">
            <Header />
            <Slider
                {...settings}
                className="container mx-auto flex items-center justify-between gap-8 px-5"
            >
                <Dashboard title="Entradas" value="R$ 17.400,00" />
                <Dashboard title="Saidas" value="R$ 1.259,00" />
                <Dashboard title="Total" value="R$ 16.141,00" />
            </Slider>
        </div>
    );
}

export default App;
