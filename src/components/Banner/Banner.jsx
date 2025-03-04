import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import checking from '../../assets/image/checking/checking.jpg'

import {thumbdata, thumbdata_2} from "../../ulities/data/thumb";
import { Link } from "react-router-dom";
// import ShibaCanvas from "../canvas/Shiba";
import ChocoCanvas from "../canvas/Choco";
const Banner = () => {
    const settings = {
        autoplay: true,         // Enables auto sliding
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplaySpeed: 5000,    // Slide every 3 seconds (adjust as needed)
        pauseOnHover: true,
        arrows: false
    };
  return (
    <div className="grid grid-cols-3 items-center gap-4 h-full w-full ">
        <div className="w-full h-full col-span-2">
            <div className="slider-container">
                <Slider {...settings}  style={{ cursor: "grab" }}>
                        {
                            thumbdata.map(el => (
                                <div className="w-full max-h-[720px] h-full overflow-hidden" key={el.id}>
                                    <img src={el.img} className="w-full h-full object-contain" />
                                </div>
                            ))
                        }
                </Slider>
            </div>
        </div>

        <div className="w-full h-full col-span-1">
            <div className="flex flex-col gap-3">
                <div className="h-full">
                    <div className="slider-container">
                        <Slider {...settings}  style={{ cursor: "grab" }}>
                                {
                                    thumbdata_2.map(el => (
                                        <div className="w-full max-h-[515px] h-full overflow-hidden" key={el.id}>
                                            <img src={el.img} className="w-full h-full object-cover" />
                                        </div>
                                    ))
                                }
                        </Slider>
                    </div>
                </div>

                <div className="h-full grid grid-cols-3 gap-4 w-full">
                    <Link to={'/checking'} className="col-span-1 border rounded-lg overflow-hidden">
                        <img src={checking} alt="checking" className="w-full h-full object-cover"/>
                    </Link>

                    <div className="col-span-2 w-full h-full bg-[#f5bfa8] rounded-lg">
                        <ChocoCanvas />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Banner