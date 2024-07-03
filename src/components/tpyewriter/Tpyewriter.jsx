
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const Tpyewriter = () => {
    const [text] = useTypewriter({
        words: ['Jr. Frontend Web Developer _', 'Jr. React Developer _'],
        loop: {},
        typeSpeed: 100,
        delaySpeed: 3000,
        deleteSpeed: 100
    })
    return (
        <div>
            <h5 className=" md:text-2xl font-mont font-medium text-[#F0F0F0] tracking-widest">Hi I'm a 
                 <span className='ml-3 font-mont'>{text}</span>
                <span><Cursor /></span>
            </h5>
        </div>
    );
};

export default Tpyewriter;