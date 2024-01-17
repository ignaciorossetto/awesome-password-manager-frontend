import FilterBox from "../components/FilterBox";
import VaultCard from "../components/VaultCard";
import { VaultItemType } from "../types/types";
import PassArrayHook from "../hooks/PassArrayHook";



const Vault = () => {
    const {passArray, handleCreateDeletePassFc, loadingPassCards} = PassArrayHook()
  return (
    <div className='p-10 flex w-full gap-20 justify-center '>
        {/* Filter Box */}
        <FilterBox />
        {/* Vault itself */}
        <div
        className='w-full md:w-[65%] '
        >
            <div
            className='flex flex-col sm:flex-row gap-5 justify-between mb-10 items-center'
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
            <div
            className="grid grid-cols-1 gap-3 "
            >
                {/* vaultItemCard */}
                {
                    passArray.map((e: VaultItemType)=> (
                        <VaultCard handleCreateDeletePassFc={handleCreateDeletePassFc(e.id)} {...e} key={e.id}/>
                    ))
                }
                {
                    loadingPassCards && 
                    <>
                        <VaultCard type={'skeletonLoading'}/>
                        <VaultCard type={'skeletonLoading'}/>
                        <VaultCard type={'skeletonLoading'}/>
                    </>
                }
                <VaultCard type={'empty'}/>
            </div>
        </div>
    </div>
  )
}

export default Vault