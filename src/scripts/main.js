AOS.init();
const contador = document.getElementById('contador1')
const dataDoEvento = new Date("Dec 10, 2023 00:00:00");
const timestampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
  const agora = new Date();
  const timestampAtual = agora.getTime();

  const distanciaAteOEvento =  timestampDoEvento - timestampAtual  ;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horasEmMs = 1000 * 60 * 60;
  const minutosEmMs = 1000 * 60;

      const diasAteOEvent = Math.floor(distanciaAteOEvento / diaEmMs)
      const horasAteOEvento= Math.floor((diasAteOEvent % diaEmMs) / horasEmMs );
      const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
      const segundosAteOEvento =Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

      document.getElementById('contador1').innerHTML = `${diasAteOEvent}d / ${horasAteOEvento}h / ${minutosAteOEvento}m / ${segundosAteOEvento}s`
      if(distanciaAteOEvento < 0 ){
         clearInterval(contaAsHoras);
       document.getElementById('contador1').innerHTML ="Evento expirado"
        }
        document.getElementById('contador2').innerHTML = `${diasAteOEvent}d / ${horasAteOEvento}h / ${minutosAteOEvento}m / ${segundosAteOEvento}s`
      if(distanciaAteOEvento < 0 ){
         clearInterval(contaAsHoras);
       document.getElementById('contador2').innerHTML ="Evento expirado"
        }

},1000)

