import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import './Home.css';
const Home = () => {
    return (
        <div className="bg">
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;