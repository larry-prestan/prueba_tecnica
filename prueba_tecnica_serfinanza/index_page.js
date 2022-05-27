$(function () {

    
    //obtenemos los datos del archivo json
    let paises = ``;
    fetch('./names.json')
        .then(resp =>{
            return resp.json();
        })
        .then(datas =>{
            for (const property in datas) {
                paises += `<option>${property}: ${datas[property]}</option>`
            }
            //llenamos la lista de paises
            $("#country_name").append(paises);
        })


    //solo muneros en campo celular//
    jQuery("#celular").on('input', function (evt) {
		jQuery(this).val(jQuery(this).val().replace(/[^0-9]/g, ''));
	});
    //informamos que el campo celular solo recibira numeros
    $("#celular").mouseenter(function () { 
        $(this).attr("placeholder","Solo se permiten numeros");
    });
    $("#celular").mouseleave(function () { 
        $(this).attr("placeholder","Celular");
    });

    //funcion para validar correo electronico
    function validar_correo(){
        var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        if (regex.test($('#correo').val().trim())) {
        return true;
        } else {
        return false;
        }
    };

    //boton agregar//
    $("#btn-agregar").click(function (e) { 
        if(validar_correo()==true){
            datos = $("#form-contacto").serialize();
            $.ajax({
                type: "post",
                url: "./backend/agregar_contacto.php",
                data: datos,
                success: function (res) {
                    if(res==1){
                        alert("Contacto agregado!!!");
                        $("#form-contacto")[0].reset();
                    }else{
                        alert("contacto no se pudo agregar ingrese nuevamente los datos!!");
                        $("#form-contacto")[0].reset();
                    }
                }
            });
        }else{
            alert("direccion de correo no valida. verifique los datos..!!");
        }
        e.preventDefault();
        
    });
    

});