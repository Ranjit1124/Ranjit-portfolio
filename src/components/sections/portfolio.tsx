import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@components/ui/sectionTitle"
import { useEffect, useState } from "react";
import { portfolioData } from "@utils/fackData/portfolioData";
import SlideUp from "@utils/animations/slideUp";

const animations = [
    { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }, // Fade
    { initial: { x: -50, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: 50, opacity: 0 } }, // Slide
    { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.9, opacity: 0 } }, // Scale
];

const Portfolio = () => {
    const [data, setData] = useState(portfolioData)
    const [filterData, setfilterData] = useState(portfolioData)
    const [activeTab, setActiveTab] = useState('show all');
    const [animation, setAnimation] = useState(animations[0]);

    const categories: string[] = ["show all"]

    data.forEach(({ category }) => {
        if (!categories.includes(category.toLocaleLowerCase())) {
            categories.push(category.toLocaleLowerCase())
        }
    })

    const handleTabSelect = (el: any) => {
        setActiveTab(el)
        setAnimation(animations[Math.floor(Math.random() * animations.length)]);

        if (el === "show all") {
            setfilterData(data)
        }
        else {
            const x = data.filter(({ category }) => category.toLocaleLowerCase() === el)
            setfilterData(x)
        }
    }

    useEffect(() => {
        setData(portfolioData)
    }, [])


    return (
        <section id="portfolio" className="projects-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <SectionTitle className="text-center mb-60">
                            <SectionTitle.Name>Latest Works</SectionTitle.Name>
                            <SectionTitle.Title>View My Latest <span>Works</span></SectionTitle.Title>
                        </SectionTitle>
                    </div>
                </div>
                <ul className="project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-2s">
                    {categories.map((el, index) => <li key={index} onClick={() => handleTabSelect(el)} className={`${activeTab === el ? "current" : ""} text-capitalize`}>{el}</li>)}
                </ul>
                <div className="row project-masonry-active">
                    <AnimatePresence mode="wait">
                        {filterData.map((tab) => (
                            <motion.div
                                key={tab.id}
                                {...animation}
                                transition={{ duration: 0.4 }}
                                className="col-lg-4 col-md-6 item"
                            >
                                <Card category={tab.category} title={tab.title} img={tab.img} id={tab.id} link={tab.link} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>

    )
}

export default Portfolio

type CardPropsType = {
    title: string,
    img: string,
    category: string,
    id: number,
    link:string
}
const Card = ({ img, title, category, id,link }: CardPropsType) => {
    return (
        <SlideUp delay={id}>
            <div className="project-item style-two wow fadeInUp delay-0-2s">
                <div className="project-image">
                    <img src={img} alt="Project" width="55px" height="200px" />
                    <a   href={link} 
                        className="details-btn" 
                        target="_blank" 
                        rel="noopener noreferrer"><i className="far fa-arrow-right" /></a>
                </div>
                <div className="project-content">
                    <span className="sub-title">{category}</span>
                    <h3><a href="#">{title}</a></h3>
                </div>
            </div>
        </SlideUp>
    )
}


