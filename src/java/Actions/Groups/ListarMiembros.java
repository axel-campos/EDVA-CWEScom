package Actions.Groups;


import com.opensymphony.xwork2.ActionSupport;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import modelo.dao.UsuarioDAO;
import modelo.dao.UsuarioGrupoDAO;
import modelo.pojo.Usuario;
import modelo.pojo.UsuarioGrupo;
import org.apache.struts2.interceptor.SessionAware;

public class ListarMiembros extends ActionSupport implements interceptor.AuthenticatedUser, SessionAware {
    Map<String, Object> userSession;
    private String token;
    private List<UsuarioGrupo> usuariosGrupo;
    private List<String[]> results;
    private Usuario usuario;
    private boolean esCoordinador = false;
    private boolean esAdministrador = false;
    @Override
    public String execute() throws Exception {
        
        if(userSession.get("token") != null){
            this.token = (String)userSession.get("token");
            this.usuario = (Usuario)userSession.get("usuario");
        }
        UsuarioGrupoDAO usuarioGrupoDAO = new UsuarioGrupoDAO();
        usuarioGrupoDAO.conectar();
        results = new ArrayList();
        usuariosGrupo = usuarioGrupoDAO.buscarTodos().stream().filter(
                p -> p.getToken().equals(token)).filter(p -> p.getAceptado()).collect(Collectors.toList());
        for(UsuarioGrupo usergroup : usuariosGrupo){            
            UsuarioDAO usuarioDAO = new UsuarioDAO();
            usuarioDAO.conectar();
            Usuario user = usuarioDAO.buscar(new Usuario().setCorreo(usergroup.getCorreo()));
            String [] nombre = new String[2];
            nombre[0] = user.getNombre() + " " + user.getAPaterno();
            if(user.getAMaterno() != null){
                nombre[0] += " " + user.getAMaterno();
            }
            nombre[1] = user.getCorreo();
            /*nombre[2] = user.getFacebook() + "";
            nombre[3] = user.getAvatar();*/
            usuarioDAO.desconectar();
            results.add(nombre);
            //Ahora revisamos que rol tiene el profesor que accede al home de grupos, con el fin de mostrar los botones.
            if(usuario.getCorreo().equals(usergroup.getCorreo())){
                switch(usergroup.getIdTipoUsuarioGrupo()){
                    case 1://coordinador
                        esCoordinador = true;
                        esAdministrador = true;
                        break;
                    case 2://administrador
                        esAdministrador = true;
                        break;
                }
            }
        }
        usuarioGrupoDAO.desconectar();
        return SUCCESS;
    }

    @Override
    public void setSession(Map<String, Object> userSession) {
        this.userSession = userSession;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }   

    public Map<String, Object> getUserSession() {
        return userSession;
    }

    public void setUserSession(Map<String, Object> userSession) {
        this.userSession = userSession;
    }

    public List<UsuarioGrupo> getUsuariosGrupo() {
        return usuariosGrupo;
    }

    public void setUsuariosGrupo(List<UsuarioGrupo> usuariosGrupo) {
        this.usuariosGrupo = usuariosGrupo;
    }

    public List<String[]> getResults() {
        return results;
    }

    public void setResults(List<String[]> results) {
        this.results = results;
    }

    @Override
    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public boolean isEsCoordinador() {
        return esCoordinador;
    }

    public void setEsCoordinador(boolean esCoordinador) {
        this.esCoordinador = esCoordinador;
    }

    public boolean isEsAdministrador() {
        return esAdministrador;
    }

    public void setEsAdministrador(boolean esAdministrador) {
        this.esAdministrador = esAdministrador;
    }
    
    
}
