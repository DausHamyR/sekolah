import { Link } from "react-router-dom"
import {MdSell} from 'react-icons/md'
import {AiOutlineFileText, AiOutlinePicture, AiFillSetting} from 'react-icons/ai'
import {BsFillCalendarEventFill} from 'react-icons/bs'
import {FaNewspaper, FaRegSnowflake} from 'react-icons/fa'
import {TfiMenuAlt} from 'react-icons/tfi'
import React from "react"

const Dashboard = ()=> {
    const [acara, setAcara] = React.useState(false);

    const buttonMasterAcara = () => {
        setAcara(prevSort => !prevSort);
    };

    return (
        <div className='bg-slate-700 w-[250px] h-[900px]'>
                <div className='pt-6 mb-24 flex justify-center items-end'>
                    <div className='text-white text-2xl font-semibold'>ADMINISTRATOR</div>
                </div>
                <div className='flex flex-col px-6 gap-10 text-slate-400'>
                    <Link to='/paneladmin/kategori' className={`hover:text-[#3bc0c3] flex gap-2 ${location.pathname === '/paneladmin/kategori' ? 'text-[#3bc0c3]' : ''}`}>
                        <MdSell size={25} />
                        <div >Kategori</div>
                    </Link>
                    <Link to='/paneladmin/halaman' className={`hover:text-[#3bc0c3] flex gap-2 ${location.pathname === '/paneladmin/halaman' ? 'text-[#3bc0c3]' : ''}`}>
                        <AiOutlineFileText size={25} />
                        <div>Halaman</div>
                    </Link>
                    <div>
                        <button onClick={() => buttonMasterAcara()} className={`hover:text-[#3bc0c3] flex items-center gap-2 ${location.pathname === '/paneladmin/tambahAcara' || location.pathname === '/paneladmin/acara' ? 'text-[#3bc0c3]' : ''}`}>
                            <BsFillCalendarEventFill size={20} />
                            <div className='cursor-pointer hover:text-[#3bc0c3]'>Master Acara</div>
                        </button>
                        {acara && (
                            <div className="px-7 mt-4 flex flex-col gap-4">
                                <Link to='/paneladmin/acara' className={`hover:text-[#3bc0c3] flex gap-2 ${location.pathname === '/paneladmin/acara' ? 'text-[#3bc0c3]' : ''}`}>Data Acara</Link >
                                <Link to='/paneladmin/tambahAcara' className={`hover:text-[#3bc0c3] flex gap-2 ${location.pathname === '/paneladmin/tambahAcara' ? 'text-[#3bc0c3]' : ''}`}>Tambah Acara</Link >
                            </div>
                        )}
                    </div>
                    <Link to='/paneladmin/halaman' className={`hover:text-[#3bc0c3] flex items-center gap-2 ${location.pathname === '/paneladmin/article' ? 'text-[#3bc0c3]' : ''}`}>
                        <FaNewspaper size={20} />
                        <div className='cursor-pointer hover:text-[#3bc0c3]'>Master Article</div>
                    </Link>
                    <Link to='/paneladmin/halaman' className={`hover:text-[#3bc0c3] flex items-center gap-2 ${location.pathname === '/paneladmin/album' ? 'text-[#3bc0c3]' : ''}`}>
                        <AiOutlinePicture size={20} />
                        <div className='cursor-pointer hover:text-[#3bc0c3]'>Master Galeri</div>
                    </Link>
                    <Link to='/paneladmin/menu' className={`hover:text-[#3bc0c3] flex items-center gap-2 ${location.pathname === '/paneladmin/menu' ? 'text-[#3bc0c3]' : ''}`}>
                        <TfiMenuAlt size={20} />
                        <div className='cursor-pointer hover:text-[#3bc0c3]'>Menu Website</div>
                    </Link>
                    <Link to='/paneladmin/ourservice' className={`hover:text-[#3bc0c3] flex items-center gap-2 ${location.pathname === '/paneladmin/ourservice' ? 'text-[#3bc0c3]' : ''}`}>
                        <FaRegSnowflake size={20} />
                        <div className='cursor-pointer hover:text-[#3bc0c3]'>Our Service</div>
                    </Link>
                    <Link to='/paneladmin/setting' className={`hover:text-[#3bc0c3] flex items-center gap-2 ${location.pathname === '/paneladmin/setting' ? 'text-[#3bc0c3]' : ''}`}>
                        <AiFillSetting size={20} />
                        <div className='cursor-pointer hover:text-[#3bc0c3]'>Pengaturan</div>
                    </Link>
                </div>
            </div>
    )
}

export default Dashboard