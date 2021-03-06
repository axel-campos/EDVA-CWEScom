<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.text.DateFormat"%>
<%@page import="java.sql.Timestamp"%>
<%@page import="modelo.dao.ContenidoDAO"%>
<%@page import="java.util.Arrays"%>
<%@page import="modelo.pojo.Usuario"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.Map"%>
<%@taglib uri="/struts-tags" prefix="s"%>
<%@page import="modelo.dao.ConexionDAO"%>
<%@page import="modelo.dao.UsuarioGrupoDAO"%>
<% Usuario usuario = (Usuario)request.getSession().getAttribute("usuario");%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>EDVA-CWEScom</title>
        <style>
            .carousel-content {
                color:black;
                display:flex;
                align-items:center;
            }
            #text-carousel {
              width: 100%;
              height: auto;
            }
        </style>
    </head>
    <body>
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">Notificaciones</h4>
                    </div>
                    <div class="modal-body">
                    <%
                        List<String> tipo = Arrays.asList("","Coordinador","Administrador","Colaborador");
                        UsuarioGrupoDAO usuarioGrupoDAO = new UsuarioGrupoDAO();
                        usuarioGrupoDAO.conectar();
                        String consulta = "SELECT ugl.*, g.nombre FROM usuariogrupo_log ugl " +
                                           "INNER JOIN grupo AS g ON g.token = ugl.token "+
                                           "WHERE ugl.correo = '" + usuario.getCorreo() + "'LIMIT 5;";
                        List<Map<String, Object>> tabla1 = usuarioGrupoDAO.consultaGenerica(consulta);
                        for(int i = 0; i < tabla1.size(); i++){
                            out.println("<li style='padding-left: 5%; list-style-type: none;'>");
                            Map<String, Object> columna = tabla1.get(i);
                            if(columna.get("aceptado_nuevo") == null){
                                out.println("Se rechazó tu solicitud al grupo " + columna.get("nombre") + "(" + columna.get("token") + ")");
                            }else if(columna.get("aceptado_anterior") == null){
                                out.println("Se envió tu solicitud al grupo " + columna.get("nombre") + "(" + columna.get("token") + ")");
                            }else{
                                if(columna.get("aceptado_anterior") != columna.get("aceptado_nuevo")){
                                    out.println("Se aceptó tu solicitud al grupo " + columna.get("nombre") + "(" + columna.get("token") + ")");
                                }else{
                                    out.println("Se rol en el grupo " + columna.get("nombre") + "(" + columna.get("token") + ") ha sido cambiado de: ");
                                    out.println("" + tipo.get((int)columna.get("idtipoUsuarioGrupo_anterior")) + " a " + tipo.get((int)columna.get("idtipoUsuarioGrupo_nuevo")));
                                }
                            }
                            out.println("</li>");
                        }
                        if(tabla1.size() == 0){
                            out.println("<li style='padding-left: 5%'><p style='font-family: verdana; font-size: 10px'>");
                            out.println("Únete a un grupo de trabajo para recibir notificaciones");
                            out.println("</p></li>");
                        }
                    %>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
        <!--nav class="navbar navbar-default sidebar" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>      
                </div>
                <div class="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
                    <ul class="nav navbar-nav" style="width: 100%">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Actualizaciones de grupos <span class="caret"></span><span style="font-size:16px;" class="pull-right hidden-xs showopacity glyphicon glyphicon-refresh"></span></a>
                            <ul class="dropdown-menu forAnimate" role="menu">
                                //Aquí iba el código :D:D:D:D:D:D:D:D
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Solicitudes <span class="caret"></span><span style="font-size:16px;" class="pull-right hidden-xs showopacity glyphicon glyphicon-list-alt"></span>
                            </a>
                            <ul class="dropdown-menu forAnimate" role="menu">
                                <div id="text-carousel" class="carousel slide" data-ride="carousel" data-interval="10000" style="width: 100%; height:100%;">
                                    <!-- Wrapper for slides ->
                                    <div class="row">
                                        <div class="col-xs-offset-3 col-xs-6">
                                            <div class="carousel-inner">
                                                <!%
                                                    String sql = "SELECT ug.correo, CONCAT_WS(' ',u.nombre,u.aPaterno,u.aMaterno) AS NombreCompleto, ug.token, g.nombre " +
                                                        "FROM usuariogrupo AS ug " +
                                                        "INNER JOIN usuario AS u ON ug.correo = u.correo " +
                                                        "INNER JOIN grupo AS g ON ug.token = g.token " +
                                                        "WHERE ug.token IN (SELECT ug2.token FROM usuariogrupo AS ug2 WHERE ug2.correo = '"+ usuario.getCorreo() +"'  AND ug2.idtipoUsuarioGrupo = 1) " +
                                                        "AND aceptado = 0 AND idtipoUsuarioGrupo = 3;";
                                                    List<Map<String, Object>> tabla = usuarioGrupoDAO.consultaGenerica(sql);
                                                    int i = 0;
                                                    for(i = 0; i < tabla.size(); i++){
                                                        Map<String, Object> columna = tabla.get(i);
                                                        if(i == 0){
                                                            out.println("<div class='item active' id='item"+ i +"'>");
                                                        }else{
                                                            out.println("<div class='item' id='item"+ i +"'>");
                                                        }
                                                        out.println("<div class='carousel-content'>");
                                                        out.println("<div>");
                                                        out.println("<p style='font-family: verdana; font-size: 10px'>Hay una solicitud del usuario: <br/> " + columna.get("NombreCompleto") +
                                                                    " (" +columna.get("correo")+ ") para el grupo: <br/> " + columna.get("nombre") + " ( " + columna.get("token") + ")</p>");
                                                        out.println("<br/><table style='width=100%'><tr>");
                                                        out.println("<td style=\"width=40%\" align=\"center\"><input id=\"modify_button\" type=\"button\" class=\"btn btn-success\" value=\"Aceptar\" "
                                                                    + "style=\"width: 60px; heigth: 15px; font-size: 9px\" onclick=\"responderSolicitud('"+columna.get("token")+"','"+columna.get("correo")+"','0','" + i + "')\"></td>" +
                                                                    "<td style=\"width=20\">&nbsp;&nbsp;</td>" +
                                                                    "<td style=\"width=40%\" align=\"center\"><input id=\"pwd_modify_button\" type=\"button\" class=\"btn btn-danger\" value=\"Rechazar\" "
                                                                    + "style=\"width: 60px; heigth: 15px; font-size: 9px\" onclick=\"responderSolicitud('"+columna.get("token")+"','"+columna.get("correo")+"','1','" + i + "')\"></td>");
                                                        out.println("</tr></table>");
                                                        out.println("</div>");
                                                        out.println("</div>");
                                                        out.println("</div>");
                                                    }
                                                    if(tabla.size() == 0){
                                                        out.println("<div class='item-active'>");
                                                        out.println("<div class='carousel-content'>");
                                                        out.println("<div>");
                                                        out.println("<p style='font-family: verdana; font-size: 11px'>No hay solicitudes que atender en tus grupos</p>");
                                                        out.println("</div>");
                                                        out.println("</div>");
                                                        out.println("</div>");
                                                        i = 1;
                                                    }
                                                    out.println("<input type='hidden' id='noItems' name='noItems' value='" + i +"'>");
                                                %>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Controls > 
                                    <a class="left carousel-control" href="#text-carousel" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left"></span>
                                    </a>
                                    <a class="right carousel-control" href="#text-carousel" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right"></span>
                                    </a>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav--> 
        <div id="contenidoGrupo">
        <button class="btn btn-link" data-toggle="modal" data-target="#myModal">Ver notificaciones</button>
        <br/>
        <%
            //Buscaremos los primeros diez contenidos de los grupos de este usuario
            ContenidoDAO contenidoDAO = new ContenidoDAO();
            contenidoDAO.conectar();
            Usuario usuarioS = null;
            String sqlContenidos = "SELECT con.*,ce.tiempoModificacion, ve.tiempoModificacion AS tiempoVotacion, e.nombre, g.nombre AS nombreGrupo, e.idEtapa, ce.version FROM contenido con " +
                " INNER JOIN etapa AS e ON e.idEtapa = (SELECT ce2.idEtapa FROM contenidoetapa ce2 WHERE con.idContenido = ce2.idContenido ORDER BY ce2.tiempoModificacion DESC LIMIT 1) " +
                " LEFT JOIN contenidoetapa AS ce ON ce.idContenido = con.idContenido AND ce.idEtapa = e.idEtapa AND ce.idEtapa != 6" +
                " LEFT JOIN contenidoetapa AS ve ON ve.idContenido = con.idContenido AND ve.idEtapa = 6" +
                " INNER JOIN grupo AS g ON g.token = con.token " +
                " INNER JOIN usuariogrupo AS ug ON g.token = ug.token";
            if(session.getAttribute("usuario") != null){
                usuarioS = (Usuario)session.getAttribute("usuario");
                if(usuarioS.getTipo() == 1){    //Significa que es admin DIOS
                    sqlContenidos += " WHERE ((ce.tiempoModificacion >= NOW() AND ce.liberado = 0) OR (ve.tiempoModificacion >= NOW() AND ve.liberado = 0)) GROUP BY idContenido;";
                }else{
                    sqlContenidos += " WHERE ug.correo = '" + usuario.getCorreo() + "' AND ug.aceptado = 1 AND ((ce.tiempoModificacion >= NOW() AND ce.liberado = 0) OR (ve.tiempoModificacion >= NOW() AND ve.liberado = 0)) GROUP BY idContenido;";
                }
            }
            List<Map<String, Object>> tablaContenidos = contenidoDAO.consultaGenerica(sqlContenidos);
            contenidoDAO.desconectar();
            if(tablaContenidos.isEmpty()){  //No tiene grupos asociados, o sus grupos no han comenzado a crear contenidos
        %>
            <div class="col-sm-12">
                <div class="panel panel-default">
                    <div class="panel-body" style="overflow: auto">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                    No hay contenidos activos para mostrar</a>
                                </h4>
                            </div>
                            <div id="collapse1" class="panel-collapse collapse">
                                <div class="panel-body">
                                    Para empezar a crear contenidos debe pertenecer a un grupo de trabajo, una vez
                                    dentro junto con su grupo podrá comenzar a crear los contenidos que desee.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <%
                }else{
                    DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                    for(int i = 0; i < tablaContenidos.size(); i++){
                        Map<String, Object> columna = tablaContenidos.get(i);
                        String idContenido = columna.get("idContenido").toString();
                        String nombreGrupo = (String)columna.get("nombreGrupo");
                        String token = (String)columna.get("token");
                        String titulo = (String)columna.get("titulo");
                        String tema = (String)columna.get("tema");
                        String descripcion = (String)columna.get("descripcion");
                        String idEtapa = columna.get("idEtapa").toString();
                        String etapa = "<br/>" + columna.get("nombre").toString() + " Versión " + columna.get("version").toString();
                        String version = "";
                        String nombrePanel = "default";
                        if(columna.get("version") != null){
                            version = columna.get("version").toString();
                        }
                        String idRoomTogetherJS = token + idContenido;
                        String fechaModificacion = "", fechaVotacion = "";
                        if(columna.get("tiempoModificacion") != null){
                            fechaModificacion = df.format((Timestamp)columna.get("tiempoModificacion"));
                            nombrePanel = "success";
                        }else{
                            fechaVotacion = df.format((Timestamp)columna.get("tiempoVotacion"));
                            nombrePanel = "info";
                        }
            %>
            <div class="col-sm-6">
                <div class="panel panel-default">
                    <div class="panel-body" style="overflow: auto">
                        <div class="panel panel-<%= nombrePanel%>">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse<%=i%>">
                                        Contenido: <%=titulo%> <br/> Grupo: <%=nombreGrupo%> <%=etapa%></a>
                                </h4>
                            </div>
                            <div id="collapse<%=i%>" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <b>Título: </b><%=titulo%> <br/>
                                    <b>Grupo: </b><%=nombreGrupo%> <br/>
                                    <b>Tema: </b><%=tema%> <br/>
                                    <b>Descripción: </b><%=descripcion%> <br/>
                                    <b>Fecha límite modificación de etapa: </b><%=fechaModificacion%> <br/>
                                    <b>Fecha límite votación de etapa: </b><%=fechaVotacion%> <br/>
                                    <br/>
                                    <% if(fechaModificacion != "") {
										etapa = columna.get("nombre").toString();%>
										<a onclick="cambiarContenidos('workspaceColaboracion?idRoom=<%=idRoomTogetherJS%>&etapa=<%=etapa%>&token=<%=token%>&titulo=<%=titulo%>&idContenido=<%=idContenido%>&idEtapa=<%=idEtapa%>&version=<%=version%>', '#contenido')" class="btn btn-success">Colaborar</a>
                                        <% }else if(!fechaVotacion.equals("")){%>
                                        <a onclick="mostrarVotacion('<%=idContenido%>','<%=token%>')" class="btn btn-success">Ir a votación</a>
                                    <% } %>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <%            
                    }
                }
            %>
        </div>
        <script src="${pageContext.request.contextPath}/js/paginas/principal.js"></script>
    </body>
</html>
