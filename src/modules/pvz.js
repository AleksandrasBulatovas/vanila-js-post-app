//promise ??
const pvz = ()=>{

const movies = ()=>{
    let data  = fetch('http://www.omdbapi.com/?i=tt3896198&apikey=18c1a865&t=matrix')
        .then(res=>res.json())
        return data;
}

const showData = async ()=>{
    let data = await movies();
    console.log(data)

}
showData()
}
export default pvz