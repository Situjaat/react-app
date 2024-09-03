
import './App.css';
import Navbar from "./components/layout/navbar/Navbar";
import Sidebar from './components/layout/sidebar/Sidebar';
import Main from './components/layout/main/main';
import Footer from './components/layout/footer/Footer';


function App() {
  return(
    <div className="App">
   <Navbar/>
<Sidebar/>
<Main/>
<Footer/>
    </div>
  )
}

export default App;
