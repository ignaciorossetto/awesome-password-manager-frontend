import  { useEffect, useState } from 'react'
import {  VaultItemId, VaultItemType } from '../types/types'

const INITIAL_STATE = [
    {
        id: crypto.randomUUID(),
        bgColor: 'bg-blue-400',
        title: 'My Facebook Account',
        value: 'example@example.com'
    },
    {
        id: crypto.randomUUID(),
        bgColor: 'bg-violet-400',
        title: 'My Instagram Account',
        value: 'example@example.com'
    },

]

const PassArrayHook = () => {
    const [passArray, setPassArray] = useState<VaultItemType[]>([])
    const [loadingPassCards, setLoadingPassCards] = useState(false)
    useEffect(()=> {
        setLoadingPassCards(true)
        setTimeout(()=> {
            setPassArray(INITIAL_STATE)
            setLoadingPassCards(false)
        }, 2000)
    }, [])

    const addNewPassToVault = () => {
        const newPass = {
            id: crypto.randomUUID(),
            bgColor: 'bg-blue-400',
            title: 'My Facebook Account',
            value: 'example@example.com'
        }
        setPassArray((prev)=> {
            return [...prev, newPass]
        })
    }

    const handleCreateDeletePassFc = (id:VaultItemId) => () =>{
        setPassArray((prev)=>{
            return prev.filter(pass => pass.id !== id)
        })
    }

  return {
    passArray,
    setPassArray,
    addNewPassToVault,
    handleCreateDeletePassFc,
    loadingPassCards
  }
}

export default PassArrayHook