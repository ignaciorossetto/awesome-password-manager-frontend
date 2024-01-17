import { VaultCardProps } from "../types/types"



const VaultCard = ({type=null, title, value, bgColor, handleCreateDeletePassFc}: VaultCardProps) => {
  return (
    <div
            className={`flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center border-dashed border-2 border-black/25 p-5 ${type==='skeletonLoading' && 'animate-pulse'}`}
            >
                {
                    type === 'empty' && 
                    <div
                    className="w-full flex justify-center"
                    >
                        <div
                        className="h-[50px] w-[50px] border-2 rounded-full flex items-center justify-center text-xl border-dashed border-black/25 scale-animation cursor-pointer"
                        > 
                            +
                        </div>
                    </div>
                }
                {
                    type === 'skeletonLoading' && 
                    <>
                <div
                className='flex gap-5 items-center'
                >
                    <input type="checkbox" name="" id="" className='hidden sm:block animate-pulse'/>
                    <div
                    className='flex gap-3 items-center text-base'
                    >
                        <div
                        className={`w-[30px] xs:w-[50px] h-[30px] xs:h-[50px] ${bgColor || 'bg-white'} border rounded-full animate-pulse`}
                        >

                        </div>
                        <div
                        className='flex flex-col '
                        >
                            <span
                            className="animate-pulse"
                            >
                                xxxxxxxxxxx
                            </span>
                            <span
                            className="animate-pulse"
                            >
                                xxxxxxxxxxx
                            </span>
                        </div>
                    </div>
                </div>
                <div
                className='flex items-center gap-10 text-base justify-center lg:justify-normal w-full lg:w-auto'
                >
                    <input
                        type="checkbox"
                        className={`hidden xs:block sm:hidden ${bgColor || 'bg-white'} border rounded-full animate-pulse`}
                        />
                    <button
                    className='px-3 py-1 bg-gray-300 rounded-md font-semibold scale-animation animate-pulse'
                    onClick={handleCreateDeletePassFc}
                    >......</button>
                    <button
                    className='px-3 py-1 bg-gray-300 rounded-md font-semibold scale-animation animate-pulse'
                    >...</button>
                </div>
                </>
                }
                {
                    !type && 
                <>
                <div
                className='flex gap-5 items-center'
                >
                    <input type="checkbox" name="" id="" className='hidden sm:block'/>
                    <div
                    className='flex gap-3 items-center text-base'
                    >
                        <div
                        className={`w-[30px] xs:w-[50px] h-[30px] xs:h-[50px] ${bgColor || 'bg-white'} border rounded-full`}
                        >

                        </div>
                        <div
                        className='flex flex-col '
                        >
                            <span>
                                {title}
                            </span>
                            <span>
                                {value}
                            </span>
                        </div>
                    </div>
                </div>
                <div
                className='flex items-center gap-10 text-base justify-center lg:justify-normal w-full lg:w-auto'
                >
                    <input
                        type="checkbox"
                        className={`hidden xs:block sm:hidden ${bgColor || 'bg-white'} border rounded-full`}
                        />
                    <button
                    className='px-3 py-1 bg-orange-300 rounded-md font-semibold scale-animation'
                    onClick={handleCreateDeletePassFc}
                    >Delete</button>
                    <button
                    className='px-3 py-1 bg-gray-300 rounded-md font-semibold scale-animation'
                    >...</button>
                </div>
                </>
                }
            </div>
  )
}

export default VaultCard