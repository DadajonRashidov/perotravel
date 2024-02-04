import "./index.scss"
import Marquee from "../../Assets/marquee";
import img1 from "../../Assets/imgs/mar.png"
import back from "../../Assets/imgs/background2.png"

function Home() {
    return (
        <div className="home-wrapper">
            <div className="marquee-content">
                <Marquee img={img1} />
            </div>
            <div className="content2">
                <div className="text-in-content">
                    <p>
                        <h1>О нас</h1>
                        <span>
                            PeroTravel - Первый онлайн-сервис по бронированию экскурсий без очередей и операторов. <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <br />
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;