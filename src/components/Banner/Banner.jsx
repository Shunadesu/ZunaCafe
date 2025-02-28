import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import checking from '../../assets/image/checking/checking.jpg'

import {thumbdata, thumbdata_2} from "../../ulities/data/thumb";
import { Link } from "react-router-dom";
const Banner = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };
  return (
    <div className="grid grid-cols-3 items-center gap-4">
        <div className="w-full h-full col-span-2">
            <div className="slider-container">
                <Slider {...settings}>
                        {
                            thumbdata.map(el => (
                                <div className="w-full max-h-[800px] h-full" key={el.id}>
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
                        <Slider {...settings}>
                                {
                                    thumbdata_2.map(el => (
                                        <div className="w-full h-full max-h-[600px]" key={el.id}>
                                            <img src={el.img} className="w-full h-full object-contain" />
                                        </div>
                                    ))
                                }
                        </Slider>
                    </div>
                </div>

                <div className="max-h-[150px] grid grid-cols-3 gap-4 h-full w-full">
                    <Link to={'/checking'} className="col-span-1 w-full h-full border">
                        <img src={checking} alt="checking" className="w-full h-full object-contain"/>
                    </Link>

                    <Link to={'/discount'} className="col-span-1 relative border">
                        <div className="absolute top-2.5 right-0 p-2 bg-red-200 rounded-tl-2xl rounded-bl-2xl">
                            Sunny discount
                        </div>
                        <img src={checking} alt="checking" className="w-full h-full object-contain"/>  
                    </Link>

                    <Link to={'/discount'} className="col-span-1 relative border">
                        <div className="absolute top-2.5 right-0 p-2 bg-red-200 rounded-tl-2xl rounded-bl-2xl">
                            Sunny discount
                        </div>
                        <img src={checking} alt="checking" className="w-full h-full object-contain"/>  
                    </Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Banner