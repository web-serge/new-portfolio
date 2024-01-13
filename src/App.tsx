import {Welcome} from './layout/sections/Welcome';
import {Sidebar} from './components/sidebar/Sidebar';
import {About} from './layout/sections/About';
import {Footer} from './layout/Footer';
import {Contacts} from './layout/sections/Contacts';

function App() {
    return (
        <div className='App'>
            <Sidebar />
            <Welcome />
            <About />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;