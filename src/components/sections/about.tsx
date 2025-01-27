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
                    <div className="col-lg-6">
                        <SlideUp delay={3}>
                            <div className="about-image-part">
                                <Canvas camera={{ position: [-2, 1, 3], fov: 50 }} style={{ height: "500px",width:"600px", }}>
                                    <ambientLight intensity={0.5} />
                                    <directionalLight position={[10, 10, 5]} intensity={10} />
                                    <Model url="/models/personal_computer.glb"    />
                                    <OrbitControls enableZoom={false} />
                                </Canvas>
                               
                                <div className="dot-shape">
                                    <img src="/images/shape/about-dot.png" alt="Shape" />
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* / END ABOUT IMAGE DESIGN AREA */}
                    {/* START ABOUT TEXT DESIGN AREA */}
                    <div className="col-lg-6">
                        <div className="about-content-part rel z-2 rmb-55">
                            <SectionTitle className="mb-35">
                                <SectionTitle.Name className="text-pink-400">About Me</SectionTitle.Name>
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
