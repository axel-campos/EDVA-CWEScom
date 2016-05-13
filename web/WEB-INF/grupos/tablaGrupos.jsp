<%@page import="modelo.pojo.Grupo"%>
<%@page import="modelo.dao.GrupoDAO"%>
<%@page import="java.util.stream.Collectors"%>
<%@page import="modelo.pojo.Usuario"%>
<%@page import="modelo.pojo.UsuarioGrupo"%>
<%@page import="java.util.List"%>
<%@page import="modelo.dao.UsuarioGrupoDAO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="sj" uri="/struts-jquery-tags"%>
<%@taglib uri="/struts-tags" prefix="s"%>
<%
   String cabeceras[] = {"Nombre","Descripción","Rol","Editar","Salir","Eliminar"}; 
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<script src="${pageContext.request.contextPath}/js/paginas/grupos/tablaGrupos.js"></script>
        <title>JSP Page</title>
    </head>
    <body>
		<s:if test="%{#respuesta == 1}" >
               
        </s:if>
        <s:if test="hasActionMessages()">
            <div class="alert alert-success">
                <s:actionmessage />
            </div>
        </s:if>
        <s:if test="hasActionErrors()">
            <div class="alert alert-danger">
                <s:actionerror />
            </div>
        </s:if>
        <a onclick="cambiarContenidos('AltaGroup','#contenido')" class="btn btn-link">Crear Nuevo Grupo</a>
        <table class="table table-hover">
            <thead>
                <tr>
                <%
                    for(int x = 0; x < cabeceras.length; x++){
                        out.println("<th>"+cabeceras[x]+"</th>");
                    }
                %>
                </tr>
            </thead>
            <tbody>
                <s:iterator value="resultados" var="resultado">
                    <tr>
                        <td><a onclick="cambiarContenidos('ListRoles?token=<s:property value="%{#resultado[3]}" />','#contenido');" class="btn btn-link"><s:property value="%{#resultado[0]}" /></a></td>
                        <td><s:property value="%{#resultado[1]}" /></td>
                        <td><s:property value="%{#resultado[2]}" /></td>
                        <td><a onclick="cambiarContenidos('AltaGroup?token=<s:property value="%{#resultado[3]}" />','#contenido')" style="cursor:pointer;">Editar</a></td>
                        <td><s:if test="%{#resultado[4] != 1}" >
                            <a onclick="cambiarContenidos('SalirGroup?token=<s:property value="%{#resultado[3]}" />','#contenido')" style="cursor:pointer;">Salir</a>    
                        </s:if></td>
                        <td><s:if test="%{#resultado[4] == 1}" >
                                <a href="#" onclick="verificarGrupoVacio('<s:property value="%{#resultado[3]}" />')">Eliminar</a>    
                        </s:if></td>
                    </tr>
                </s:iterator>
            </tbody>
        </table>
		<div id="contenidos_invisibles" style="display: none"></div>
    </body>
</html>