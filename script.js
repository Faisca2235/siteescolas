function redirectTo(school) {
    // Redireciona para o arquivo index.html dentro da pasta avfe para cada escola
    window.location.href = 'avfe/index.html?escola=' + school;
}

function initMap() {
    // Inicializa o Google Maps com uma localização padrão
    var mapOptions = {
        center: {lat: -23.5505, lng: -46.6333}, // Coordenadas de exemplo (São Paulo)
        zoom: 12
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
