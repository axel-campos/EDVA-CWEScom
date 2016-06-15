<%-- 
    Document   : accesoGrupo
    Created on : 15/05/2016, 10:24:33 PM
    Author     : Christian Campos
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Modificar información personal</title>
    </head>
    <body>
        
        <div class="container">
            <div class="panel panel-default">
                <div class="panel-heading">Buscar grupo</div>
                <div class="panel-body">
                    El token debe de ser proporcionado por el administrador del grupo a través de cualquier red social.
                    <form id="modificarfrm" method="POST" class="form-horizontal" action="modUsuario">             
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="token_group">Token de grupo</label>
                            <div class="col-md-4">
                                <input id="token" type="text" class="form-control" id="correo" name="correo" placeholder="AAA000000AAA(0)" />
                            </div>    
                        </div> 
                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-2" id="button-group">
                                <input id="search_button" type="button" class="btn btn-success" value="Buscar" onclick="buscarGrupoPorToken()">
                            </div>
                        </div>     
                    </form>
                </div>
                
                <div id="contenidos_invisibles" style="display: none"> </div>
                
                <s:if test="hasActionErrors()">
                    <div class="alert alert-danger">
                        <s:actionerror />
                    </div>
                </s:if>
            </div>
        </div>
    
    </body>
</html>
