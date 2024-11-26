function converterTemperatura() { 
    const celsius = parseFloat(document.getElementById('temperaturaCelsius').value); 
    const fahrenheit = (celsius * 9/5) + 32; 
    document.getElementById('temperaturaFahrenheit').textContent = fahrenheit.toFixed(2); 
} 