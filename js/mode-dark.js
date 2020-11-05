const btn_dark=document.querySelector(".btn-dark-mode");
btn_dark.addEventListener('click',()=>{
    document.body.classList.toggle("dark-theme")
    if(document.body.className==="dark-theme"){
        btn_dark.innerHTML=`
        <i class="bx bx-sun"></i>
        <span>Light Mode</span>
        `;
    }else{
        btn_dark.innerHTML=`
        <i class="bx bx-moon"></i>
        <span>Dark Mode</span>
        `
    }
})