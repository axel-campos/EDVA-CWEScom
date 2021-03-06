package modelo.dao;

import java.sql.*;
import java.util.List;
import java.util.ArrayList;
import modelo.pojo.Usuario;
import modelo.pojo.UsuarioGrupo;

/**
 * Clase que sirve para realizar operaciones entre la base de datos EDVADB y la relación
 * UsuarioGrupo, por medio del POJO UsuarioGrupo.
 * 
 * @author kikemon
 */
public class UsuarioGrupoDAO extends ConexionDAO<UsuarioGrupo> {

	@Override
	public void registrar(UsuarioGrupo registro) {
		String sql = "INSERT INTO usuariogrupo VALUES (?, ?, ?, ?)";
		
		try (PreparedStatement stmt = conn.prepareStatement(sql)) {
			stmt.setString(1, registro.getCorreo());
			stmt.setString(2, registro.getToken());
			stmt.setBoolean(3, registro.getAceptado());
			stmt.setInt(4, registro.getIdTipoUsuarioGrupo());
			stmt.executeUpdate();
		} catch (SQLException | NullPointerException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	public void modificar(UsuarioGrupo viejo, UsuarioGrupo nuevo) {
		String sql = "UPDATE usuariogrupo SET correo = ?, token = ?, aceptado = ?, "
			+ "idtipoUsuarioGrupo = ? WHERE correo = ? AND token = ?";

		try (PreparedStatement stmt = conn.prepareStatement(sql)) {
			stmt.setString(1, nuevo.getCorreo());
			stmt.setString(2, nuevo.getToken());
			stmt.setBoolean(3, nuevo.getAceptado());
			stmt.setInt(4, nuevo.getIdTipoUsuarioGrupo());
			stmt.setString(5, viejo.getCorreo());
			stmt.setString(6, viejo.getToken());
			stmt.executeUpdate();
		} catch (SQLException | NullPointerException e) {
            System.out.println(e);
			throw new RuntimeException(e);
		}
	}

	@Override
	public void eliminar(UsuarioGrupo registro) {
		String sql = "DELETE FROM usuariogrupo WHERE correo = ? AND token = ?";
		
		try (PreparedStatement stmt = conn.prepareStatement(sql)) {
			stmt.setString(1, registro.getCorreo());
			stmt.setString(2, registro.getToken());
			stmt.executeUpdate();
		} catch (SQLException | NullPointerException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	public UsuarioGrupo buscar(UsuarioGrupo registro) {
		String sql = "SELECT * FROM usuariogrupo WHERE correo = ? AND token = ?";
		
		try (PreparedStatement stmt = conn.prepareStatement(sql)) {
			stmt.setString(1, registro.getCorreo());
			stmt.setString(2, registro.getToken());
			try (ResultSet rs = stmt.executeQuery()) {
				if (rs.next()) {
					return new UsuarioGrupo()
						.setCorreo(rs.getString("correo"))
						.setToken(rs.getString("token"))
						.setAceptado(rs.getBoolean("aceptado"))
						.setIdTipoUsuarioGrupo(rs.getInt("idtipoUsuarioGrupo"));
				} else
					return null;
			}
		} catch (SQLException | NullPointerException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	public List<UsuarioGrupo> buscarTodos() {
		String sql = "SELECT * FROM usuariogrupo";
		List<UsuarioGrupo> lista = new ArrayList<>();
		
		try (
			PreparedStatement stmt = conn.prepareStatement(sql);
			ResultSet rs = stmt.executeQuery();
		) {
			while (rs.next()) {
				lista.add(new UsuarioGrupo()
					.setCorreo(rs.getString("correo"))
					.setToken(rs.getString("token"))
					.setAceptado(rs.getBoolean("aceptado"))
					.setIdTipoUsuarioGrupo(rs.getInt("idtipoUsuarioGrupo")));
			}
			
			return lista;
		} catch (SQLException | NullPointerException e) {
			throw new RuntimeException(e);
		}
	}
        
        public List<Usuario> getProfesoresDeGrupo(String token){
        String sql = "SELECT * FROM usuario u " + 
                    "INNER JOIN usuariogrupo AS ug ON ug.correo = u.correo " +
                    "WHERE ug.token = ?";
        List<Usuario> usuarios = new ArrayList<>();
        
        try(
            PreparedStatement stmt = conn.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery();
        ){
            while(rs.next()){
                usuarios.add(new Usuario()
                            .setCorreo(rs.getString("correo"))
                            .setAMaterno(rs.getString("aMaterno"))
                            .setAPaterno(rs.getString("aPaterno"))
                            .setNombre(rs.getString("nombre"))
                            .setCedula(rs.getString("cedula"))
                            .setTipo(rs.getInt("tipoUsuario"))
                            .setFechaNacimiento(rs.getDate("fechaNacimiento"))
                            .setPassword(rs.getString("password")));
            }
            return usuarios;
        }catch(SQLException | NullPointerException e){
            throw new RuntimeException(e);
        }
    }
}