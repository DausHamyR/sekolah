import React from 'react'
import Dashboard from '../../components/Dashboard'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Body from '../../components/Body'
import http from '../../helpers/http.helper'
import { Formik } from 'formik'
import {BsCheckLg} from 'react-icons/bs'

function PAdminKategori() {
    const [kategori, setKategori] = React.useState();
    const [showModal, setShowModal] = React.useState(false);
    const [idKategori, setIdKategori] = React.useState(0);
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
            const {data} = await http().patch(`/kategori/${idKategori}`, body);
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    };

    async function removeKategori(id) {
        try {
            await http().delete(`/kategori/${id}`);
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
                                    <button onClick={()=> (setShowModal(true), setIdKategori(kategori.id))} className='bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                                        <div>Edit</div>
                                    </button>
                                    <button onClick={()=> removeKategori(kategori.id)} className='bg-red-600 px-2 py-0.5 cursor-pointer'>
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
        </div>
    )
}

export default PAdminKategori