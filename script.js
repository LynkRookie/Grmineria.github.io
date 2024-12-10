// Initial data
let algorithmData = [
    { name: 'Decision Trees', accuracy: 85, speed: 90 },
    { name: 'Random Forest', accuracy: 92, speed: 75 },
    { name: 'SVM', accuracy: 88, speed: 60 },
    { name: 'K-Means', accuracy: 78, speed: 95 },
    { name: 'Neural Networks', accuracy: 94, speed: 50 },
];

let dataGrowthData = [
    { year: 2010, dataVolume: 1 },
    { year: 2012, dataVolume: 2.5 },
    { year: 2014, dataVolume: 4.4 },
    { year: 2016, dataVolume: 8.5 },
    { year: 2018, dataVolume: 18 },
    { year: 2020, dataVolume: 44 },
    { year: 2022, dataVolume: 97 },
];

const dataTypesData = [
    { name: 'Structured', value: 20 },
    { name: 'Semi-structured', value: 30 },
    { name: 'Unstructured', value: 50 },
];

let clusterData = [
    { x: 10, y: 30, cluster: 'A' },
    { x: 40, y: 30, cluster: 'A' },
    { x: 45, y: 40, cluster: 'A' },
    { x: 20, y: 50, cluster: 'B' },
    { x: 30, y: 70, cluster: 'B' },
    { x: 50, y: 60, cluster: 'B' },
    { x: 70, y: 20, cluster: 'C' },
    { x: 80, y: 30, cluster: 'C' },
    { x: 90, y: 40, cluster: 'C' },
];

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

// Show algorithm details
function showAlgorithmDetails(algorithm) {
    const detailsElement = document.getElementById('algorithmDetails');
    const nameElement = document.getElementById('selectedAlgorithm');
    const statsElement = document.getElementById('algorithmStats');

    nameElement.textContent = algorithm.name;
    statsElement.textContent = `${algorithm.accuracy}% accuracy, ${algorithm.speed}% speed`;
    detailsElement.style.display = 'block';
}

// Add new algorithm
document.getElementById('addAlgorithmForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('algorithmName').value;
    const accuracy = Number(document.getElementById('algorithmAccuracy').value);
    const speed = Number(document.getElementById('algorithmSpeed').value);

    algorithmData.push({ name, accuracy, speed });
    updateAlgorithmChart();
    updateAlgorithmList();
    this.reset();
});

// Add new data growth point
document.getElementById('addDataGrowthForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const year = Number(document.getElementById('dataGrowthYear').value);
    const dataVolume = Number(document.getElementById('dataGrowthVolume').value);

    dataGrowthData.push({ year, dataVolume });
    updateDataGrowthChart();
    updateDataGrowthList();
    this.reset();
});

// Add new cluster point
document.getElementById('addClusterPointForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const x = Number(document.getElementById('clusterX').value);
    const y = Number(document.getElementById('clusterY').value);
    const cluster = document.getElementById('clusterName').value;

    clusterData.push({ x, y, cluster });
    updateClusteringChart();
    updateClusterList();
    this.reset();
});

// Update charts
function updateAlgorithmChart() {
    algorithmChart.data.labels = algorithmData.map(d => d.name);
    algorithmChart.data.datasets[0].data = algorithmData.map(d => d.accuracy);
    algorithmChart.data.datasets[1].data = algorithmData.map(d => d.speed);
    algorithmChart.update();
}

function updateDataGrowthChart() {
    dataGrowthChart.data.labels = dataGrowthData.map(d => d.year);
    dataGrowthChart.data.datasets[0].data = dataGrowthData.map(d => d.dataVolume);
    dataGrowthChart.update();
}

function updateClusteringChart() {
    clusteringChart.data.datasets[0].data = clusterData.filter(d => d.cluster === 'A');
    clusteringChart.data.datasets[1].data = clusterData.filter(d => d.cluster === 'B');
    clusteringChart.data.datasets[2].data = clusterData.filter(d => d.cluster === 'C');
    clusteringChart.update();
}

// Update data lists
function updateAlgorithmList() {
    const list = document.getElementById('algorithmList');
    list.innerHTML = '';
    algorithmData.forEach((algo, index) => {
        const item = document.createElement('div');
        item.className = 'data-item';
        item.innerHTML = `
            <span>${algo.name}: ${algo.accuracy}% accuracy, ${algo.speed}% speed</span>
            <button onclick="deleteAlgorithm(${index})">Delete</button>
        `;
        list.appendChild(item);
    });
}

function updateDataGrowthList() {
    const list = document.getElementById('dataGrowthList');
    list.innerHTML = '';
    dataGrowthData.forEach((data, index) => {
        const item = document.createElement('div');
        item.className = 'data-item';
        item.innerHTML = `
            <span>${data.year}: ${data.dataVolume} ZB</span>
            <button onclick="deleteDataGrowth(${index})">Delete</button>
        `;
        list.appendChild(item);
    });
}

function updateClusterList() {
    const list = document.getElementById('clusterList');
    list.innerHTML = '';
    clusterData.forEach((point, index) => {
        const item = document.createElement('div');
        item.className = 'data-item';
        item.innerHTML = `
            <span>(${point.x}, ${point.y}) - Cluster ${point.cluster}</span>
            <button onclick="deleteClusterPoint(${index})">Delete</button>
        `;
        list.appendChild(item);
    });
}

// Delete functions
function deleteAlgorithm(index) {
    algorithmData.splice(index, 1);
    updateAlgorithmChart();
    updateAlgorithmList();
}

function deleteDataGrowth(index) {
    dataGrowthData.splice(index, 1);
    updateDataGrowthChart();
    updateDataGrowthList();
}

function deleteClusterPoint(index) {
    clusterData.splice(index, 1);
    updateClusteringChart();
    updateClusterList();
}

// Reset functions
document.getElementById('resetAlgorithmData').addEventListener('click', function() {
    algorithmData = [
        { name: 'Decision Trees', accuracy: 85, speed: 90 },
        { name: 'Random Forest', accuracy: 92, speed: 75 },
        { name: 'SVM', accuracy: 88, speed: 60 },
        { name: 'K-Means', accuracy: 78, speed: 95 },
        { name: 'Neural Networks', accuracy: 94, speed: 50 },
    ];
    updateAlgorithmChart();
    updateAlgorithmList();
});

document.getElementById('resetDataGrowthData').addEventListener('click', function() {
    dataGrowthData = [
        { year: 2010, dataVolume: 1 },
        { year: 2012, dataVolume: 2.5 },
        { year: 2014, dataVolume: 4.4 },
        { year: 2016, dataVolume: 8.5 },
        { year: 2018, dataVolume: 18 },
        { year: 2020, dataVolume: 44 },
        { year: 2022, dataVolume: 97 },
    ];
    updateDataGrowthChart();
    updateDataGrowthList();
});

document.getElementById('resetClusterData').addEventListener('click', function() {
    clusterData = [
        { x: 10, y: 30, cluster: 'A' },
        { x: 40, y: 30, cluster: 'A' },
        { x: 45, y: 40, cluster: 'A' },
        { x: 20, y: 50, cluster: 'B' },
        { x: 30, y: 70, cluster: 'B' },
        { x: 50, y: 60, cluster: 'B' },
        { x: 70, y: 20, cluster: 'C' },
        { x: 80, y: 30, cluster: 'C' },
        { x: 90, y: 40, cluster: 'C' },
    ];
    updateClusteringChart();
    updateClusterList();
});

// Initialize everything
initCharts();
updateAlgorithmList();
updateDataGrowthList();
updateClusterList();


