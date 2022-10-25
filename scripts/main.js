const openMenu = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('.fa-xmark');
const overlay = document.querySelector('.overlay');

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
    
function opentab(tabname){
    for(tablink of tablinks){
    tablink.classList.remove("active-link");
    }
    
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxqqoY0P0PpPTHlR73pipWMVNPqLBL80BtUvHxktKU2AAjPzJS5RGlTSk_sp3RSnjHi1w/exec'

const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// function to open mobile menu 
const handleOpenMenu = (e) => {
    const mobileMenu = document.querySelector('.mobile-nav');
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    openMenu.style.display = "none";
}

// function to close mobile menu 
const handleCloseMenu = (e) => {
    const mobileMenu = document.querySelector('.mobile-nav');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    openMenu.style.display = "block";
}

openMenu.addEventListener('click', handleOpenMenu);
closeMenu.addEventListener('click', handleCloseMenu);
overlay.addEventListener('click', handleCloseMenu);

