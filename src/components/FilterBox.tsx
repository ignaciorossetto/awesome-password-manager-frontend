import { FaLongArrowAltDown } from "react-icons/fa";

const FilterBox = () => {
  return (
        <div
        className="hidden md:block"
        >
            <div
            className='text-2xl border-b-2 w-full border-2 border-black py-2 px-2'
            >
                Filters
            </div>
            <div
                className='w-full w-[35%] max-w-[288px] h-fit sticky top-3 border-2 border-black min-h-[500px] px-3 text-lg border-t-0'
                >
            <input 
            type="text"  
            className='px-2 py-2 border border-black my-5 text-lg'
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
                </div>
  )
}

export default FilterBox