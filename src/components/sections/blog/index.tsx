import SectionTitle from "@components/ui/sectionTitle"
import SlideUp from "@utils/animations/slideUp"
import { blogData } from "@utils/fackData/blogData"
import { Link } from "react-router-dom"

const Blog = () => {
    return (
        <section id="blog" className="blog-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <SectionTitle className="text-center mb-60">
                            <SectionTitle.Name>My Blog</SectionTitle.Name>
                            <SectionTitle.Title>Latest <span>Blogs</span> In my Mind</SectionTitle.Title>
                        </SectionTitle>
                    </div>
                </div>
                <div className="row">
                    {
                        blogData.map(({ date, description, id, img, title }) =>
                            <Card key={id} id={id} date={date} description={description} img={img} title={title} />
                        )
                    }
                </div>
            </div>
        </section>

    )
}

export default Blog

type CardPropsType = {
    id: number
    title: string,
    description: string,
    date: string,
    img: string
}

const Card = ({ title, description, date, img, id }: CardPropsType) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="blog-item">
                    <div className="image">
                        <img src={img} alt="Blog" />
                    </div>
                    <div className="content">
                        <h5>
                            <Link to="/blog-single">{title}</Link>
                        </h5>
                        <p>{description}</p>
                        <hr />
                        <div className="blog-meta mt-15">
                            <a className="date" href="#"><i className="far fa-calendar-alt" /> {date}</a>
                        </div>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}