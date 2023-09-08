import React from 'react'
import Dashboard from '../../components/Dashboard'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Body from '../../components/Body'
import http from '../../helpers/http.helper'
import { Formik } from 'formik'
import {BsCheckLg} from 'react-icons/bs'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {PiWarningCircleBold} from 'react-icons/pi'

function PAdminKategori() {
    const [kategori, setKategori] = React.useState();
    const [showModal, setShowModal] = React.useState(false);
    const [showModalDelete, setShowModalDelete] = React.useState(false);
    const [idKategori, setIdKategori] = React.useState(0);
    const [nameKategori, setNameKategori] = React.useState('');
    const [receivedData, setReceivedData] = React.useState("");

    React.useEffect(()=> {
        const getKategori = async() => {
            const {data} = await http().get("/kategori", {params: {search: receivedData}})
            setKategori(data.results)
        }
            getKategori(receivedData)
    }, [kategori, receivedData])

    const btnUpdateKategori = async values => {
        try {
            const body = new URLSearchParams({
                kategori: values.kategori,
            }).toString();
            await http().patch(`/kategori/${idKategori}`, body);
        } catch (err) {
            console.log(err)
        }
    };

    async function removeKategori(idKategori) {
        try {
            await http().delete(`/kategori/${idKategori}`);
            setShowModalDelete(false)
        } catch (err) {
            console.log(err);
        }
    }

    const handleDataReceive = (data) => {
        setReceivedData(data);
    }

    return (
        <div className='bg-slate-200 flex'>
            <Dashboard />
            <div className='w-full'>
                <Navbar />
                <div className='bg-white w-[97%] mx-4 mt-6 p-6'>
                    <Body onDataReceive={handleDataReceive}/>
                    <div>
                        <div className='flex justify-between font-medium'>
                            <div className='flex-[0.05] border py-2 px-4 '>No</div>
                            <div className='flex-[0.22] border py-2 px-4 '>Kategori</div>
                            <div className='flex-[0.48] border py-2 px-4 '>Slug</div>
                            <div className='flex-[0.25] border py-2 px-4 '>Aksi</div>
                        </div>
                        {kategori?.map((kategori, index) => (
                            <div key={kategori.id} className='flex justify-between font-medium'>
                                <div className='flex-[0.05] border py-2 px-4 '>{index+1}</div>
                                <div className='flex-[0.22] border py-2 px-4 '>{kategori.kategori}</div>
                                <div className='flex-[0.48] border py-2 px-4 '>{kategori.slug}</div>
                                <div className='flex-[0.25] border py-2 px-4 flex gap-2 text-white'>
                                    <button onClick={()=> (setShowModal(true), setIdKategori(kategori.id))} className='rounded-md flex items-center bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                                        <AiFillEdit />
                                        <div>Edit</div>
                                    </button>
                                    <button onClick={()=> (setShowModalDelete(true), setIdKategori(kategori.id), setNameKategori(kategori.kategori))} className='rounded-md flex items-center bg-red-600 px-2 py-0.5 cursor-pointer'>
                                        <AiFillDelete />
                                        <div>Hapus</div>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-4 flex justify-between relative'>
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
                <Footer />
            </div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" checked={showModal} readOnly/>
            <div className="modal">
                <div className="modal-box absolute top-12 max-w-[700px]">
                    <h3 className="font-bold text-lg">Update Kategori</h3>
                    <Formik
                    initialValues={{
                        kategori: ""
                    }}
                    onSubmit={btnUpdateKategori}
                    enableReinitialize
                    >
                        {({handleSubmit, handleChange, handleBlur, values})=> (
                        <form onSubmit={handleSubmit} className='my-6'>
                            <div className='text-slate-400 font-medium'>Nama Kategori</div>
                            <input name='kategori' type="text" className='border-2 w-full pl-4 py-2 mt-2' onChange={handleChange} onBlur={handleBlur} value={values.kategori}/>
                            <div className="modal-action">
                                <button onClick={()=> setShowModal(false)} type='submit' className="flex items-center px-2 py-0.5 bg-blue-500 text-white rounded-md font-semibold">
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
            <input type="checkbox" id="my_modal_6" className="modal-toggle" checked={showModalDelete} readOnly/>
            <div className="modal">
                <div className="modal-box absolute top-12 max-w-[700px]">
                    <PiWarningCircleBold size={50} className='text-red-500 mb-2'/>
                    <h3 className="font-bold text-xl text-red-500">Anda Yakin Untuk Menghapus Kategori ({nameKategori})?</h3>
                    <div className="modal-action">
                        <button onClick={()=> removeKategori(idKategori)} type='submit' className="flex items-center px-4 text-lg py-0.5 bg-red-500 text-white rounded-md font-semibold">
                            <div className="">Delete</div>
                        </button>
                        <button type='button' onClick={()=> setShowModalDelete(false)} className="btn text-lg">Batal</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PAdminKategori