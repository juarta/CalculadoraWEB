<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CalculadoraWEB.Default" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Calculadora WEB</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
</head>
<body>
    <form id="form1" runat="server">
        <div class="container">
            <h1>Calculadora WEB</h1>
            <%--<div class="row">--%>
                <div class="col-md-4">
                    <h3>Coseno de un ángulo</h3>
                    <div class="form-group">
                        <label for="angle">Ingrese un ángulo en grados (0-360):</label>
                        <input type="number" class="form-control" id="angle" placeholder="Ángulo" />
                    </div>
                    <button type="button" class="btn btn-primary" onclick="calculateCoseno()">Calcular</button>
                      <!-- Contenedor para mostrar el resultado del cálculo -->
                    <div id="cosenoResultmonto" style="margin-top: 10px;"></div>
                    <div id="cosenoResult" style="margin-top: 10px;"></div>
                    
                </div>
                <div class="col-md-4">
                    <h3>Tangente de un ángulo</h3>
                    <div class="form-group">
                        <label for="angle">Ingrese un ángulo en grados (0-360):</label>
                        <input type="number" class="form-control" id="angle2" placeholder="Ángulo" />
                    </div>
                    <button type="button" class="btn btn-primary" onclick="calculateTangente()">Calcular</button>
                      
                       <!-- Contenedor para mostrar el resultado del cálculo -->
                    <div id="tangenteResultmonto" style="margin-top: 10px;"></div>
                    <div id="tangenteResult" style="margin-top: 10px;"></div>
                </div>
                <div class="col-md-4">
                    <h3>Área del círculo</h3>
                    <div class="form-group">
                        <label for="radius">Ingrese el radio del círculo (1-2600):</label>
                        <input type="number" class="form-control" id="radius" placeholder="Radio" />
                    </div>
                         <!-- Contenedor para mostrar el resultado del cálculo -->
                    <button type="button" class="btn btn-primary" onclick="calculateAreaCirculo()">Calcular</button>
                     <div id="AreaCirculoResultmonto" style="margin-top: 10px;"></div>
                    <div id="AreaCirculoResult" style="margin-top: 10px;"></div>
                </div>
       
        </div>
          <!-- Incluye las bibliotecas externas necesarias -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="Script.js"></script>
    </form>
</body>
</html>