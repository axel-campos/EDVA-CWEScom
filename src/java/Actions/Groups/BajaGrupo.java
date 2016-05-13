package Actions.Groups;

import com.opensymphony.xwork2.ActionSupport;
import java.sql.SQLException;
import modelo.dao.GrupoDAO;
import modelo.dao.UsuarioDAO;
import modelo.dao.UsuarioGrupoDAO;
import modelo.pojo.Grupo;
import modelo.pojo.Usuario;
import modelo.pojo.UsuarioGrupo;

public class BajaGrupo extends ActionSupport implements interceptor.AuthenticatedUser{
    
    private Usuario usuario;
    private String token;
    
    public BajaGrupo() {
    }
    
    public String execute() throws Exception{
        
        GrupoDAO grupoDAO = new GrupoDAO();
        
        try{
            grupoDAO.conectar();
            grupoDAO.eliminar(new Grupo().setToken(token));
            grupoDAO.desconectar();
        }catch(RuntimeException e){
            return ERROR;
        }
        
        return SUCCESS;
    }

    public String baja() throws Exception{
        UsuarioGrupoDAO usuarioGrupoDAO = new UsuarioGrupoDAO();
        
        try{
            usuarioGrupoDAO.conectar();
            usuarioGrupoDAO.eliminar(new UsuarioGrupo().setCorreo(usuario.getCorreo()).setToken(token));
            usuarioGrupoDAO.desconectar();
        }catch(RuntimeException e){
            return ERROR;
        }
        
        return SUCCESS;
    }
    
    @Override
    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}