import { useContext } from "react"
import "./App.css"
import { TimelineApiContext } from "./context/timeline-api-context"
import { Route, Routes } from "react-router"
import Homepage from "./pages/homepage/homepage"
import Loading from "./pages/loading/loading"

function App() {
  const { loading } = useContext(TimelineApiContext)

  return (
    <div className="App">
      <Routes>
        {loading ? (
          <Route path="/" element={<Loading />} />
        ) : (
          <Route path="/" element={<Homepage />} />
        )}
      </Routes>
    </div>
  )
}

export default App
