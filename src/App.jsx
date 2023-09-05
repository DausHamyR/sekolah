import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
// import PrivateRoute from "./components/PrivateRoute";
import {PersistGate} from 'redux-persist/integration/react'

const App = ()=> {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App