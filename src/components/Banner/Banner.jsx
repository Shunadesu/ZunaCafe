import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import thumbdata from "../../ulities/data/thumb/thumbdata";
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
    <div className="grid grid-cols-3 justify-center gap-4">
        <div className="col-span-2 items-center">
            <div className="slider-container">
                <Slider {...settings}>
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

        <div className="w-full col-span-1 overflow-hidden">
            <div className="flex flex-col gap-2 justify-center">
                <div className="h-fit">
                    <div className="slider-container">
                        <Slider {...settings}>
                                {
                                    thumbdata.map(el => (
                                        <div className="w-full max-h-[350px] h-full overflow-hidden" key={el.id}>
                                            <img src={el.img} className="w-full h-full object-contain" />
                                        </div>
                                    ))
                                }
                        </Slider>
                    </div>
                </div>
                <div className="h-fit">
                    <div className="slider-container">
                        <Slider {...settings}>
                                {
                                    thumbdata.map(el => (
                                        <div className="w-full max-h-[350px] h-full overflow-hidden" key={el.id}>
                                            <img src={el.img} className="w-full h-full object-contain" />
                                        </div>
                                    ))
                                }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Banner