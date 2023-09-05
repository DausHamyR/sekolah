import {MdSell} from 'react-icons/md'
import {AiOutlineFileText, AiOutlinePicture, AiFillSetting} from 'react-icons/ai'
import {BsFillCalendarEventFill} from 'react-icons/bs'
import {FaNewspaper, FaRegSnowflake} from 'react-icons/fa'
import {TfiMenuAlt} from 'react-icons/tfi'

function Body() {
    return (
        <div className='bg-white w-[97%] mx-4 mt-6 p-6'>
            <div className='flex justify-between mb-12'>
                <div className='font-medium text-xl'>
                    {location.pathname === '/paneladmin/kategori' && <div className='flex items-center gap-2'><MdSell />Data Kategori</div>}
                    {location.pathname === '/paneladmin/halaman' && <div className='flex items-center gap-2'><AiOutlineFileText />Data Halaman</div>}
                    {location.pathname === '/paneladmin/acara' && <div className='flex items-center gap-2'><AiOutlineFileText />Data Acara</div>}
                    {location.pathname === '/paneladmin/tambahAcara' && <div className='flex items-center gap-2'><AiOutlineFileText />Tambah Acara</div>}
                    {location.pathname === '/paneladmin/article' && <div className='flex items-center gap-2'><AiOutlineFileText />Data Article</div>}
                    {location.pathname === '/paneladmin/tambahArticle' && <div className='flex items-center gap-2'><AiOutlineFileText />Tambah Article</div>}
                    {location.pathname === '/paneladmin/album' && <div className='flex items-center gap-2'><AiOutlineFileText />Data Album</div>}
                    {location.pathname === '/paneladmin/galeri' && <div className='flex items-center gap-2'><AiOutlineFileText />Data Galeri</div>}
                    {location.pathname === '/paneladmin/vidio' && <div className='flex items-center gap-2'><AiOutlineFileText />Data Vidio</div>}
                    {location.pathname === '/paneladmin/slider' && <div className='flex items-center gap-2'><AiOutlineFileText />Data Slider</div>}
                    {location.pathname === '/paneladmin/menu' && <div className='flex items-center gap-2'><AiOutlineFileText />Data Menu Utama</div>}
                    {location.pathname === '/paneladmin/ourservice' && <div className='flex items-center gap-2'><AiOutlineFileText />Data Ourservice</div>}
                </div>
                <div className='bg-[#3bc0c3] px-2 py-0.5 cursor-pointer hover:bg-[#30999c]'>
                    <div className='text-white font-medium'>+ Tambah Kategori</div>
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
            <div>
                <div className='flex justify-between font-medium'>
                    <div className='flex-[0.05] border py-2 px-4 '>No</div>
                    <div className='flex-[0.22] border py-2 px-4 '>Kategori</div>
                    <div className='flex-[0.48] border py-2 px-4 '>Slug</div>
                    <div className='flex-[0.25] border py-2 px-4 '>Aksi</div>
                </div>
                <div className='flex justify-between font-medium'>
                    <div className='flex-[0.05] border py-2 px-4 '>1</div>
                    <div className='flex-[0.22] border py-2 px-4 '>Kategori</div>
                    <div className='flex-[0.48] border py-2 px-4 '>Slug</div>
                    <div className='flex-[0.25] border py-2 px-4 flex gap-2 text-white'>
                        <div className='bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                            <div>Edit</div>
                        </div>
                        <div className='bg-red-600 px-2 py-0.5 cursor-pointer'>
                            <div>Hapus</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between font-medium'>
                    <div className='flex-[0.05] border py-2 px-4 '>2</div>
                    <div className='flex-[0.22] border py-2 px-4 '>Kategori</div>
                    <div className='flex-[0.48] border py-2 px-4 '>Slug</div>
                    <div className='flex-[0.25] border py-2 px-4 flex gap-2 text-white'>
                        <div className='bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                            <div>Edit</div>
                        </div>
                        <div className='bg-red-600 px-2 py-0.5 cursor-pointer'>
                            <div>Hapus</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between font-medium'>
                    <div className='flex-[0.05] border py-2 px-4 '>3</div>
                    <div className='flex-[0.22] border py-2 px-4 '>Kategori</div>
                    <div className='flex-[0.48] border py-2 px-4 '>Slug</div>
                    <div className='flex-[0.25] border py-2 px-4 flex gap-2 text-white'>
                        <div className='bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                            <div>Edit</div>
                        </div>
                        <div className='bg-red-600 px-2 py-0.5 cursor-pointer'>
                            <div>Hapus</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between font-medium'>
                    <div className='flex-[0.05] border py-2 px-4 '>4</div>
                    <div className='flex-[0.22] border py-2 px-4 '>Kategori</div>
                    <div className='flex-[0.48] border py-2 px-4 '>Slug</div>
                    <div className='flex-[0.25] border py-2 px-4 flex gap-2 text-white'>
                        <div className='bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                            <div>Edit</div>
                        </div>
                        <div className='bg-red-600 px-2 py-0.5 cursor-pointer'>
                            <div>Hapus</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between font-medium'>
                    <div className='flex-[0.05] border py-2 px-4 '>5</div>
                    <div className='flex-[0.22] border py-2 px-4 '>Kategori</div>
                    <div className='flex-[0.48] border py-2 px-4 '>Slug</div>
                    <div className='flex-[0.25] border py-2 px-4 flex gap-2 text-white'>
                        <div className='bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                            <div>Edit</div>
                        </div>
                        <div className='bg-red-600 px-2 py-0.5 cursor-pointer'>
                            <div>Hapus</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between font-medium'>
                    <div className='flex-[0.05] border py-2 px-4 '>6</div>
                    <div className='flex-[0.22] border py-2 px-4 '>Kategori</div>
                    <div className='flex-[0.48] border py-2 px-4 '>Slug</div>
                    <div className='flex-[0.25] border py-2 px-4 flex gap-2 text-white'>
                        <div className='bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                            <div>Edit</div>
                        </div>
                        <div className='bg-red-600 px-2 py-0.5 cursor-pointer'>
                            <div>Hapus</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between font-medium'>
                    <div className='flex-[0.05] border py-2 px-4 '>7</div>
                    <div className='flex-[0.22] border py-2 px-4 '>Kategori</div>
                    <div className='flex-[0.48] border py-2 px-4 '>Slug</div>
                    <div className='flex-[0.25] border py-2 px-4 flex gap-2 text-white'>
                        <div className='bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                            <div>Edit</div>
                        </div>
                        <div className='bg-red-600 px-2 py-0.5 cursor-pointer'>
                            <div>Hapus</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between font-medium'>
                    <div className='flex-[0.05] border py-2 px-4 '>8</div>
                    <div className='flex-[0.22] border py-2 px-4 '>Kategori</div>
                    <div className='flex-[0.48] border py-2 px-4 '>Slug</div>
                    <div className='flex-[0.25] border py-2 px-4 flex gap-2 text-white'>
                        <div className='bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                            <div>Edit</div>
                        </div>
                        <div className='bg-red-600 px-2 py-0.5 cursor-pointer'>
                            <div>Hapus</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between font-medium'>
                    <div className='flex-[0.05] border py-2 px-4 '>9</div>
                    <div className='flex-[0.22] border py-2 px-4 '>Kategori</div>
                    <div className='flex-[0.48] border py-2 px-4 '>Slug</div>
                    <div className='flex-[0.25] border py-2 px-4 flex gap-2 text-white'>
                        <div className='bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                            <div>Edit</div>
                        </div>
                        <div className='bg-red-600 px-2 py-0.5 cursor-pointer'>
                            <div>Hapus</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between font-medium'>
                    <div className='flex-[0.05] border py-2 px-4 '>10</div>
                    <div className='flex-[0.22] border py-2 px-4 '>Kategori</div>
                    <div className='flex-[0.48] border py-2 px-4 '>Slug</div>
                    <div className='flex-[0.25] border py-2 px-4 flex gap-2 text-white'>
                        <div className='bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                            <div>Edit</div>
                        </div>
                        <div className='bg-red-600 px-2 py-0.5 cursor-pointer'>
                            <div>Hapus</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 flex justify-between'>
                <div>Showing 1 to 10 of 10 entries</div>
                <div className='flex gap-2 items-center'>
                    <div className='cursor-pointer'>Previous</div>
                    <div className='bg-[#3bc0c3] px-2 py-1 text-white'>
                        <div>1</div>
                    </div>
                    <div className='cursor-pointer'>Next</div>
                </div>
            </div>
        </div>
    )
}

export default Body