import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
// import PrivateRoute from "./components/PrivateRoute";
import {PersistGate} from 'redux-persist/integration/react'

import PAdminKategori from "./pages/Panel_Admin/PAdminKategori";
import PAdminHalaman from "./pages/Panel_Admin/PAdminHalaman";
import PAdminAcara from "./pages/Panel_Admin/PAdminAcara";
import PAdminTambahAcara from "./pages/Panel_Admin/PAdminTambahAcara";
import PAdminArticle from "./pages/Panel_Admin/PAdminArticle";
import PAdminTambahArticle from "./pages/Panel_Admin/PAdminTambahArticle";
import PAdminAlbum from "./pages/Panel_Admin/PAdminAlbum";
import PAdminGaleri from "./pages/Panel_Admin/PAdminGaleri";
import PAdminVidio from "./pages/Panel_Admin/PAdminVidio";
import PAdminSlider from "./pages/Panel_Admin/PAdminSlider";
import PAdminMenu from "./pages/Panel_Admin/PAdminMenu";
import PAdminOurservice from "./pages/Panel_Admin/PAdminOurservice";
import PAdminSetting from "./pages/Panel_Admin/PAdminSetting";

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