import ajaxServise from "./ajaxService"

const searchCode = ()=>{
    document.querySelector('form').addEventListener('submit', (event)=>{
        event.preventDefault(); // keisti standartine formos elgsena
        const searchTerm = document.querySelector('.term').value;
        console.log(searchTerm)
       let searchResponse;
        ajaxServise(searchTerm)
            .then(result=>searchResponse = result)
            .then (()=>console.log('Pasto kodas:', searchResponse.data[0].post_code))
            .then(()=>{
                document.querySelector('.result').value = searchResponse.data[0].post_code
            })
            .catch(()=>{
                document.querySelector('.result').value = "Klaida: Toks adresas neegzistuoja"
            })
    })
}
export default searchCode