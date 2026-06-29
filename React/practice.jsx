
function app(){

    const[count, setCount]=useState(1);

    function increaeSetcount(){
        setCount(curentvalune => curentvalune + 1)
    }

    useEffect(()=>{
        setInterval(increaeSetcount , 1000)
    },[])


    return(
        <div>{count}</div>
    )
}