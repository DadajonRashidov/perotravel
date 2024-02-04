import "./index.scss"

function Marquee(props) {
    return (
        <div className="content-marquee" style={{ width: "100%" }}>
            <marquee behavior="scroll" direction="left">
                <img src={props.img} alt="" style={{ marginRight: "20px", }} />
                <img src={props.img} alt="" style={{ marginRight: "20px", }} />
                <img src={props.img} alt="" style={{ marginRight: "20px", }} />
            </marquee>
        </div>

    );
}

export default Marquee;