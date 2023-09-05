// import React from 'react'
import Body from '../components/Body'
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function PAdminTambahAcara() {
    return (
        <div className='bg-slate-200 flex'>
            <Dashboard />
            <div className='w-full'>
                <Navbar />
                <Body />
                <Footer />
            </div>
        </div>
    )
}

export default PAdminTambahAcara