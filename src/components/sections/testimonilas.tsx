import SectionTitle from "@components/ui/sectionTitle"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { testimonilasData } from "@utils/fackData/testimonilasData";
import { Autoplay, Navigation } from "swiper/modules";

const Testimonilas = () => {
    return (
        <section className="testimonials-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <SectionTitle className="text-center mb-60">
                            <SectionTitle.Name>Testimonilas</SectionTitle.Name>
                            <SectionTitle.Title>What <span>Amazing</span> peoples Says About me</SectionTitle.Title>
                        </SectionTitle>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="testimonials-wrap">
                            <Swiper
                                navigation={{
                                    nextEl: ".testimonial-next",
                                    prevEl: ".testimonial-prev"
                                }}
                                loop
                                autoplay={{
                                    delay:1500,
                                }}
                                speed={4000}
                                breakpoints={{
                                    768:{
                                        slidesPerView:2
                                    }
                                }}
                                modules={[Navigation, Autoplay]}
                            >
                                {
                                    testimonilasData.map(({ id, img, name, position, review }) =>
                                        <SwiperSlide key={id}><Card img={img} name={name} position={position} review={review} /> </SwiperSlide>
                                    )
                                }
                            </Swiper>
                        </div>
                        <div className="slider-arrows wow fadeInUp delay-0-6s text-center pt-40">
                            <button className="testimonial-prev">
                                <i className="fal fa-arrow-left" />
                            </button>
                            <button className="testimonial-next">
                                <i className="fal fa-arrow-right" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Testimonilas


type CardPropsType = {
    img: string,
    name: string,
    review: string,
    position: string
}
const Card = ({ img, review, name, position }: CardPropsType) => {
    return (
        <div className="testimonial-item wow fadeInUp delay-0-3s">
            <div className="author">
                <img src={img} alt="Author" />
            </div>
            <div className="text">{review}</div>
            <div className="testi-des">
                <h5>{name}</h5>
                <span>{position}</span>
            </div>
        </div>

    )
}