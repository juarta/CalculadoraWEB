
// Funciones  para calcular el coseno

function calculateCoseno() {
    var angle = parseInt($("#angle").val());
    if (isNaN(angle) || angle < 0 || angle > 360) {
        $("#cosenoResult").html("<p>El valor del ángulo no es válido.</p>");
        $("#cosenoResultmonto").hide();
        return;
    }

    $.ajax({
        type: "POST",
        url: "Default.aspx/CalculateCoseno",
        data: JSON.stringify({ angle: angle }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            // Mostrar el resultado del cálculo en el contenedor correspondiente
            $("#cosenoResultmonto").show();
            $("#cosenoResultmonto").html("<p>Coseno(" + angle + ") = " + response.d + "</p>");
            // Crear un gráfico de barras con el resultado
            $("#cosenoResult").html("<canvas id='cosenoChart' width='300' height='200'></canvas>");
            createBarChart("cosenoChart", ["Coseno"], [response.d]);

        },
        failure: function (response) {
            $("#cosenoResult").html("<p>Ocurrió un error al calcular el coseno.</p>");
            $("#cosenoResultmonto").hide();
        }
    });
}

// Funciones  para calcular el targente
function calculateTangente() {
    var angle = parseInt($("#angle2").val());
    if (isNaN(angle) || angle < 0 || angle > 360) {
        $("#tangenteResult").html("<p>El valor del ángulo no es válido.</p>");
        $("#tangenteResultmonto").hide();
        return;
    }

    $.ajax({
        type: "POST",
        url: "Default.aspx/CalculateTangente",
        data: JSON.stringify({ angle: angle }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#tangenteResultmonto").show();
            // Mostrar el resultado del cálculo en el contenedor correspondiente
            $("#tangenteResultmonto").html("<p>Tangente(" + angle + ") = " + response.d + "</p>");
            // Crear un gráfico de barras con el resultado
            $("#tangenteResult").html("<canvas id='tangenteChart' width='300' height='200'></canvas>");
            createBarChart("tangenteChart", ["Tangente"], [response.d]);
        },
        failure: function (response) {
            $("#tangenteResult").html("<p>Ocurrió un error al calcular la tangente.</p>");
            $("#tangenteResultmonto").hide();
        }
    });
}

// Funciones  para calcular el area del circulo
function calculateAreaCirculo() {
    var radius = parseInt($("#radius").val());
    if (isNaN(radius) || radius < 1 || radius > 2600) {
        $("#AreaCirculoResult").html("<p>El valor del radio no es válido.</p>");
        $("#AreaCirculoResultmonto").hide();
        return;
    }

    $.ajax({
        type: "POST",
        url: "Default.aspx/CalculateAreaCirculo",
        data: JSON.stringify({ radius: radius }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#AreaCirculoResultmonto").show();
            // Mostrar el resultado del cálculo en el contenedor correspondiente
            $("#AreaCirculoResultmonto").html("<p>Área del círculo con radio " + radius + " = " + response.d + "</p>");
            // Crear un gráfico de barras con el resultado
            $("#AreaCirculoResult").html("<canvas id='AreaCirculoChart' width='300' height='200'></canvas>");
            createBarChart("AreaCirculoChart", ["Área del circulo"], [response.d]);
        },
        failure: function (response) {
            $("#AreaCirculoResult").html("<p>Ocurrió un error al calcular el área del círculo.</p>");
            $("#AreaCirculoResultmonto").hide();
        }
    });
}

// Funciones  para crear los graficos en 2d
function createBarChart(chartId, labels, data) {
    var ctx = document.getElementById(chartId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
