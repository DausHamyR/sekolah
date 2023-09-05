import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
// import PrivateRoute from "./components/PrivateRoute";
import {PersistGate} from 'redux-persist/integration/react'

import PAdminKategori from "./pages/PAdminKategori";
import PAdminHalaman from "./pages/PAdminHalaman";
import PAdminAcara from "./pages/PAdminAcara";
import PAdminTambahAcara from "./pages/PAdminTambahAcara";
import PAdminArticle from "./pages/PAdminArticle";
import PAdminTambahArticle from "./pages/PAdminTambahArticle";
import PAdminAlbum from "./pages/PAdminAlbum";
import PAdminGaleri from "./pages/PAdminGaleri";
import PAdminVidio from "./pages/PAdminVidio";
import PAdminSlider from "./pages/PAdminSlider";
import PAdminMenu from "./pages/PAdminMenu";
import PAdminOurservice from "./pages/PAdminOurservice";
import PAdminSetting from "./pages/PAdminSetting";

const App = ()=> {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/paneladmin/kategori" element={<PAdminKategori />} />
                        <Route path="/paneladmin/halaman" element={<PAdminHalaman />} />
                        <Route path="/paneladmin/acara" element={<PAdminAcara />} />
                        <Route path="/paneladmin/tambahAcara" element={<PAdminTambahAcara />} />
                        <Route path="/paneladmin/article" element={<PAdminArticle />} />
                        <Route path="/paneladmin/tambahArticle" element={<PAdminTambahArticle />} />
                        <Route path="/paneladmin/album" element={<PAdminAlbum />} />
                        <Route path="/paneladmin/galeri" element={<PAdminGaleri />} />
                        <Route path="/paneladmin/vidio" element={<PAdminVidio />} />
                        <Route path="/paneladmin/slider" element={<PAdminSlider />} />
                        <Route path="/paneladmin/menu" element={<PAdminMenu />} />
                        <Route path="/paneladmin/ourservice" element={<PAdminOurservice />} />
                        <Route path="/paneladmin/setting" element={<PAdminSetting />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App