import {Welcome} from './layout/sections/Welcome';
import {Sidebar} from './components/sidebar/Sidebar';

function App() {
    return (
        <div className='App'>
            <Sidebar />
            <Welcome />
        </div>
    );
}

export default App;