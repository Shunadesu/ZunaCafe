import { store } from "./store/redux"
import { ZunaCafe } from "./components"
import { Provider } from 'react-redux'
// import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <div className="min-h-screen flex flex-col items-center px-8">
      <Provider store={store}>
        {/* <BrowserRouter> */}
          <ZunaCafe />
        {/* </BrowserRouter> */}
      </Provider>
    </div>
  )
}

export default App
