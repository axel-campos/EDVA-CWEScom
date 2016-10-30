package model.mdo.template;

import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.mdo.artifacts.MDOArtifact;
import model.mdo.artifacts.vivencias.*;
import org.apache.commons.io.IOUtils;

/**
 * Generador de plantillas HTML para la etapa de Vivencia.
 */
public class VivenciaTemplate implements MDOTemplate {

    private final String realPath;
    private final String titulo;
    private final String version;

    public VivenciaTemplate(String realPath, String titulo, String version) {
        this.realPath = realPath;
        this.titulo = titulo;
        this.version = version;

    }

    @Override
    public String generarPlantilla(List<String> html) {
        try {
            String template_string = IOUtils.toString(DocumentacionTemplate.class.getClass().getResourceAsStream(realPath), "UTF-8");
            return String.format(template_string, titulo, version, html.get(0),html.get(1));
        } catch (IOException ex) {
            Logger.getLogger(VivenciaTemplate.class.getName()).log(Level.SEVERE, null, ex);
            return String.format("Error creating template.");
        }

    }

    @Override
    public String generarStepHTML(int paso, MDOArtifact artifact) {
        String artifactString = "";
        if (artifact instanceof Demostracion) {
            artifactString = "Demostración";
        } else if (artifact instanceof Ensayo) {
            artifactString = "Ensayo";
        } else if (artifact instanceof Observacion) {
            artifactString = "Observación";
        } else if (artifact instanceof Simulacion) {
            artifactString = "Simulación";
        } else if (artifact instanceof Visita) {
            artifactString = "Visita";
        }

        return String.format("<li>\n"
            + "                          <a href=\"$s\">\n"
            + "                            <span class=\"step_no\">$s</span>\n"
            + "                          </a>\n"
            + "                        </li>", paso, artifactString);
    }
}
