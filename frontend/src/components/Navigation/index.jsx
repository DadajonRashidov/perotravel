import "./index.scss"
import { Link } from "react-router-dom";
import Logo from "../../Assets/imgs/Logo.png";
import Wk from "../../Assets/imgs/icons/wk.png" 
import Facebook from "../../Assets/imgs/icons/facebook.png" 
import Inst from "../../Assets/imgs/icons/inst.png" 


function Home() {
    return (
        <div className="Navigation-wrapper">
            <header>
                <nav>
                    <div className="logo"><img src={Logo} alt="" width={"50px"} /></div>
                    <nav className="links">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/excurs"}>Excursions</Link >
                        <Link to={"/account"}>Account</Link>
                 </nav>
                </nav>
            </header>
            <div className="header-content">
                <span className="textn1">ПУТЕШЕСТВУЙ</span>
                <span className="textn2">вместе с</span>
                <span className="textn3">PERO TRAVEL</span>
                <div className="content-button">
                    <button>
                        К экскурсиям →
                    </button>
                    <div className="imgs">
                        <img src={Wk} alt="" width={"32px"}/>
                        <img src={Inst} alt="" width={"32px"}/>
                        <img src={Facebook} alt="" width={"32px"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;