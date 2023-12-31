// import React from 'react'
import Body from '../../components/Body'
import Dashboard from '../../components/Dashboard'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import {FiEye} from 'react-icons/fi'
import {AiFillDelete} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'

function PAdminArticle() {
    return (
        <div className='bg-slate-200 flex'>
            <Dashboard />
            <div className='w-full'>
                <Navbar />
                <div className='bg-white w-[97%] mx-4 mt-6 p-6'>
                    <Body />
                    <div>
                        <div className='flex font-medium'>
                            <div className='flex-[0.018] border py-2 px-4'>No</div>
                            <div className='flex-[0.15] border py-2 px-4'>Judul</div>
                            <div className='flex-[0.1] border py-2 px-4'>Kategori</div>
                            <div className='flex-[0.46] border py-2 px-4'>Slug</div>
                            <div className='flex-[0.07] border py-2 px-4'>Dilihat</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tampil</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tanggal</div>
                            <div className='flex-[0.1] border py-2 px-4'>Aksi</div>
                        </div>
                        <div className='flex justify-between font-medium'>
                            <div className='flex-[0.018] border py-2 px-4'>1</div>
                            <div className='flex-[0.15] border py-2 px-4'>Judul</div>
                            <div className='flex-[0.1] border py-2 px-4'>Kategori</div>
                            <div className='flex-[0.46] border py-2 px-4'>Slug</div>
                            <div className='flex-[0.07] border py-2 px-4'>Dilihat</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tampil</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tanggal</div>
                            <div className='flex-[0.1] border py-2 px-4 flex gap-2 text-white'>
                                <div className='flex items-center bg-blue-400 px-1 py-0.5 cursor-pointer'>
                                    <FiEye />
                                </div>
                                <div className='flex items-center bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                                    <BiEdit />
                                </div>
                                <div className='flex items-center bg-red-600 px-2 py-0.5 cursor-pointer'>
                                    <AiFillDelete />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between font-medium'>
                            <div className='flex-[0.018] border py-2 px-4'>2</div>
                            <div className='flex-[0.15] border py-2 px-4'>Judul</div>
                            <div className='flex-[0.1] border py-2 px-4'>Kategori</div>
                            <div className='flex-[0.46] border py-2 px-4'>Slug</div>
                            <div className='flex-[0.07] border py-2 px-4'>Dilihat</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tampil</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tanggal</div>
                            <div className='flex-[0.1] border py-2 px-4 flex gap-2 text-white'>
                                <div className='flex items-center bg-blue-400 px-1 py-0.5 cursor-pointer'>
                                    <FiEye />
                                </div>
                                <div className='flex items-center bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                                    <BiEdit />
                                </div>
                                <div className='flex items-center bg-red-600 px-2 py-0.5 cursor-pointer'>
                                    <AiFillDelete />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between font-medium'>
                            <div className='flex-[0.018] border py-2 px-4'>3</div>
                            <div className='flex-[0.15] border py-2 px-4'>Judul</div>
                            <div className='flex-[0.1] border py-2 px-4'>Kategori</div>
                            <div className='flex-[0.46] border py-2 px-4'>Slug</div>
                            <div className='flex-[0.07] border py-2 px-4'>Dilihat</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tampil</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tanggal</div>
                            <div className='flex-[0.1] border py-2 px-4 flex gap-2 text-white'>
                                <div className='flex items-center bg-blue-400 px-1 py-0.5 cursor-pointer'>
                                    <FiEye />
                                </div>
                                <div className='flex items-center bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                                    <BiEdit />
                                </div>
                                <div className='flex items-center bg-red-600 px-2 py-0.5 cursor-pointer'>
                                    <AiFillDelete />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between font-medium'>
                            <div className='flex-[0.018] border py-2 px-4'>4</div>
                            <div className='flex-[0.15] border py-2 px-4'>Judul</div>
                            <div className='flex-[0.1] border py-2 px-4'>Kategori</div>
                            <div className='flex-[0.46] border py-2 px-4'>Slug</div>
                            <div className='flex-[0.07] border py-2 px-4'>Dilihat</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tampil</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tanggal</div>
                            <div className='flex-[0.1] border py-2 px-4 flex gap-2 text-white'>
                                <div className='flex items-center bg-blue-400 px-1 py-0.5 cursor-pointer'>
                                    <FiEye />
                                </div>
                                <div className='flex items-center bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                                    <BiEdit />
                                </div>
                                <div className='flex items-center bg-red-600 px-2 py-0.5 cursor-pointer'>
                                    <AiFillDelete />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between font-medium'>
                            <div className='flex-[0.018] border py-2 px-4'>5</div>
                            <div className='flex-[0.15] border py-2 px-4'>Judul</div>
                            <div className='flex-[0.1] border py-2 px-4'>Kategori</div>
                            <div className='flex-[0.46] border py-2 px-4'>Slug</div>
                            <div className='flex-[0.07] border py-2 px-4'>Dilihat</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tampil</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tanggal</div>
                            <div className='flex-[0.1] border py-2 px-4 flex gap-2 text-white'>
                                <div className='flex items-center bg-blue-400 px-1 py-0.5 cursor-pointer'>
                                    <FiEye />
                                </div>
                                <div className='flex items-center bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                                    <BiEdit />
                                </div>
                                <div className='flex items-center bg-red-600 px-2 py-0.5 cursor-pointer'>
                                    <AiFillDelete />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between font-medium'>
                            <div className='flex-[0.018] border py-2 px-4'>6</div>
                            <div className='flex-[0.15] border py-2 px-4'>Judul</div>
                            <div className='flex-[0.1] border py-2 px-4'>Kategori</div>
                            <div className='flex-[0.46] border py-2 px-4'>Slug</div>
                            <div className='flex-[0.07] border py-2 px-4'>Dilihat</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tampil</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tanggal</div>
                            <div className='flex-[0.1] border py-2 px-4 flex gap-2 text-white'>
                                <div className='flex items-center bg-blue-400 px-1 py-0.5 cursor-pointer'>
                                    <FiEye />
                                </div>
                                <div className='flex items-center bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                                    <BiEdit />
                                </div>
                                <div className='flex items-center bg-red-600 px-2 py-0.5 cursor-pointer'>
                                    <AiFillDelete />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between font-medium'>
                            <div className='flex-[0.018] border py-2 px-4'>7</div>
                            <div className='flex-[0.15] border py-2 px-4'>Judul</div>
                            <div className='flex-[0.1] border py-2 px-4'>Kategori</div>
                            <div className='flex-[0.46] border py-2 px-4'>Slug</div>
                            <div className='flex-[0.07] border py-2 px-4'>Dilihat</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tampil</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tanggal</div>
                            <div className='flex-[0.1] border py-2 px-4 flex gap-2 text-white'>
                                <div className='flex items-center bg-blue-400 px-1 py-0.5 cursor-pointer'>
                                    <FiEye />
                                </div>
                                <div className='flex items-center bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                                    <BiEdit />
                                </div>
                                <div className='flex items-center bg-red-600 px-2 py-0.5 cursor-pointer'>
                                    <AiFillDelete />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between font-medium'>
                            <div className='flex-[0.018] border py-2 px-4'>8</div>
                            <div className='flex-[0.15] border py-2 px-4'>Judul</div>
                            <div className='flex-[0.1] border py-2 px-4'>Kategori</div>
                            <div className='flex-[0.46] border py-2 px-4'>Slug</div>
                            <div className='flex-[0.07] border py-2 px-4'>Dilihat</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tampil</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tanggal</div>
                            <div className='flex-[0.1] border py-2 px-4 flex gap-2 text-white'>
                                <div className='flex items-center bg-blue-400 px-1 py-0.5 cursor-pointer'>
                                    <FiEye />
                                </div>
                                <div className='flex items-center bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                                    <BiEdit />
                                </div>
                                <div className='flex items-center bg-red-600 px-2 py-0.5 cursor-pointer'>
                                    <AiFillDelete />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between font-medium'>
                            <div className='flex-[0.018] border py-2 px-4'>9</div>
                            <div className='flex-[0.15] border py-2 px-4'>Judul</div>
                            <div className='flex-[0.1] border py-2 px-4'>Kategori</div>
                            <div className='flex-[0.46] border py-2 px-4'>Slug</div>
                            <div className='flex-[0.07] border py-2 px-4'>Dilihat</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tampil</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tanggal</div>
                            <div className='flex-[0.1] border py-2 px-4 flex gap-2 text-white'>
                                <div className='flex items-center bg-blue-400 px-1 py-0.5 cursor-pointer'>
                                    <FiEye />
                                </div>
                                <div className='flex items-center bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                                    <BiEdit />
                                </div>
                                <div className='flex items-center bg-red-600 px-2 py-0.5 cursor-pointer'>
                                    <AiFillDelete />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between font-medium'>
                            <div className='flex-[0.018] border py-2 px-4'>10</div>
                            <div className='flex-[0.15] border py-2 px-4'>Judul</div>
                            <div className='flex-[0.1] border py-2 px-4'>Kategori</div>
                            <div className='flex-[0.46] border py-2 px-4'>Slug</div>
                            <div className='flex-[0.07] border py-2 px-4'>Dilihat</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tampil</div>
                            <div className='flex-[0.07] border py-2 px-4'>Tanggal</div>
                            <div className='flex-[0.1] border py-2 px-4 flex gap-2 text-white'>
                                <div className='flex items-center bg-blue-400 px-1 py-0.5 cursor-pointer'>
                                    <FiEye />
                                </div>
                                <div className='flex items-center bg-[#edc755] px-2 py-0.5 cursor-pointer'>
                                    <BiEdit />
                                </div>
                                <div className='flex items-center bg-red-600 px-2 py-0.5 cursor-pointer'>
                                    <AiFillDelete />
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
                <Footer />
            </div>
        </div>
    )
}

export default PAdminArticle