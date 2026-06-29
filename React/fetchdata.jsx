import { useEffect, useState } from "react"

function app(){

    const[currenTab,setCurretTab]=useState(1)
    const[tabData , setTabData]=useState({})

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/' + currenTab)
        .then(async res => {
            const json = await res.json
            setTabData(json)

        })
    },[currenTab])

    return(
        <div>
            <button onClick={()=>{
                setCurretTab(1)
            }} style={{color: currenTab == 1 ? "red" : "black"}}>todo 1</button>
            <button onClick={()=>{
                setCurretTab(2)
            }} style={{color: currenTab == 2 ? "red" : "black"}}>todo 2 </button>
            <button onClick={()=>{
                setCurretTab(3)
            }} style={{color: currenTab == 3 ? "red" : "black"}}>todo 3 </button>
            <button onClick={()=>{
                setCurretTab(4)
            }} style={{color: currenTab == 4 ? "red" : "black"}}>todo 4</button>

            <br />

            {tabData}


        </div>
    )
}