import SectionTitle from "@components/ui/sectionTitle";
import SlideUp from "@utils/animations/slideUp";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Model Loader Component
const Model = ({ url }: { url: string }) => {
    const { scene } = useGLTF(url);
    
    return <primitive object={scene} scale={[1.5,1.5,1.5]} position={[0,0,0]}/>;
};
const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row gap-100 align-items-center">
                    {/* START ABOUT IMAGE DESIGN AREA */}
                    
                    {/* / END ABOUT IMAGE DESIGN AREA */}
                    {/* START ABOUT TEXT DESIGN AREA */}
                    <div className="col-xl-12">
                        <div className="about-content-part rel z-2 rmb-55">
                            <SectionTitle >
                                <SectionTitle.Name className="text-center">About Me</SectionTitle.Name>
                                <SectionTitle.Title>
                                    A passionate <span>web designer</span> turning <span>ideas</span> into visually
                                    stunning, user-friendly websites.
                                </SectionTitle.Title>
                                <SectionTitle.Description>
                                    Hello! I’m Ranjit, a self-taught Digital Designer &amp; Developer with a year of
                                    work experience.
                                </SectionTitle.Description>
                            </SectionTitle>
                            <SlideUp delay={2}>
                                <ul className="list-style-one two-column">
                                    <li>Logo Design</li>
                                    <li>Social Marketing</li>
                                    <li>3D Development</li>
                                    <li>Website Development</li>
                                    <li>Web Design</li>
                                    <li className="mb-3">Product Design</li>
                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/* / END ABOUT TEXT DESIGN AREA */}
                </div>
            </div>
        </section>
    );
};

export default About;
