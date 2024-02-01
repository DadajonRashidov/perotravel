import "./index.scss"
import { Link } from "react-router-dom";
import Logo from "../../Assets/imgs/Logo.png"

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
                </div>
            </div>
        </div>
    );
}

export default Home;