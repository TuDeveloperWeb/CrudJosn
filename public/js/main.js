$(document).ready(function () {
    

    $('#tabla_articulo').DataTable({
        processing: true,
        serverSide: true,
        ajax: "{{route('mostrarDatos')}}",
        columns: [
           { data: 'id' },
           { data: 'codigo' },
           { data: 'descripcion' },
           { data: 'cantidad' },
           { data: 'precio' }
        ]
     });    



});

