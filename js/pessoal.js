function handleFormSubmission(event) {
    event.preventDefault(); 
    if (this.checkValidity() === false) {
        event.stopPropagation(); 
    }
    this.classList.add("was-validated"); 
}

function calculo(tipo) {
    if (tipo == "dias"){
        var calcDias = document.getElementById("calculaDias");
        calcDias.addEventListener("submit", handleFormSubmission, false)

        if (horas = parseInt(document.getElementById('horas').value)){
            var resposta = document.getElementById('respDias');
            resposta.removeAttribute("style");


            
            resposta.innerHTML = ((horas * 7) / 30).toFixed(1) + " dias";
        }
    }
    if (tipo == "horas"){
        var calcHoras = document.getElementById("calculaHoras");
        calcHoras.addEventListener("submit", handleFormSubmission, false)

        if (dias = parseInt(document.getElementById('dias').value)){
            var resposta = document.getElementById('respHoras');
            resposta.removeAttribute("style");


            
            resposta.innerHTML = ((30 * dias)/7).toFixed(1) + " horas";
        }
    }
}

function changeActive(clickedElement, elementToShow) {
    var paginationItems = document.querySelectorAll('#paginacao .page-item');

    paginationItems.forEach(function(item) {
        item.classList.remove('active');
    });

    var parentLi = clickedElement.parentElement;
    parentLi.classList.add('active');

    if (elementToShow == 'formHoras'){
        var elementsToHide = document.querySelectorAll('[id^="formDias"]');
        var elementToDisplay = document.getElementById(elementToShow);
        elementsToHide.forEach(function(element) {
            element.style.display = 'none';
        });

        
        if (elementToDisplay) {
            elementToDisplay.style.display = 'block';
        }
    } else {
        var elementsToHide = document.querySelectorAll('[id^="formHoras"]');
        var elementToDisplay = document.getElementById(elementToShow);
        elementsToHide.forEach(function(element) {
            element.style.display = 'none';
        });

        
        if (elementToDisplay) {
            elementToDisplay.style.display = 'block';
        }
    }
}