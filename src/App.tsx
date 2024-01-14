import {Welcome} from './layout/sections/Welcome';
import {Sidebar} from './components/sidebar/Sidebar';
import {About} from './layout/sections/About';
import {Footer} from './layout/Footer';
import {Contacts} from './layout/sections/Contacts';
import {Projects} from './layout/sections/projects/Projects';

function App() {
    return (
        <div className='App'>
            <Sidebar/>
            <Welcome/>
            <About/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;