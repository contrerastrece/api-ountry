const formulario=document.getElementById("form_search");
const search=document.getElementById("input_search");

const formularioCliente=data=>{
    formulario.addEventListener("keyup",async(ev)=>{
        ev.preventDefault()
        const letraCliente=search.value.toLowerCase();
        // console.log(letraCliente);
        
        const palabrasFiltradas=data.filter(item=>{
            const textoApi=item.name.toLowerCase();
            //indexOf("texto") return -1 --> devolverá -1 si no existe coicidencia
            //
            if(textoApi.indexOf(letraCliente)!==-1){
                return item;
            }
        })
        console.log(palabrasFiltradas);
        flags(palabrasFiltradas);

    })
}