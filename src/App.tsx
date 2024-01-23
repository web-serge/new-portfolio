import {Welcome} from './layout/sections/Welcome';
import {Sidebar} from './components/sidebar/Sidebar';
import {About} from './layout/sections/About';
import {Footer} from './layout/Footer';
import {Contacts} from './layout/sections/Contacts';
import {Projects} from './layout/sections/projects/Projects';
import {Skills} from './layout/sections/Skills';
import {useState} from 'react';

function App() {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const toggleMobileMenu = () => mobileMenu ? setMobileMenu(false) : setMobileMenu(true)

    return (
        <div className={ mobileMenu ? 'App hidden' : 'App'}>
            <Sidebar mobileMenu={mobileMenu} toggleMobileMenu={toggleMobileMenu}/>
            <Welcome/>
            <About/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;