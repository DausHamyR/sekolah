import {MdSell} from 'react-icons/md'
import {AiOutlineFileText, AiOutlinePicture, AiFillFolder, AiFillYoutube} from 'react-icons/ai'
import {BsFillCalendarEventFill} from 'react-icons/bs'
import {FaNewspaper, FaRegSnowflake} from 'react-icons/fa'
import {TfiMenuAlt} from 'react-icons/tfi'
import {BiSlider} from 'react-icons/bi'

function Body() {
    return (
        <div>
            <div className='flex justify-between mb-12'>
                <div className='font-medium text-xl'>
                    {location.pathname === '/paneladmin/kategori' && <div className='flex items-center gap-2'><MdSell />Data Kategori</div>}
                    {location.pathname === '/paneladmin/halaman' && <div className='flex items-center gap-2'><AiOutlineFileText size={25}/>Data Halaman</div>}
                    {location.pathname === '/paneladmin/acara' && <div className='flex items-center gap-2'><BsFillCalendarEventFill />Data Acara</div>}
                    {location.pathname === '/paneladmin/tambahAcara' && <div className='flex items-center gap-2'><AiOutlineFileText />Tambah Acara</div>}
                    {location.pathname === '/paneladmin/article' && <div className='flex items-center gap-2'><FaNewspaper />Data Article</div>}
                    {location.pathname === '/paneladmin/tambahArticle' && <div className='flex items-center gap-2'><AiOutlineFileText />Tambah Article</div>}
                    {location.pathname === '/paneladmin/album' && <div className='flex items-center gap-2'><AiFillFolder size={25}/>Data Album</div>}
                    {location.pathname === '/paneladmin/galeri' && <div className='flex items-center gap-2'><AiOutlinePicture size={25}/>Data Galeri</div>}
                    {location.pathname === '/paneladmin/vidio' && <div className='flex items-center gap-2'><AiFillYoutube size={25}/>Data Vidio</div>}
                    {location.pathname === '/paneladmin/slider' && <div className='flex items-center gap-2'><BiSlider size={25}/>Data Slider</div>}
                    {location.pathname === '/paneladmin/menu' && <div className='flex items-center gap-2'><TfiMenuAlt size={25}/>Data Menu Utama</div>}
                    {location.pathname === '/paneladmin/ourservice' && <div className='flex items-center gap-2'><FaRegSnowflake size={25}/>Data Ourservice</div>}
                </div>
                <div className='bg-[#3bc0c3] px-2 py-0.5 cursor-pointer hover:bg-[#30999c]'>
                    {location.pathname === '/paneladmin/kategori' && <div className='text-white font-medium'>+ Tambah Kategori</div>}
                    {location.pathname === '/paneladmin/halaman' && <div className='text-white font-medium'>+ Tambah Halaman</div>}
                    {location.pathname === '/paneladmin/acara' && <div className='text-white font-medium'>+ Tambah Acara</div>}
                    {location.pathname === '/paneladmin/article' && <div className='text-white font-medium'>+ Tambah Article</div>}
                    {location.pathname === '/paneladmin/album' && <div className='text-white font-medium'>+ Tambah Album</div>}
                    {location.pathname === '/paneladmin/galeri' && <div className='text-white font-medium'>+ Tambah Galeri</div>}
                    {location.pathname === '/paneladmin/vidio' && <div className='text-white font-medium'>+ Tambah Vidio</div>}
                    {location.pathname === '/paneladmin/slider' && <div className='text-white font-medium'>+ Tambah Slider</div>}
                    {location.pathname === '/paneladmin/menu' && <div className='text-white font-medium'>+ Tambah Menu Utama</div>}
                    {location.pathname === '/paneladmin/ourservice' && <div className='text-white font-medium'>+ Tambah Ourservice</div>}
                </div>
            </div>
            <div className='flex justify-between mb-4'>
                <div className='flex gap-1'>
                    <div>Show</div>
                    <div className='border-2 py-0.5 px-4'>
                        <div>10</div>
                    </div>
                    <div>enties</div>
                </div>
                <div className='flex items-center gap-2'>
                    <div>Search:</div>
                    <input type="text" className='border-2 pl-2'/>
                </div>
            </div>
        </div>
    )
}

export default Body