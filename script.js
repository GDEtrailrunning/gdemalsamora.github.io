document.addEventListener("DOMContentLoaded", function () {
  actualizarDiasRestantes();
  setInterval(actualizarDiasRestantes, 1000);
//Confirguracion tipografia graficos
  const chartFontFamily = '"Tajawal", Arial, sans-serif';

  const sharedChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false
    },
    plugins: {
      legend: {
        labels: {
          color: '#374151',
          font: {
            family: chartFontFamily,
            size: 12,
            weight: '700'
          },
          padding: 14
        }
      },
      tooltip: {
        titleFont: {
          family: chartFontFamily,
          size: 13,
          weight: '700'
        },
        bodyFont: {
          family: chartFontFamily,
          size: 12
        },
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        cornerRadius: 10,
        padding: 10
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#4b5563',
          font: {
            family: chartFontFamily,
            size: 12,
            weight: '600'
          },
          maxRotation: 0,
          autoSkip: true
        },
        grid: {
          color: 'rgba(15, 23, 42, 0.08)',
          drawBorder: false
        },
        border: {
          color: 'rgba(15, 23, 42, 0.16)'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#4b5563',
          font: {
            family: chartFontFamily,
            size: 12,
            weight: '600'
          }
        },
        grid: {
          color: 'rgba(15, 23, 42, 0.08)',
          drawBorder: false
        },
        border: {
          color: 'rgba(15, 23, 42, 0.16)'
        }
      }
    },
    elements: {
      line: {
        borderWidth: 2.5,
        tension: 0.25
      },
      point: {
        radius: 3.5,
        hoverRadius: 5,
        borderWidth: 1,
        backgroundColor: 'rgba(45, 74, 62, 1)',
        borderColor: 'rgba(45, 74, 62, 1)'
      }
    }
  };

  //Datos para el gráfico de líneas
  const dataLine1 = {
    labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'], // Etiquetas de los días
    datasets: [{
      label: 'Km recorridos en Semana 34',
      data: [11, 15, 10, 24], // Datos de los km recorridos en cada día
      borderColor: 'rgba(45, 74, 62, 1)',
      backgroundColor: 'rgba(45, 74, 62, 0.16)',
      fill: true
    }]
  };

  const dataLine2 = {
    labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'], // Etiquetas de los días
    datasets: [{
      label: 'Total Km recorridos en Semana 35',
      data: [14, 13, 18, 30],// Datos de los km recorridos en cada día
      borderColor: 'rgba(45, 78, 199, 1)',
      backgroundColor: 'rgba(45, 78, 199, 0.14)',
      fill: true
    }]
  };

  // Configuración del gráfico de líneas
  const configLine = {
    type: 'line',
    data: dataLine1,
    options: sharedChartOptions
  };

  // Seleccione los contextos de los <canvas> y cree los gráficos
  new Chart(document.getElementById('myChart-line-1'), configLine);
  new Chart(document.getElementById('myChart-line-2'), {
    type: 'line',
    data: dataLine2,
    options: sharedChartOptions
  });

function actualizarDiasRestantes() {
  // Fecha objetivo fija
  const objetivoDate = new Date('2026-09-27T00:00:00');
  const currentDate = new Date();
  const timeDiff = Math.max(0, objetivoDate - currentDate);
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);
  const countdownElement = document.getElementById('countdown');
  if (!countdownElement) return;
  countdownElement.innerHTML = `<span class="cuenta-regresiva-titulo">CUENTA REGRESIVA</span><br><span class="cuenta-regresiva-numero">${days}d : ${hours}h : ${minutes}m : ${seconds}s</span>`;
}

});
