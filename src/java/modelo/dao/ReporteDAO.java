package modelo.dao;

import java.sql.*;
import java.util.List;
import java.util.ArrayList;
import modelo.pojo.Reporte;

/**
 * Clase que sirve para realizar operaciones entre la base de datos EDVADB y la relación
 * Reporte, por medio del POJO Reporte.
 * 
 * @author kikemon
 */
public class ReporteDAO extends ConexionDAO<Reporte> {

	@Override
	public void registrar(Reporte registro) {
		String sql = "INSERT INTO Reporte VALUES (?, ?, ?)";
		
		try (PreparedStatement stmt = conn.prepareStatement(sql)) {
			stmt.setInt(1, registro.getIdReporte());
			stmt.setString(2, registro.getCausa());
			stmt.setInt(3, registro.getIdContenido());
			stmt.executeUpdate();
		} catch (SQLException | NullPointerException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	public void modificar(Reporte viejo, Reporte nuevo) {
		String sql = "UPDATE Reporte SET idReporte = ?, causa = ?, idContenido = ? "
			+ "WHERE idReporte = ?";
		
		try (PreparedStatement stmt = conn.prepareStatement(sql)) {
			stmt.setInt(1, nuevo.getIdReporte());
			stmt.setString(2, nuevo.getCausa());
			stmt.setInt(3, nuevo.getIdContenido());
			stmt.setInt(4, viejo.getIdReporte());
			stmt.executeUpdate();
		} catch (SQLException | NullPointerException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	public void eliminar(Reporte registro) {
		String sql = "DELETE FROM Reporte WHERE idReporte = ?";
		
		try (PreparedStatement stmt = conn.prepareStatement(sql)) {
			stmt.setInt(1, registro.getIdReporte());
			stmt.executeUpdate();
		} catch (SQLException | NullPointerException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	public Reporte buscar(Reporte registro) {
		String sql = "SELECT * FROM Reporte WHERE idReporte = ?";
		
		try (PreparedStatement stmt = conn.prepareStatement(sql)) {
			stmt.setInt(1, registro.getIdReporte());
			try (ResultSet rs = stmt.executeQuery()) {
				if (rs.next()) {
					return new Reporte()
						.setIdReporte(rs.getInt("idReporte"))
						.setCausa(rs.getString("causa"))
						.setIdContenido(rs.getInt("idContenido"));
				} else
					return null;
			}
		} catch (SQLException | NullPointerException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	public List<Reporte> buscarTodos() {
		String sql = "SELECT * FROM Reporte";
		List<Reporte> lista = new ArrayList<>();
		
		try (
			PreparedStatement stmt = conn.prepareStatement(sql);
			ResultSet rs = stmt.executeQuery();
		) {
			while (rs.next()) {
				lista.add(new Reporte()
					.setIdReporte(rs.getInt("idReporte"))
					.setCausa(rs.getString("causa"))
					.setIdContenido(rs.getInt("idContenido")));
			}
			
			return lista;
		} catch (SQLException | NullPointerException e) {
			throw new RuntimeException(e);
		}
	}
}