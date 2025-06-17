import { useCallback, useState } from "react"
import Banner from "./components/Banner.jsx"
import "./App.css"
import ErrorBoundary from "./components/ErrorBoundary.jsx"
import navValues from "./navigation/navValues.js"
import navigationContext from "./navigation/navigationContext.js"
import ComponentPicker from "./components/ComponentPicker.jsx"

function App() {
  const navigate = useCallback(
    (navTo, param) => setNav({ current: navTo, param, navigate }),
    []
  );
  const [nav, setNav] = useState({ current: navValues.home, navigate });

  return (
    <navigationContext.Provider value={nav}>
      <ErrorBoundary fallback="Something went wrong, please try again.">
        <Banner>
          <div>Providing houses all over the world</div>
        </Banner>
      </ErrorBoundary>
      <ComponentPicker currentNavLocation={nav.current}/>
    </navigationContext.Provider>
  )
}

export default App