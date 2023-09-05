// import React from 'react'
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
// #3bc0c3
// #3bc0c3
function PAdminKategori() {
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

export default PAdminKategori