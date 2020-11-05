const banderas=document.getElementById("banderas");
document.addEventListener("DOMContentLoaded",e=>{
    cargarBanderas();
})

const cargarBanderas=async()=>{
    try{
        const response= await fetch("https://restcountries.eu/rest/v2/all")
        const data=await response.json()
        // const idioma=await data.translations.json()
        console.log(data);
        // console.log(idioma);
        flags(data);//pintar las banderas
        formularioCliente(data);//buscador de banderas
    }
    catch(e){
        console.log(e);
    }
}


const flags=data=>{
    banderas.innerHTML='';
    data.forEach(item => {
        const elementos= document.createElement('div');
        elementos.classList.add('card');
        elementos.innerHTML=`
        
                <div>
                <img src="${item.flag}" class="card-img-top" alt="...">
                </div>

                                
                <div class="card-body">
                <h4 class="text-center"><span class="font-weight-bold">${item.translations.es ||item.name}</span> (${item.alpha2Code})</h4>
                <p class="card-text country-region">
                    <span class="font-weight-bold">Región:</span>
                    ${item.region}
                </p>
                <p class="card-text">
                    <span class="font-weight-bold">Moneda:</span>
                    ${item.currencies["0"].symbol} (${item.currencies.map(currency=>currency.name)})
                </p><p class="card-text">
                    <span class="font-weight-bold">Lenguas:</span>
                    ${item.languages.map(language=>language.name)}
                </p>
                </div>
            
        `
    ;
    banderas.appendChild(elementos);
    });
    // banderas.innerHTML=elementos;

}