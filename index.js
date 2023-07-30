document.querySelector('.close').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=> {
    document.querySelector('.options').classList.toggle('options-go');
    if(document.querySelector('.options').classList.contains('options-go')) {
        document.querySelector('.ham').style.display = "inline";
        document.querySelector('.close').style.display = "none";
    }
    else {
        document.querySelector('.ham').style.display = "none";
        setTimeout(()=> {
            document.querySelector('.close').style.display = 'inline'
        }, 300);
        
    }
});