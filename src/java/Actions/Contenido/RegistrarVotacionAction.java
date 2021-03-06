package Actions.Contenido;

import com.opensymphony.xwork2.ActionSupport;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import modelo.dao.UsuarioVotacionDAO;
import modelo.dao.VotacionDAO;
import modelo.pojo.Usuario;
import modelo.pojo.Votacion;
import org.apache.struts2.interceptor.SessionAware;

/**
 *
 * @author Víctor
 */
public class RegistrarVotacionAction extends ActionSupport implements SessionAware{
    
    private String etapa1;
    private String etapa2;
    private String etapa3;
    private String etapa4;
    private String etapa5;
    private String idContenido;
    private String modificar;
    private Usuario usuario;
    
    //Para el notify
    private String type;
    private String message;
    
    public RegistrarVotacionAction() {
    }
    
    @Override
    public void validate(){
        if(etapa1 == null || etapa1.trim().isEmpty()){
            addActionError("No se seleccionó ninguna versión de la etapa 1.");
        }
        if(etapa2 == null || etapa2.trim().isEmpty()){
            addActionError("No se seleccionó ninguna versión de la etapa 2.");
        }
        if(etapa3 == null || etapa3.trim().isEmpty()){
            addActionError("No se seleccionó ninguna versión de la etapa 3.");
        }
        if(etapa4 == null || etapa4.trim().isEmpty()){
            addActionError("No se seleccionó ninguna versión de la etapa 4.");
        }
        if(etapa5 == null || etapa5.trim().isEmpty()){
            addActionError("No se seleccionó ninguna versión de la etapa 5.");
        }
        if(idContenido == null || idContenido.trim().isEmpty()){
            addActionError("No ha recibido el parámetro del contenido.");
        }
    }
    
    public String execute() throws Exception {
        VotacionDAO votacionDAO = new VotacionDAO();
        UsuarioVotacionDAO usuarioVotacionDAO = new UsuarioVotacionDAO();
        try{
            votacionDAO.conectar();
            usuarioVotacionDAO.conectar();
            Votacion votacion = new Votacion();
            String buscarVotacionSQL = "SELECT * FROM votacion WHERE idContenido = " + idContenido;
            List<Map<String,Object>> buscarVotacion = votacionDAO.consultaGenerica(buscarVotacionSQL);
            if(buscarVotacion == null || buscarVotacion.isEmpty()){
                for(int i = 1; i < 6; i++){
                    votacion = new Votacion().setIdContenido(Integer.parseInt(idContenido))
                                                .setIdEtapa(Short.parseShort(i + ""));
                    System.out.println("Registrado");
                    votacionDAO.registrar(votacion);
                } 
            }
            System.out.println(modificar);
            if(modificar != null && !modificar.isEmpty() && modificar.equals("1")){
                for(int z = 1; z < 6; z++){
                     String deleteUsuarioVotacion = "DELETE FROM usuarioVotacion WHERE correo = '" + usuario.getCorreo() + "'"
                        + " AND idVotacion = (SELECT idVotacion FROM votacion WHERE idContenido = " + idContenido + " AND idEtapa = " + z + ")";
                     System.out.println(deleteUsuarioVotacion);
                     usuarioVotacionDAO.insercionGenerica(deleteUsuarioVotacion);
                }
            }
            String versiones[] = {etapa1, etapa2, etapa3, etapa4, etapa5};
            for(int x = 1; x<=5; x++){
                String queryInsercion = "INSERT INTO usuarioVotacion VALUES(" +
                     "(SELECT idVotacion FROM votacion WHERE idContenido =  " + idContenido + " AND idEtapa = " + x + ")" +
                     ",'" + usuario.getCorreo() + "', " + versiones[x - 1] + ")";
                usuarioVotacionDAO.insercionGenerica(queryInsercion);
            }
        }catch(Exception e){
            type = "danger";
            message = "Hubo un error al procesar la solicitud, inténtelo de nuevo.";
            return ERROR;
        }
        type = "success";
        message = "Se han registrado sus votos con éxito.";
        return SUCCESS;
    }

    public String getEtapa1() {
        return etapa1;
    }

    public void setEtapa1(String etapa1) {
        this.etapa1 = etapa1;
    }

    public String getEtapa2() {
        return etapa2;
    }

    public void setEtapa2(String etapa2) {
        this.etapa2 = etapa2;
    }

    public String getEtapa3() {
        return etapa3;
    }

    public void setEtapa3(String etapa3) {
        this.etapa3 = etapa3;
    }

    public String getEtapa4() {
        return etapa4;
    }

    public void setEtapa4(String etapa4) {
        this.etapa4 = etapa4;
    }

    public String getEtapa5() {
        return etapa5;
    }

    public void setEtapa5(String etapa5) {
        this.etapa5 = etapa5;
    }

    public String getIdContenido() {
        return idContenido;
    }

    public void setIdContenido(String idContenido) {
        this.idContenido = idContenido;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getModificar() {
        return modificar;
    }

    public void setModificar(String modificar) {
        this.modificar = modificar;
    }
    
    @Override
    public void setSession(Map<String, Object> map) {
        usuario = (Usuario)map.get("usuario");
    }
    
}
