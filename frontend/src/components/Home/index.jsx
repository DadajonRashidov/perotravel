import "./index.scss"
import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <h1>Home Page</h1>
            <Link to={"/excurs" }>Excursions</Link >
        </>
    );
}

export default Home;