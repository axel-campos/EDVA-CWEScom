<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s"%>
<%@ page import="modelo.dao.GrupoDAO" %>
<%@ page import="modelo.dao.UsuarioDAO" %>
<%@ page import="modelo.pojo.Grupo" %>
<%@ page import="modelo.pojo.Usuario" %>
<%@ page import="modelo.dao.UsuarioGrupoDAO" %>
<%@ page import="modelo.pojo.UsuarioGrupo" %>
<% 
Grupo grupo = null;
List<Usuario> listaUsuario = null;
String nombre = "", descripcion = "", hiddenToken = "";
String opcion = "Crear", opcion2 = "Crear un nuevo grupo", token="";
if(request.getParameter("token") != null){
    opcion2 = "Modificar grupo";
    opcion = "Modificar";
    token = request.getParameter("token");
    grupo = new Grupo();
    GrupoDAO grupoDAO = new GrupoDAO();
    grupoDAO.conectar();
    grupo = grupoDAO.buscar(new Grupo().setToken(token));
    grupoDAO.desconectar();
    nombre = grupo.getNombre();
    descripcion = grupo.getDescripcion();
    hiddenToken = "<input type='hidden' id='token2' name='token2' value='" + token + "'/>";
}
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>EDVA</title>
    </head>
    <body onload="myfunction()">
        <div class="container">
            <div class="panel panel-default">
                <div class='panel-heading'><%= opcion2 %></div>
                <div class="panel-body">
                    <!--form id="altaGrupo" name="altaGrupo" class="form-horizontal" action="/" method="POST"-->
                    <form id="altaGrupo" name="altaGrupo" class="form-horizontal">
                    
                        <% if(request.getParameter("token") != null){ %>
                        <div class="form-group">
                            <label for="nombre" class="col-md-2 control-label">Token:</label>
                            <div class="col-md-4">
                                <input type="text" id="nombre" name="nombre" disabled="disabled" class="form-control" value="<%= token %>"/>
                            </div>
                        </div>
                        <% } %>
                        <div class="form-group">
                            <label for="nombre" class="col-md-2 control-label">Nombre del Grupo:</label>
                            <div class="col-md-4">
                                <input type="text" id="nombre" name="nombre" class="form-control" value="<%= nombre %>"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="descripcion" class="col-md-2 control-label">Descripción:</label>
                            <div class="col-md-4">
                                <textarea id="descripcion" class="form-control" rows="5" name="descripcion" style="resize: none;"><%= descripcion %></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-2">
                                <input type='submit' value='<%= opcion %>' class='btn btn-success' disabled/>
                                <input type="hidden" id="submit" name="submit" value="<%= opcion%>">
                            </div>
                        </div>
                        
                        <%= hiddenToken %>
                    </form>
                </div>                
                <s:if test="hasActionErrors()">
                        <div class="alert alert-danger">
                            <s:actionerror />
                        </div>
                </s:if>
                
            </div>
        </div>
        <script src="${pageContext.request.contextPath}/js/paginas/grupos/altaGrupo.js"></script>
    </body>
</html>