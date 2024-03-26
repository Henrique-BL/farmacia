// Dados fictícios para o exemplo
var jsonData1 = [
  
  { categoria: "Péssimo", valor: 15 },
  { categoria: "Regular", valor: 100 },
  { categoria: "Bom", valor: 300 },
  { categoria: "Ótimo", valor: 400 }
];
var jsonData2 = [
  
  { categoria: "Jan", valor: 15 },
  { categoria: "Fev", valor: 100 },
  { categoria: "Março", valor: 300 },
  { categoria: "Abril", valor: 140 },
  { categoria: "Maio", valor: 90 },
  { categoria: "Junho", valor: 400 }
];

// Função para desenhar o gráfico de barras
function drawChart(graphicID, data) {
  var graphic = document.getElementById(graphicID);
  var chartHeight = graphic.clientHeight; // Obtém a altura da .chart
  var chartHTML = '';
  
  data.forEach(function(item) {
    var barHeight = (item.valor / Math.max(...data.map(item => item.valor))) * 180; // Calcula a altura da barra
    chartHTML += '<div class="bar" style="height:' + barHeight + 'px;">' + item.categoria + '</div>';
  });
  
  graphic.innerHTML = chartHTML;
}

// Desenha os gráficos
drawChart('bar-graphic1', jsonData1);
drawChart('bar-graphic2', jsonData2);
