import React from 'react'
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {AiFillSetting} from 'react-icons/ai'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {BsCheckLg} from 'react-icons/bs'

function PAdminSetting() {
    const [umum, setUmum] = React.useState(false)
    const [linkSosmed, setLinkSosmed] = React.useState(false)
    const [email, setEmail] = React.useState(false)
    const [maps, setMaps] = React.useState(false)
    const [statistik, setStatistik] = React.useState(false)
    const [wa, setWa] = React.useState(false)

    const buttonUmum = () => {
        setUmum(true);
        setLinkSosmed(false);
        setEmail(false);
        setMaps(false);
        setStatistik(false);
        setWa(false);
    };
    const buttonLinkSosmed = () => {
        setLinkSosmed(true);
        setUmum(false);
        setEmail(false);
        setMaps(false);
        setStatistik(false);
        setWa(false);
    };
    const buttonEmail = () => {
        setEmail(true);
        setLinkSosmed(false);
        setUmum(false);
        setMaps(false);
        setStatistik(false);
        setWa(false);
    };
    const buttonMaps = () => {
        setMaps(true);
        setLinkSosmed(false);
        setEmail(false);
        setUmum(false);
        setStatistik(false);
        setWa(false);
    };
    const buttonStatistik = () => {
        setStatistik(true);
        setLinkSosmed(false);
        setEmail(false);
        setMaps(false);
        setUmum(false);
        setWa(false);
    };
    const buttonWa = () => {
        setWa(true);
        setLinkSosmed(false);
        setEmail(false);
        setMaps(false);
        setStatistik(false);
        setUmum(false);
    };

    return (
        <div className='bg-slate-200 flex'>
            <Dashboard />
            <div className='w-full'>
                <Navbar />
                <div className='flex m-6 gap-8'>
                    <div className='bg-white w-[750px] p-4'>
                        <div className='flex gap-1'>
                            <AiFillSetting size={25}/>
                            <div className='font-medium text-xl'>Pengaturan Aplikasi</div>
                        </div>
                        <div className='flex m-8 font-semibold justify-between'>
                            <button onClick={()=> buttonUmum()}>Umum</button>
                            <button onClick={()=> buttonLinkSosmed()}>Link Sosmed</button>
                            <button onClick={()=> buttonEmail()}>Email Notif</button>
                            <button onClick={()=> buttonMaps()}>Maps</button>
                            <button onClick={()=> buttonStatistik()}>Statistik</button>
                            <button onClick={()=> buttonWa()}>WA</button>
                        </div>
                        {umum && (
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Nama Aplikasi</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Deskripsi</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>No Hp</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Email</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Alamat</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Logo</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Lebar Logo *px</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Tinggi Logo *px</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Icon</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div className='flex bg-[#3bc0c3] w-[200px] justify-center py-2 text-white font-medium'>
                                    <BsCheckLg size={25}/>
                                    <div>Simpan Pengaturan</div>
                                </div>
                            </div>
                        )}
                        {linkSosmed && (
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Facebook</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Instagram</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Youtube</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Twitter</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div className='flex bg-[#3bc0c3] w-[200px] justify-center py-2 text-white font-medium'>
                                    <BsCheckLg size={25}/>
                                    <div>Simpan Pengaturan</div>
                                </div>
                            </div>
                        )}
                        {email && (
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Atas Nama Email</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Alamat Email</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Protocol</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>SMTP Host</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>SMTP User</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>SMTP Pass</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>SMTP Port</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div className='flex bg-[#3bc0c3] w-[200px] justify-center py-2 text-white font-medium'>
                                    <BsCheckLg size={25}/>
                                    <div>Simpan Pengaturan</div>
                                </div>
                            </div>
                        )}
                        {maps && (
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Link Gmaps</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div className='flex bg-[#3bc0c3] w-[200px] justify-center py-2 text-white font-medium'>
                                    <BsCheckLg size={25}/>
                                    <div>Simpan Pengaturan</div>
                                </div>
                            </div>
                        )}
                        {statistik && (
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Jumlah Staff & Guru</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Jumlah Siswa</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Jumlah Kejuaraan</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Jumlah Kelas</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div className='flex bg-[#3bc0c3] w-[200px] justify-center py-2 text-white font-medium'>
                                    <BsCheckLg size={25}/>
                                    <div>Simpan Pengaturan</div>
                                </div>
                            </div>
                        )}
                        {wa && (
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Nomer WA</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div>
                                    <div className='text-slate-400 font-semibold'>Pesan WA</div>
                                    <input type="text" className='border-2 w-full p-2 mt-1'/>
                                </div>
                                <div className='flex bg-[#3bc0c3] w-[200px] justify-center py-2 text-white font-medium'>
                                    <BsCheckLg size={25}/>
                                    <div>Simpan Pengaturan</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='bg-white w-[650px] p-4'>
                        <div className='flex gap-1'>
                            <HiOutlineMailOpen size={25}/>
                            <div className='text-xl font-medium'>Testing Email</div>
                        </div>
                        <div className='my-12'>
                            <div className='mb-8'>
                                <div className='text-slate-400 font-semibold'>Masukkan Email Tujuan</div>
                                <input type="text" className='border-2 w-full pl-2 py-1 mt-2'/>
                            </div>
                            <div>
                                <div className='text-slate-400 font-semibold'>Text Pesan</div>
                                <textarea type="text" className='border-2 w-full pl-2 py-1 mt-2 h-24'/>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <div className='bg-[#3bc0c3] px-6 py-2 rounded-sm text-white font-medium flex items-center'>
                                <BsCheckLg size={23} />
                                <div>Kirim Email</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default PAdminSetting