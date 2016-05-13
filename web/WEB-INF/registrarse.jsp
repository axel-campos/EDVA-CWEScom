<%-- 
    Document   : registrarse
    Created on : 24/01/2016, 07:55:56 PM
    Author     : DanHv
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv=X-UA-Compatible content="IE=edge">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <title>Registrarse</title>
        <link href="${pageContext.request.contextPath}/css/bootstrap.css" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/css/datepicker.css" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/css/bootstrapValidator.css" rel="stylesheet">
    </head>
    <body>
		<h1>EDVA CWEScom</h1>
		<br>
        <div class="container">
            <div class="panel panel-default">
                <div class="panel-heading">Regístrate</div>
                <div class="panel-body">
                    <form id="registrarsefrm" method="POST" class="form-horizontal" action="registrarse">
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="nombre">Nombre(s)*</label>
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Tu(s) nombre(s)"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="paterno">Apellido Paterno*</label>
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="paterno" name="paterno" placeholder="Tu apellido paterno"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="materno">Apellido Materno</label>
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="materno" name="materno" placeholder="Tu apellido materno"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="cedula">Cédula</label>
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="cedula" name="cedula" placeholder="Tu cédula profesional"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="fechaN">Fecha de Nacimiento*</label>
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="fechaN" name="fechaN" placeholder="Tu fecha de nacimiento"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="correo">Correo Electrónico*</label>
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="correo" name="correo" placeholder="mi_correo@example.com"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="password">Contraseña*</label>
                            <div class="col-md-4">
                                <input type="password" class="form-control" id="password" name="password"/>
                            </div>
                        </div>              
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="pwd">Repita su contraseña</label>
                            <div class="col-md-4">
                                <input type="password" class="form-control" id="pwd" name="pwd"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-2">
                                <input type="submit" class="btn btn-success" value="Registrarse"/>
                                <button type="reset" class="btn btn-toolbar" value="Limpiar">Limpiar</button>
                                <a href="loginform" class="btn btn-link">¿Ya tienes una cuenta? Inicia sesión aquí</a>
                            </div>
                        </div>
                    </form>
                </div>
                <s:if test="hasActionErrors()">
                        <div class="alert alert-danger">
                                <s:actionerror />
                        </div>
                </s:if>
            </div>
        </div>
	<br>
        <script src="${pageContext.request.contextPath}/js/jquery/jquery-1.9.1.js"></script>
        <script src="${pageContext.request.contextPath}/js/bootstrap/bootstrap.min.js"></script>
        <script src="${pageContext.request.contextPath}/js/bootstrap/bootstrap-datepicker.js"></script>     
        <script src="${pageContext.request.contextPath}/js/bootstrap/bootstrapValidator.js"></script>
        <script src="${pageContext.request.contextPath}/js/paginas/registrar.js"></script>
    </body>
</html>