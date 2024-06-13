import { useDarkMode } from "../../DarkModeContext";
import "./DarkMode.scss"

const DarkMode = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();


    return(
        <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
        </label>
    )
}

export default DarkMode;