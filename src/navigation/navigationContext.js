import { createContext } from "react";
import navValues from "./navValues.js";

const navigationContext = createContext(navValues.home);

export default navigationContext;