import Footer from "./Footer";
import Navbar1 from "./Navbar"
import UrlShortener from "./Urlshortern"
import { useSelector } from "react-redux"
import LoginRequiredMessage from "./loginRequire";
import Info from "./Homecomponents/info";
import PlansPricing from "./Homecomponents/planCards";
import "./home.css"


const Home = () => {
  const loginReducer = useSelector(state => state.loginReducer);

  return (
    <div className="home">

      <Navbar1 />
      <div className="container content">
        {loginReducer.isLoggedIn ? <UrlShortener /> : <LoginRequiredMessage />}
        <Info />
        <PlansPricing />


      </div>

      <Footer />
    </div>
  )
}

export default Home