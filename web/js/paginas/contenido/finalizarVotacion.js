$(document).ready(function(){
    var form = "#finalizarVotacionForm";
    var action = "liberarContenido";
    
    $(form).bootstrapValidator({
        autofocus: true,
        elementClass: 'fv-form',
        icon:{
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon  glyphicon-refresh'
        },
        events: {
            formInit: 'init.form.fv',
            formError: 'err.form.fv',
            formSuccess: 'success.form.fv',
            fieldAdded: 'added.field.fv',
            fieldRemoved: 'removed.field.fv',
            fieldInit: 'init.field.fv',
            fieldError: 'err.field.fv',
            fieldSuccess: 'success.field.fv',
            fieldStatus: 'status.field.fv',
            localeChanged: 'changed.locale.fv',
            validatorError: 'err.validator.fv',
            validatorSuccess: 'success.validator.fv'
        }              
    }).on('success.form.fv', function(e, data){
        //Prevent form submission
        e.preventDefault();
        //Use Ajax to submit form data
        var datos = $(form).serialize();
        $.ajax({
            type: "POST",
            url: action,
            data: datos,
            success: function(data){
                var token = $("#token").val();
                mensajes("Su contenido ha sido publicado con éxito", 3);
                var target = "#contenido";
                $(target).html(data);
            },
            error: function(data){
                var token = $("#token").val();
                //Se actualiza la pantalla para que ya aparezcan las opciones de establecer tiempos de modificación
                cambiarContenidos('ListarContenidosGrupoAction?token='+token,'#contenido');
                mensajes("Ha ocurrido un problema al registrar su contenido", 3);
            }
        });
    });
});