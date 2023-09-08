import {MdSell} from 'react-icons/md'
import {AiOutlineFileText, AiOutlinePicture, AiFillFolder, AiFillYoutube} from 'react-icons/ai'
import {BsFillCalendarEventFill, BsCheckLg} from 'react-icons/bs'
import {FaNewspaper, FaRegSnowflake} from 'react-icons/fa'
import {TfiMenuAlt} from 'react-icons/tfi'
import {BiSlider} from 'react-icons/bi'
import { Formik } from 'formik'
import http from '../helpers/http.helper'
import React from 'react'

function Body(props) {
    const [showModal, setShowModal] = React.useState(false);
    const [search, setSearch] = React.useState('')

    React.useEffect(() => {
        if(search){
            props.onDataReceive(search);
        }
    }, [props, search]);

    // const getUsers = React.useCallback(async(search='')=>{
    //     const {data} = await http().get('/kategori', {params: {search}})
    //     console.log(data)
    // }, [])

    // React.useEffect(()=> {
    //     getUsers(search)
    // }, [ search, getUsers])

    const btnCreateKategori = async values => {
        try {
            const body = new URLSearchParams({
                kategori: values.kategori,
            }).toString();
            const {data} = await http().post('/kategori', body);
            setShowModal(false)
        } catch (err) {
            console.log(err)
        }
    };

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
                <div className='bg-[#3bc0c3] px-4 py-1 cursor-pointer hover:bg-[#30999c] rounded-md'>
                    {location.pathname === '/paneladmin/kategori' && <button type='button' onClick={()=> setShowModal(true)} className='text-white font-medium cursor-pointer'>+ Tambah Kategori</button>}
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
                    {location.pathname === '/paneladmin/kategori' && <input onChange={(e)=> setSearch(e.target.value)} type="text" className='rounded-md border-2 pl-2'/>}
                    {location.pathname === '/paneladmin/halaman' && <input onChange={(e)=> setSearch(e.target.value)} type="text" className='rounded-md border-2 pl-2'/>}
                </div>
            </div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" checked={showModal} readOnly/>
            <div className="modal">
                <div className="modal-box absolute top-12 max-w-[700px]">
                    <h3 className="font-bold text-lg">Tambah Kategori</h3>
                    <Formik
                    initialValues={{
                        kategori: ''
                    }}
                    onSubmit={btnCreateKategori}
                    enableReinitialize
                    >
                        {({handleSubmit, handleChange, handleBlur, values})=> (
                        <form onSubmit={handleSubmit} className='my-6'>
                            <div className='text-slate-400 font-medium'>Nama Kategori</div>
                            <input name='kategori' type="text" className='border-2 w-full pl-4 py-2 mt-2' onChange={handleChange} onBlur={handleBlur} value={values.kategori}/>
                            <div className="modal-action">
                                <button type='submit' className="flex items-center px-2 py-0.5 bg-blue-500 text-white rounded-md font-semibold">
                                    <BsCheckLg size={23}/>
                                    <div className="">Simpan</div>
                                </button>
                                <button type='button' onClick={()=> setShowModal(false)} className="btn">Close</button>
                            </div>
                        </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Body