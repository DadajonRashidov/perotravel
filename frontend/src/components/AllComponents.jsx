import { useLocation, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Navigation from "./Navigation"
import Account from "./Account"
import Excurs from "./Excurs"
function AllComponents(props) {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Navigation />} >
                <Route path="home" index element={<Home />} />
                <Route path='Excurs' element={<Excurs />} />
                <Route path='Account' element={<Account />} />
            </Route>
        </Routes >
    );
}

export default AllComponents;