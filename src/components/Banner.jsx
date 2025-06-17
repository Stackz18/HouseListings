import { useContext } from "react";
import logo from "../assets/GloboLogo.png"
import navValues from "../navigation/navValues";
import {logo as logoClass} from "./Banner.module.css"
import navigationContext from "../navigation/navigationContext";


const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral",
};

const Banner = ({children}) => {
    const { navigate } = useContext(navigationContext);
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img onClick={() => navigate(navValues.home) } src={logo} className={logoClass} alt="logo" />
            </div>
            <div className="col-7" style={subtitleStyle}>{children}</div>
        </header>
    );
}

export default Banner;