import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Section from './project/Section';
import Industries from './project/Industries';
import About from './project/About';
import Working from './project/working';
import ProductsSection from './project/Product';
import Setting from './project/Setting';
import Card from './project/Card';
import Footer from './project/Footer';
import Mark from './project/markque';

function App() {
  return (
    <div className="App">
     <Header/>
     <Section/>
     <Industries/>
     <Mark/>
     <About/>
     <Working/>
     <ProductsSection/>
     <Setting/>
     <Card/>
     <Footer/>
    </div>
  );
}

export default App;
