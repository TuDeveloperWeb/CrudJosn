$(document).ready(function () {
    
    console.log("Esto es una prueba ");


    $('#add-item').click(function (e) { 
        e.preventDefault();

        $('#myModal').modal('show');



        // var adjunto='<tr><td><input type="file" class="form-control-file" name="Documento[]" id="DocumentoF"></td></tr>';

        // $('#tbl_files').append(adjunto);

        // console.log(adjunto);
        // var archivo='<input type="file" class="form-control-file" name="Documento[]" id="DocumentoF">'
        
        

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
        '<input type="text" class="form-control" name="Detalle[]" required value="'+Descripcion+'" readonly></td>' +
        '<td><input type="text" class="form-control text-center" name="Telefono[]" required value="'+Telefono+'" readonly></td>'+
        '<td><input type="text" class="form-control text-center" name="Direccion[]" required value="'+Direccion+'" readonly></td>'
        ;
        row +='<td class="text-center">' + actions + '</td>';


        $("#tblDetalle").append(row);


        // var archivo = '<td>'+documento+'</td>';

        // console.log(archivo);

       // $("#tbl_files").append(documento);


       const inputFile1 = document.getElementById('DocumentoF');
       const inputFile2 = document.getElementById('Adjunto');

    //    document.getElementById


        const fileReader = new FileReader();
        fileReader.readAsText(inputFile1.files[0]);

        fileReader.addEventListener('load', () => {
            const file = new File([fileReader.result], inputFile1.files[0].name, {
            type: inputFile1.files[0].type
            });
            inputFile2.files = [file];
        });





        $('#myModal').modal('hide');
        $('#formulario').trigger('reset');




    });







});