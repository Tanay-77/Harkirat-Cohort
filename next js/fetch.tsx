
export default async function fetch(){

    const response = await axios.get("api")

    cosnt data = response.data
    return(
     <div>{data.name}</div>
    )
}