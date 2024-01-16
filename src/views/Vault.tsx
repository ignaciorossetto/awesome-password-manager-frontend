import { FaLongArrowAltDown } from "react-icons/fa";

const Vault = () => {
  return (
    <div className='p-10 flex w-full gap-20 justify-center '>
        {/* Filter Box */}
        <div
        className='w-[35%] max-w-[288px] border-2 border-black min-h-[500px] px-5 text-lg'
        >
            <div
            className='text-2xl border-b-2 w-full border-black py-5 mb-5'
            >
                Filters
            </div>
            <input 
            type="text"  
            className='px-3 py-2 border border-black mb-5 text-lg'
            placeholder='Search...'/>
            <div
            className='mb-5'
            >
                <div
                className='flex gap-1 items-center mb-1'
                >
                    <FaLongArrowAltDown /> All items
                </div>
                <p
                className='pl-3'
                >option</p>
                <p
                className='pl-3'
                >option</p>
                <p
                className='pl-3'
                >option</p>
                <p
                className='pl-3'
                >option</p>
            </div>
            <div>
            <div
                className='flex gap-1 items-center mb-1'
                >
                    <FaLongArrowAltDown /> Folders
                </div>
                <p
                className='pl-3'
                >option</p>
                <p
                className='pl-3'
                >option</p>
            </div>
        </div>
        {/* Vault itself */}
        <div
        className='w-[65%] '
        >
            <div
            className='flex justify-between mb-10 items-center'
            >
                <h2
                className='text-3xl '
                >
                    Your vault
                </h2>
                <button
                className='px-5 py-3 bg-black rounded-lg text-white font-semibold hover-border-animation border-2 text-lg'
                >+ New Item</button>
            </div>
            {/* vaultItemCard */}
            <div
            className='flex justify-between items-center border-2 p-5'
            >
                <div
                className='flex gap-5 items-center\'
                >
                    <input type="checkbox" name="" id="" className=''/>
                    <div
                    className='flex gap-3 items-center text-base'
                    >
                        <div
                        className='w-[50px] h-[50px] bg-yellow-400 border rounded-full'
                        >

                        </div>
                        <div
                        className='flex flex-col '
                        >
                            <span>
                                My Facebook Account
                            </span>
                            <span>
                                example@example.com
                            </span>
                        </div>
                    </div>
                </div>
                <div
                className='flex gap-3 text-base'
                >
                    <button
                    className='px-3 py-1 bg-gray-300 rounded-md font-semibold scale-animation'
                    >Launch</button>
                    <button
                    className='px-3 py-1 bg-gray-300 rounded-md font-semibold scale-animation'
                    >...</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vault