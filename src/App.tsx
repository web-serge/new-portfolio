import {Welcome} from './layout/sections/Welcome';
import {Sidebar} from './components/sidebar/Sidebar';
import {About} from './layout/sections/About';
import {Footer} from './layout/Footer';
import {Contacts} from './layout/sections/Contacts';
import {Projects} from './layout/sections/projects/Projects';
import {Skills} from './layout/sections/Skills';

function App() {
    return (
        <div className='App'>
            <Sidebar/>
            <Welcome/>
            <About/>
            <Skills />
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;