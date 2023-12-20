export default function Operacion (n) {

    var res = calcular();
    return (res);

    function calcular(){

        ///////////////////Calcular numero triangular////////////////////
        
        var nn = n*2;
        var triangular = (nn*(nn+1)/2);

        ///////////////////Calcular el enesimo numero primo////////////// 
        
        var numeroPrimo;
        
        if(n === 0){

            numeroPrimo = 0;

        }
        else{

            var validacion = false;
            var divisiones = 0;
            var contador = 0;
            numeroPrimo = 2;
            
            while (contador < n){

                for (var i = 1; i <= numeroPrimo ; i++){

                    if (numeroPrimo % i === 0) divisiones ++;

                }

                validacion = divisiones === 2 ? true : false;

                if(validacion === true) {

                    contador ++;
                    validacion = false;
                    divisiones = 0;
                    numeroPrimo = numeroPrimo + 1; 

                }
                else{

                    divisiones = 0;
                    numeroPrimo = numeroPrimo + 1;

                }    

            }

            numeroPrimo = numeroPrimo -1 ;
        }

        //Calcular serie fibbonaci

        var serie = [0,1];
        
        for (let i = 2;i<=n;i++){
            
            serie.push(serie[i-1]+serie[i-2]);
        
        }
        
        var fibbonaci = serie[serie.length-1]

        var resultado = triangular - numeroPrimo - fibbonaci;
        return (resultado);

    }
    
}