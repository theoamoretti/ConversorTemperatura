document.querySelector('#converter').onclick = converterTemp;
document.querySelector('#limpar').onclick = limparCampo;

function converterTemp(){
    let farenheit = document.querySelector('#fahrenheit').value;
    let celcius = document.querySelector('#celcius').value;
    let kelvin = document.querySelector('#kelvin').value;
    let rankine = document.querySelector('#rankine').value;

    if (farenheit >= 0 && celcius == 0 && kelvin == 0 && rankine == 0){

        celcius = (farenheit - 32) * 5/9;
        document.querySelector('#celcius').setAttribute("value", celcius);
        
        kelvin = (farenheit - 32) * 5/9 + 273;
        document.querySelector('#kelvin').setAttribute("value", kelvin);

        rankine = parseInt(farenheit) + 459;
        document.querySelector('#rankine').setAttribute("value", rankine); 
    }

    else if(celcius >= 0 && farenheit == 0 && kelvin == 0 && rankine == 0){
        
        farenheit = 32 + (celcius * 1.8);
        document.querySelector('#fahrenheit').setAttribute("value" , farenheit);
        
        kelvin = parseInt(celcius) + 273;
        document.querySelector('#kelvin').setAttribute("value", kelvin);

        rankine = celcius * 9/5 + 491;
        document.querySelector('#rankine').setAttribute("value", rankine); 
    }

    else if(kelvin >= 0 && farenheit == 0 && celcius == 0 && rankine == 0){

       celcius = parseInt(kelvin) - 273;
       document.querySelector('#celcius').setAttribute("value", celcius);

       farenheit = (kelvin - 273) * 9/5 + 32;
       document.querySelector('#fahrenheit').setAttribute("value", farenheit);

       rankine = (kelvin - 273)* 1.8 + 491;
       document.querySelector('#rankine').setAttribute("value", rankine); 
    }

    else if(rankine >= 0 && farenheit == 0 && celcius == 0 && kelvin == 0){

        celcius = (rankine - 491) * 5/9; 
        document.querySelector('#celcius').setAttribute("value", celcius);
 
        farenheit = rankine - 459;
        document.querySelector('#fahrenheit').setAttribute("value", farenheit);

        kelvin = rankine * 5/9;
        document.querySelector('#kelvin').setAttribute("value", kelvin);
     }

    else{
        alert("Digite apenas em um campo!");
    }

    document.querySelector('#fahrenheit').value = parseFloat(farenheit).toFixed(1);
    document.querySelector('#celcius').value = parseFloat(celcius).toFixed(1);
    document.querySelector('#kelvin').value = parseFloat(kelvin).toFixed(1);
    document.querySelector('#rankine').value = parseFloat(rankine).toFixed(1);
}

function limparCampo(){
    let limpar = document.querySelector('#limpar').onclick;

    if(limpar){
        document.querySelector('#fahrenheit').value = "";
        document.querySelector('#celcius').value = "";
        document.querySelector('#kelvin').value = "";
        document.querySelector('#rankine').value = "";
    }
}