// script.js

document.getElementById("btnTempoJuntos").addEventListener("click", function() {
    // Oculta a tela inicial
    document.getElementById("inicioTela").style.display = "none";  
    
    // Exibe a tela de transição com o GIF
    document.getElementById("transicaoTela").style.display = "flex";  // Use flex para garantir centralização
    
    // Define um tempo para o GIF de transição (1.3 segundos)
    setTimeout(function() {
        // Oculta a tela de transição (GIF)
        document.getElementById("transicaoTela").style.display = "none";  
        
        // Exibe a tela do contador
        document.getElementById("contadorTela").style.display = "block";  
        
        // Inicia o contador após a transição
        iniciarContador();
    }, 1300); // Tempo de 1.3 segundos para o GIF de transição
});

function iniciarContador() {
    // Define a data inicial (14/09/2024 19:00:00)
    const dataInicial = new Date("2024-09-14T19:00:00");
    
    // Função que atualiza o contador
    function atualizarContador() {
        // Data e hora atuais
        const agora = new Date();
        
        // Calculando a diferença entre a data inicial e agora
        let diferenca = agora - dataInicial;

        // Calculando anos passados
        const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25)); // 365.25 para considerar anos bissextos
        
        // Calculando meses passados após calcular os anos
        diferenca -= anos * (1000 * 60 * 60 * 24 * 365.25);
        const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30.44)); // Média de dias por mês
        
        // Calculando dias passados após calcular os meses
        diferenca -= meses * (1000 * 60 * 60 * 24 * 30.44);
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24)); // Dias restantes
        
        // Calculando horas passadas
        diferenca -= dias * (1000 * 60 * 60 * 24);
        const horas = Math.floor(diferenca / (1000 * 60 * 60)); // Horas restantes
        
        // Calculando minutos passados
        diferenca -= horas * (1000 * 60 * 60);
        const minutos = Math.floor(diferenca / (1000 * 60)); // Minutos restantes
        
        // Calculando segundos passados
        diferenca -= minutos * (1000 * 60);
        const segundos = Math.floor(diferenca / 1000); // Segundos restantes
        
        // Atualizando os valores nas divs específicas para cada unidade de tempo
        document.getElementById("anos").textContent = `Anos: ${anos}`;
        document.getElementById("meses").textContent = `Meses: ${meses}`;
        document.getElementById("dias").textContent = `Dias: ${dias}`;
        document.getElementById("horas").textContent = `Horas: ${horas}`;
        document.getElementById("minutos").textContent = `Minutos: ${minutos}`;
        document.getElementById("segundos").textContent = `Segundos: ${segundos}`;
    }
    
    // Atualiza o contador a cada segundo
    const intervaloContador = setInterval(atualizarContador, 1000);
    
    // Inicia a contagem imediatamente
    atualizarContador(); // Atualiza o contador imediatamente

}
