$(document).ready(function () {
    
    console.log("Esto es una prueba ");


    $('#add-item').click(function (e) { 
        e.preventDefault();

        $('#myModal').modal('show');
        
    });


    $('#btnAgregar').click(function (e) { 
        e.preventDefault();

        
    var actions = '<a class="delete" title="Delete" data-toggle="tooltip"><i class="fa-solid fa-trash"></i></a>';
    actions += '<a class="btn edit pl-2" title="Edit"><i class="fa-solid fa-pen-to-square"></i></a>';
    
        var Descripcion = $('#DescripcionF').val(); 
        var Telefono =$('#TelefonoF').val(); 
        var Direccion = $('#DireccionF').val(); 

        var row = '<tr>' +
        '<td><input type="hidden" class="form-control" name="IdDetalle[]" >' +
        '<input type="text" class="form-control" name="Descripcion[]" required value="'+Descripcion+'" readonly></td>' +
        '<td><input type="text" class="form-control text-center" name="Telefono[]" required value="'+Telefono+'" readonly></td>'+
        '<td><input type="text" class="form-control text-center" name="Telefono[]" required value="'+Direccion+'" readonly></td>'
        ;
        row +='<td class="text-center">' + actions + '</td>';


        $("#tblDetalle").append(row);


        $('#myModal').modal('hide');

    });

});