import About from '@components/sections/about'
// import Blog from '@components/sections/blog'
// import Clients from '@components/sections/clients'
import Contact from '@components/sections/contact'
import Hero from '@components/sections/hero'
import Portfolio from '@components/sections/portfolio'
// import Pricing from '@components/sections/pricing'
import Resume from '@components/sections/resume'
import Services from '@components/sections/services'
import Skills from '@components/sections/skills'
// import Testimonilas from '@components/sections/testimonilas'
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <main>
             <Helmet>
        <title>Ranjit Raja | Full Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio of Ranjit Raja — Full Stack Developer skilled in Vue.js, Node.js, and Three.js. View projects, experience, and contact info." />
        <meta name="keywords" content="Ranjit Raja, Full Stack Developer, Vue.js, Node.js, Three.js, JavaScript, Portfolio" />
        <meta property="og:title" content="Ranjit Raja | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Explore my projects, skills, and experience as a Full Stack Developer." />
        <meta property="og:image" content="https://yourdomain.com/preview-image.jpg" />
        <meta property="og:url" content="https://ranjitportfolio.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google-site-verification" content="Qq3QaJ3H43aYrQFVxM7QP29VXrQ2eaBq-9Vv5XLcvGA" />
      </Helmet>
            <Hero />
            <About />
            <Resume />
            <Services />
            <Skills />
            <Portfolio />
            {/* <Testimonilas /> */}
            {/* <Pricing /> */}
            {/* <Blog /> */}
            {/* <Clients /> */}
            <Contact />
        </main>
    )
}

export default Home