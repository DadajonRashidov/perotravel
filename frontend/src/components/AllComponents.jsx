import { useLocation, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Excurs from "./Excurs"
function AllComponents(props) {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} >
                <Route path='Excurs' element={<Excurs />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;