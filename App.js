import logo from './logo.svg';
import Header from './components/Header';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import Navbar from './components/NavBar';
import DashboardHeader from './components/DashboardHeader';
import StatsCard from './components/StatsCard';
import DashboardContent from './components/DashboardContent';
import OrdersCard from './components/OrdersCard';
import RecentMovementCard from './components/RecentMovementCard';
import BrowserUsageCard from './components/BrowserUsageCard';
import RealTimeMapCard from './components/RealTimeMapCard';
import LatestProjectsTable from './components/LatestProjectsTable';
import Gallery from './components/Gallery';
import Review from './components/Review';
import Blog from './components/Blog';
import About from './components/About';
import WhyUs from './components/Why';
import Events from './components/Events';
import BookATable from './components/BookATable';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}
      
      <Navbar />
      <Header />
      <Sidebar />
      <DashboardHeader/>
      <StatsCard />
      <DashboardContent />
      <Banner />
      <OrdersCard/>
      <RecentMovementCard/>
      <BrowserUsageCard/>
      <RealTimeMapCard/>
      <LatestProjectsTable/>
      <Menu />
      <Gallery/>
      <Review/>
      <Blog/>
      <About/>
      <WhyUs/>
      <Events/>
      <BookATable/>
      <Footer/>
      
      
  
    </div>
  );
}

export default App;
