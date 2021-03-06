package model.mdo.parsers;

import java.util.Map;
import model.mdo.artifacts.MDOArtifact;
import model.mdo.artifacts.aplicacion.*;

/**
 * Clase que se encarga de convertir arreglos asociativos en objetos MDOArtifact
 * de la etapa de Aplicación.
 */
public class AplicacionParser implements MDOParser {

    private MDOArtifact getEstudioCaso(Map<String, Object> artefacto) {
        return new EstudioCaso()
            .setTitulo((String) artefacto.get("titulo"))
            .setDescripcion((String) artefacto.get("descripcion"))
            .setObjetivos((String) artefacto.get("objetivos"))
            .setProblematica((String) artefacto.get("problematica"))
            .setMetodosDeInvestigacion((String) artefacto.get("metodosInvestigacion"))
            .setEntregables((String) artefacto.get("entregables"))
            .setRecurso((String) artefacto.get("recurso"));
    }

    private MDOArtifact getMarcoLogico(Map<String, Object> artefacto) {
        return new MarcoLogico()
            .setTitulo((String) artefacto.get("titulo"))
            .setObjetivoGeneral((String) artefacto.get("objetivoGeneral"))
            .setObjetivosEspecificos((String) artefacto.get("objetivosEspecificos"))
            .setResultadosEsperados((String) artefacto.get("resultados"))
            .setActividadesARealizar((String) artefacto.get("actividades"))
            .setIndicadores((String) artefacto.get("indicadores"))
            .setFuentesDeVerificacion((String) artefacto.get("fuentesVerificacion"))
            .setSupuestos((String) artefacto.get("supuestos"))
            .setDescripcion((String) artefacto.get("descripcion"))
            .setRecurso((String) artefacto.get("recurso"));
    }

    private MDOArtifact getMapaConceptual(Map<String, Object> artefacto) {
        return new MapaConceptual()
            .setTitulo((String) artefacto.get("titulo"))
            .setDescripcion((String) artefacto.get("descripcion"))
            .setTematica((String) artefacto.get("tematica"))
            .setEntregables((String) artefacto.get("entregables"))
            .setRecurso((String) artefacto.get("recurso"));
    }

    private MDOArtifact getArbolProblemas(Map<String, Object> artefacto) {
        return new ArbolProblemas()
            .setTitulo((String) artefacto.get("titulo"))
            .setDescripcion((String) artefacto.get("descripcion"))
            .setProblematicaPrincipal((String) artefacto.get("problematicaCentral"))
            .setCausas((String) artefacto.get("causas"))
            .setProblemasSecundarios((String) artefacto.get("problemasSecundarios"))
            .setEfectos((String) artefacto.get("efectos"))
            .setRecurso((String) artefacto.get("recurso"));
    }

    private MDOArtifact getProyectoInvestigacion(Map<String, Object> artefacto) {
        return new ProyectoInvestigacion()
            .setTitulo((String) artefacto.get("titulo"))
            .setDescripcion((String) artefacto.get("descripcion"))
            .setObjetivos((String) artefacto.get("objetivos"))
            .setMarcoTeorico((String) artefacto.get("marcoTeorico"))
            .setHipotesis((String) artefacto.get("hipotesis"))
            .setEntregables((String) artefacto.get("entregables"))
            .setRecurso((String) artefacto.get("recurso"));
    }

    private MDOArtifact getEjercicios(Map<String, Object> artefacto) {
        return new Ejercicios()
            .setTitulo((String) artefacto.get("titulo"))
            .setDescripcion((String) artefacto.get("descripcion"))
            .setTematica((String) artefacto.get("tematica"))
            .setEjercicios((String) artefacto.get("ejercicios"))
            .setEntregables((String) artefacto.get("entregables"))
            .setRecurso((String) artefacto.get("recurso"));
    }

    @Override
    public MDOArtifact parse(Map<String, Object> artefacto) {
        String nombre = (String) artefacto.get("artefacto");

        if (nombre.contains("estudiocaso")) {
            return getEstudioCaso(artefacto);
        } else if (nombre.contains("marcologico")) {
            return getMarcoLogico(artefacto);
        } else if (nombre.contains("mapaconceptual")) {
            return getMapaConceptual(artefacto);
        } else if (nombre.contains("arbolproblemas")) {
            return getArbolProblemas(artefacto);
        } else if (nombre.contains("proyectoinvestigacion")) {
            return getProyectoInvestigacion(artefacto);
        } else {
            return getEjercicios(artefacto);
        }
    }
}
