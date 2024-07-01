const caixas = document.querySelectorAll(".caixa");

const checkCaixas = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    caixas.forEach((caixa) => {
       const caixaTop = caixa.getBoundingClientRect().top;
       if (caixaTop < triggerBottom) { 
        caixa.classList.add("show");
    }  else { caixa.classList.remove("show");
    }
    });
};

window.addEventListener("scroll", checkCaixas);
checkCaixas();