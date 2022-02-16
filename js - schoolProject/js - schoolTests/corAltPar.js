const btnCalc = document.querySelector('.btn-calc')


btnCalc.addEventListener('click', e => {
    class NumComplejo {
        modulo
        arg
    }

    const fuente = document.querySelector('.fuente')
    const fuenteArg = document.querySelector('.f-arg')
    const res1 = document.querySelector('.res1')
    const reac1 = document.querySelector('.reac1')
    const res2 = document.querySelector('.res2')
    const reac2 = document.querySelector('.reac2')
    
    const fuenteArgRad =  (fuenteArg.value / 180) * Math.PI
    const Z1 = new NumComplejo
    Z1.modulo = Math.hypot(res1.value, reac1.value)
    Z1.arg = Math.atan2(reac1.value, res1.value)
    const Z2 = new NumComplejo
    Z2.modulo = Math.hypot(res2.value, reac2.value)
    Z2.arg = Math.atan2(reac2.value, res2.value)
    const int1 = new NumComplejo
    int1.modulo = fuente.value / Z1.modulo
    int1.arg = fuenteArgRad - Z1.arg
    const int2 = new NumComplejo
    int2.modulo = fuente.value / Z2.modulo
    int2.arg = fuenteArgRad - Z2.arg
    const iTotal = new NumComplejo
    iTotal.modulo = Math.hypot((int1.modulo * (Math.sin(int1.arg)) + int2.modulo * (Math.sin(int2.arg))), (int1.modulo * (Math.cos(int1.arg)) + int2.modulo * (Math.cos(int2.arg))))
    iTotal.arg = Math.atan2((int1.modulo * (Math.sin(int1.arg)) + int2.modulo * (Math.sin(int2.arg))), (int1.modulo * (Math.cos(int1.arg)) + int2.modulo * (Math.cos(int2.arg))))
    const potCircuito = {
        fdp: Math.cos(iTotal.arg),
        potAct: fuente.value * iTotal.modulo * Math.cos(iTotal.arg),
        potReac: fuente.value * iTotal.modulo * Math.sin(iTotal.arg),
        potApar: fuente.value * iTotal.modulo
    }
    iTotal.arg = (iTotal.arg * 180) / Math.PI
    //console.log(iTotal, potCircuito)
    const iTotale = document.querySelector('#i-total')
    const iTotaleArg = document.querySelector('#i-total-arg')
    const pActiva = document.querySelector('#p-activa')
    const pReactiva = document.querySelector('#p-reactiva')
    const pAparente = document.querySelector('#p-aparente')
    const factorDp = document.querySelector('#factor-dp')
    iTotale.textContent = iTotal.modulo
    iTotaleArg.textContent = iTotal.arg
    pActiva.textContent = potCircuito.potAct
    pReactiva.textContent = potCircuito.potReac
    pAparente.textContent = potCircuito.potApar
    factorDp.textContent = potCircuito.fdp
    let tdp = document.querySelector('#canv-tdp')
    let canvasContext = tdp.getContext('2d')
    let height = tdp.height
    let width = tdp.width
    if(potCircuito.potAct > 100 || potCircuito.potReac > 100) {
        
    }
    canvasContext.clearRect(0, 0, width, height)
    canvasContext.beginPath()
    canvasContext.moveTo(0, width*0.5)
    canvasContext.lineTo((potCircuito.potAct*0.1), width*0.5)
    canvasContext.lineTo((potCircuito.potAct*0.1), (potCircuito.potReac*0.1))
    canvasContext.closePath()
    canvasContext.stroke()
})


//console.log(corrAltPar(90, 60, 5, 3, 4, 8))

/* Eg (90, 60, 5, 3, 4, 8)
Z1 = 5+j3 =>  5.83095-30.9637
Z2 = 4+j8 =>  8.94427-63.4349
I1 =  15,434877-29.0363
I2 =  10.062308--3.4349
IT = I1 + I2 = 13.4949+j7.4915 + 10.0443-j0.6028 = 23.5392+j6.8887
IT = 24.526478-16.31200959 <---- final result
*/

/* improve upon the following:

*/