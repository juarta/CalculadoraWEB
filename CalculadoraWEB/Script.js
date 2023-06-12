
// Funciones  para calcular el coseno

function calculateCosine() {
    var angle = parseInt($("#angle").val());
    if (isNaN(angle) || angle < 0 || angle > 360) {
        $("#cosineResult").html("<p>El valor del ángulo no es válido.</p>");
        $("#cosineResultmonto").hide();
        return;
    }

    $.ajax({
        type: "POST",
        url: "Default.aspx/CalculateCosine",
        data: JSON.stringify({ angle: angle }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            // Mostrar el resultado del cálculo en el contenedor correspondiente
            $("#cosineResultmonto").show();
            $("#cosineResultmonto").html("<p>Coseno(" + angle + ") = " + response.d + "</p>");
            // Crear un gráfico de barras con el resultado
            $("#cosineResult").html("<canvas id='cosineChart' width='300' height='200'></canvas>");
            createBarChart("cosineChart", ["Coseno"], [response.d]);

        },
        failure: function (response) {
            $("#cosineResult").html("<p>Ocurrió un error al calcular el coseno.</p>");
            $("#cosineResultmonto").hide();
        }
    });
}

// Funciones  para calcular el targente
function calculateTangent() {
    var angle = parseInt($("#angle2").val());
    if (isNaN(angle) || angle < 0 || angle > 360) {
        $("#tangentResult").html("<p>El valor del ángulo no es válido.</p>");
        $("#tangentResultmonto").hide();
        return;
    }

    $.ajax({
        type: "POST",
        url: "Default.aspx/CalculateTangent",
        data: JSON.stringify({ angle: angle }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#tangentResultmonto").show();
            // Mostrar el resultado del cálculo en el contenedor correspondiente
            $("#tangentResultmonto").html("<p>Tangente(" + angle + ") = " + response.d + "</p>");
            // Crear un gráfico de barras con el resultado
            $("#tangentResult").html("<canvas id='tangentChart' width='300' height='200'></canvas>");
            createBarChart("tangentChart", ["Tangente"], [response.d]);
        },
        failure: function (response) {
            $("#tangentResult").html("<p>Ocurrió un error al calcular la tangente.</p>");
            $("#tangentResultmonto").hide();
        }
    });
}

// Funciones  para calcular el area del circulo
function calculateCircleArea() {
    var radius = parseInt($("#radius").val());
    if (isNaN(radius) || radius < 1 || radius > 2600) {
        $("#circleAreaResult").html("<p>El valor del radio no es válido.</p>");
        $("#circleAreaResultmonto").hide();
        return;
    }

    $.ajax({
        type: "POST",
        url: "Default.aspx/CalculateCircleArea",
        data: JSON.stringify({ radius: radius }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#circleAreaResultmonto").show();
            // Mostrar el resultado del cálculo en el contenedor correspondiente
            $("#circleAreaResultmonto").html("<p>Área del círculo con radio " + radius + " = " + response.d + "</p>");
            // Crear un gráfico de barras con el resultado
            $("#circleAreaResult").html("<canvas id='CircleAreaChart' width='300' height='200'></canvas>");
            createBarChart("CircleAreaChart", ["Área del circulo"], [response.d]);
        },
        failure: function (response) {
            $("#circleAreaResult").html("<p>Ocurrió un error al calcular el área del círculo.</p>");
            $("#circleAreaResultmonto").hide();
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
