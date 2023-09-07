import {FiMenu} from 'react-icons/fi'

function Navbar() {

    return (
        <div className='bg-white h-[55px] w-full px-6 flex justify-between items-center'>
            <FiMenu size={25} className='cursor-pointer'/>
            <div>Amat Amin Daus</div>
        </div>
    )
}

export default Navbar