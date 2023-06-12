
using System;
using System.Web.Services;


namespace CalculadoraWEB
{
	public partial class Default : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{

		}

        [WebMethod]
        public static double CalculateCosine(int angle)
        {
            // Convierte el ángulo de grados a radianes
            double radians = ToRadians(angle);
            // Calcula el coseno del ángulo
            return Math.Cos(radians);
        }

        [WebMethod]
        public static double CalculateTangent(int angle)
        {
            // Convierte el ángulo de grados a radianes
            double radians = ToRadians(angle);
            // Calcula la tangente del ángulo
            return Math.Tan(radians);
        }

        [WebMethod]
        public static double CalculateCircleArea(int radius)
        {
            // Calcula el área del círculo utilizando la fórmula: π * r^2
            return Math.PI * Math.Pow(radius, 2);
        }

        private static double ToRadians(int degrees)
        {
            // Convierte los grados a radianes utilizando la fórmula: grados * π / 180
            return degrees * Math.PI / 180;
        }
    }
}