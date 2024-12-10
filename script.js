// Datos iniciales (sin cambios)

// Instancias de gráficos
let algorithmChart, dataGrowthChart, dataTypesChart, clusteringChart;

// Inicializar gráficos
function initCharts() {
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    algorithmChart = new Chart(document.getElementById('algorithmChart'), {
        type: 'bar',
        data: {
            labels: algorithmData.map(d => d.name),
            datasets: [
                {
                    label: 'Precisión',
                    data: algorithmData.map(d => d.accuracy),
                    backgroundColor: 'rgba(52, 152, 219, 0.6)',
                },
                {
                    label: 'Velocidad',
                    data: algorithmData.map(d => d.speed),
                    backgroundColor: 'rgba(46, 204, 113, 0.6)',
                }
            ]
        },
        options: {
            ...commonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    showAlgorithmDetails(algorithmData[index]);
                }
            }
        }
    });

    dataGrowthChart = new Chart(document.getElementById('dataGrowthChart'), {
        type: 'line',
        data: {
            labels: dataGrowthData.map(d => d.year),
            datasets: [{
                label: 'Volumen de Datos (ZB)',
                data: dataGrowthData.map(d => d.dataVolume),
                borderColor: 'rgb(52, 152, 219)',
                tension: 0.1
            }]
        },
        options: {
            ...commonOptions,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    dataTypesChart = new Chart(document.getElementById('dataTypesChart'), {
        type: 'pie',
        data: {
            labels: dataTypesData.map(d => d.name),
            datasets: [{
                data: dataTypesData.map(d => d.value),
                backgroundColor: [
                    'rgba(52, 152, 219, 0.6)',
                    'rgba(46, 204, 113, 0.6)',
                    'rgba(155, 89, 182, 0.6)',
                ]
            }]
        },
        options: commonOptions
    });

    clusteringChart = new Chart(document.getElementById('clusteringChart'), {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Cluster A',
                    data: clusterData.filter(d => d.cluster === 'A'),
                    backgroundColor: 'rgba(52, 152, 219, 0.6)',
                },
                {
                    label: 'Cluster B',
                    data: clusterData.filter(d => d.cluster === 'B'),
                    backgroundColor: 'rgba(46, 204, 113, 0.6)',
                },
                {
                    label: 'Cluster C',
                    data: clusterData.filter(d => d.cluster === 'C'),
                    backgroundColor: 'rgba(155, 89, 182, 0.6)',
                }
            ]
        },
        options: {
            ...commonOptions,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Mostrar detalles del algoritmo (sin cambios)

// Agregar nuevo algoritmo (sin cambios)

// Agregar nuevo punto de crecimiento de datos (sin cambios)

// Agregar nuevo punto de cluster (sin cambios)

// Actualizar gráficos (sin cambios)

// Actualizar listas de datos (sin cambios)

// Funciones de eliminación (sin cambios)

// Funciones de reinicio (sin cambios)

// Inicializar todo
initCharts();
updateAlgorithmList();
updateDataGrowthList();
updateClusterList();

// Agregar event listener para redimensionar los gráficos
window.addEventListener('resize', () => {
    algorithmChart.resize();
    dataGrowthChart.resize();
    dataTypesChart.resize();
    clusteringChart.resize();
});