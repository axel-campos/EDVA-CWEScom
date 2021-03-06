package model.mdo.artifacts.vivencias;

import model.mdo.artifacts.MDOArtifact;

public class Ensayo implements MDOArtifact {

    private int paso;
    private String titulo;
    private String descripcion;
    private String tematica;
    private String requisitos;
    private String tiempoDeRealizacion;
    private String recurso;

    public Ensayo setTitulo(String titulo) {
        this.titulo = titulo;
        return this;
    }

    public Ensayo setDescripcion(String descripcion) {
        this.descripcion = descripcion;
        return this;
    }

    public Ensayo setTematica(String tematica) {
        this.tematica = tematica;
        return this;
    }

    public Ensayo setRequisitos(String requisitos) {
        this.requisitos = requisitos;
        return this;
    }

    public Ensayo setTiempoDeRealizacion(String tiempoDeRealizacion) {
        this.tiempoDeRealizacion = tiempoDeRealizacion;
        return this;
    }
    
    public Ensayo setRecurso(String recurso) {
        this.recurso = recurso;
        return this;
    }

    @Override
    public String toHtml(String htmlResource) {
        return String.format(
            "                                <div id=\"vivencias2_%s\">\n"
            + "                                    <span class=\"section\">Ensayo: <small>%s</small></span> \n"
            + "                                    <h2 class=\"StepTitle\">Descripción</h2>\n"
            + "                                    <p>%s</p>\n"
            + "                                    <h2 class=\"StepTitle\">Temática</h2>\n"
            + "                                    <p>%s</p>\n"
            + "                                    <h2 class=\"StepTitle\">Requisitos</h2>\n"
            + "                                    <p>%s</p>\n"
            + "                                    <h2 class=\"StepTitle\">Tiempo de realización</h2>\n"
            + "                                    <p>%s</p>\n"
                + htmlResource
            + "                                </div>", paso, titulo, descripcion, tematica, requisitos, tiempoDeRealizacion);
    }

    @Override
    public MDOArtifact setPaso(int paso) {
        this.paso = paso;
        return this;
    }
    
    @Override
    public String getResource() {
        return this.recurso;
    }
}
