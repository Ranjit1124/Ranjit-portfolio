import SectionTitle from "@components/ui/sectionTitle"
import SlideUp from "@utils/animations/slideUp"
import { resumeData } from "@utils/fackData/resumeData"
const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <SectionTitle className="mb-60 text-center">
                                    <SectionTitle.Name>My Resume</SectionTitle.Name>
                                    <SectionTitle.Title>Showcase Your <span>Talent</span> amplifing your impact</SectionTitle.Title>
                                </SectionTitle>
                            </div>
                        </div>
                        <div className="resume-items-wrap">
                            <div className="row justify-content-between">
                                {
                                    resumeData.map(({ companyName, id, title, years }) =>
                                        <Card key={id} companyName={companyName} title={title} years={years} id={id} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Resume

type CardPropsType = {
    title: string,
    companyName: string,
    years: string,
    id:number
}
const Card = ({ title, companyName, years, id }: CardPropsType) => {
    return (
        <div className="col-xl-5 col-md-6">
            <SlideUp delay={id}>
                <div className="resume-item">
                    <div className="icon">
                        <i className="far fa-arrow-right"   />
                    </div>
                    <div className="content">
                        <span className="years">{years}</span>
                        <h4>{title}</h4>
                        <span className="company">{companyName}</span>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}