var MDOUtil = (function() {
	var MDOParser = (function() {
		var _VivenciaParser = (function() {
			function ObservacionParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var pregunta = contenido[1].value;
				var fenomenoAObservar = contenido[2].value;
				var posibleExplicacion = contenido[3].value;
				var posibleResultado = contenido[4].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					pregunta: pregunta,
					fenomenoAObservar: fenomenoAObservar,
					posibleExplicacion: posibleExplicacion,
					posibleResultado: posibleResultado
				};
			}
			
			function VisitaParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var lugarAVisitar = contenido[1].value;
				var tematica = contenido[2].value;
				var proposito = contenido[3].value;
				var objetivos = contenido[4].value;
				var entregables = contenido[5].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					lugarAVisitar: lugarAVisitar,
					tematica: tematica,
					proposito: proposito,
					objetivos: objetivos,
					entregables: entregables
				};
			}
			
			function DemostracionParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var objetivo = contenido[1].value;
				var materialNecesario = contenido[2].value;
				var procedimiento = contenido[3].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					objetivo: objetivo,
					materialNecesario: materialNecesario,
					procedimiento: procedimiento
				};
			}
			
			function EnsayoParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var descripcion = contenido[1].value;
				var tematica = contenido[2].value;
				var requisitos = contenido[3].value;
				var tiempoRealizacion = contenido[4].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					descripcion: descripcion,
					tematica: tematica,
					requisitos: requisitos,
					tiempoRealizacion: tiempoRealizacion
				};
			}
			
			function SimulacionParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var tematica = contenido[1].value;
				var descripcion = contenido[2].value;
				var roles = contenido[3].value;
				var materialNecesario = contenido[4].value;
				var procedimiento = contenido[5].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					tematica: tematica,
					descripcion: descripcion,
					roles: roles,
					materialNecesario: materialNecesario,
					procedimiento: procedimiento
				};
			}
			
			/**
			 * Analiza el nodo DOM pasado y lo convierte a un objeto JavaScript
			 * apropiado de la etapa MDO de Vivencia.
			 * @param {string} nombreArtefacto El nombreArtefacto del artefacto.
			 * @param {Node} contenido El nodo DOM del artefacto.
			 * @returns {Object} Un objeto que contiene la información ingresada
			 * sobre el artefacto.
			 */
			function _parse(nombreArtefacto, contenido) {
				if (nombreArtefacto.includes("observacion"))
					return ObservacionParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("visita"))
					return VisitaParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("demostracion"))
					return DemostracionParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("ensayo"))
					return EnsayoParser(nombreArtefacto, contenido);
				else
					return SimulacionParser(nombreArtefacto, contenido);
			}
			
			return {
				parse: _parse
			};
		})();
		
		var _ConceptualizacionParser = (function() {
			function PreguntasParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var descripcion = contenido[1].value;
				var tematica = contenido[2].value;
				var preguntas = contenido[3].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					descripcion: descripcion,
					tematica: tematica,
					preguntas: preguntas
				};
			}
			
			function TutoriaParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var descripcion = contenido[1].value;
				var objetivos = contenido[2].value;
				var temas = contenido[3].value;
				var materialApoyo = contenido[4].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					descripcion: descripcion,
					objetivos: objetivos,
					temas: temas,
					materialApoyo: materialApoyo
				};
			}
			
			function LluviaIdeasParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var descripcion = contenido[1].value;
				var tematica = contenido[2].value;
				var problematica = contenido[3].value;
				var preguntasClave = contenido[4].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					descripcion: descripcion,
					tematica: tematica,
					problematica: problematica,
					preguntasClave: preguntasClave
				};
			}
			
			function GrupoEstudioParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var descripcion = contenido[1].value;
				var tematica = contenido[2].value;
				var integrantes = contenido[3].value;
				var entregables = contenido[4].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					descripcion: descripcion,
					tematica: tematica,
					integrantes: integrantes,
					entregables: entregables
				};
			}
			
			/**
			 * Analiza el nodo DOM pasado y lo convierte a un objeto JavaScript
			 * apropiado de la etapa MDO de Conceptualización.
			 * @param {string} nombreArtefacto El nombreArtefacto del artefacto.
			 * @param {Node} contenido El nodo DOM del artefacto.
			 * @returns {Object} Un objeto que contiene la información ingresada
			 * sobre el artefacto.
			 */
			function _parse(nombreArtefacto, contenido) {
				if (nombreArtefacto.includes("preguntas"))
					return PreguntasParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("tutoria"))
					return TutoriaParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("lluviaideas"))
					return LluviaIdeasParser(nombreArtefacto, contenido);
				else
					return GrupoEstudioParser(nombreArtefacto, contenido);
			}
			
			return {
				parse: _parse
			};
		})();
		
		var _DocumentacionParser = (function() {
			function PeliculaParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var descripcion = contenido[1].value;
				var director = contenido[2].value;
				var productora = contenido[3].value;
				var pais = contenido[4].value;
				var anyo = contenido[5].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					descripcion: descripcion,
					director: director,
					productora: productora,
					pais: pais,
					anyo: anyo
				};
			}
			
			function VideoParser(nombreArtefacto, contenido) {
				var nombre = contenido[0].value;
				var descripcion = contenido[1].value;
				var url = contenido[2].value;
				
				return {
					artefacto: nombreArtefacto,
					nombre: nombre,
					descripcion: descripcion,
					url: url
				};
			}
			
			function LibroParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var autor = contenido[1].value;
				var anyo = contenido[2].value;
				var ciudad = contenido[3].value;
				var editorial = contenido[4].value;
				var volumen = contenido[5].value;
				
				return {
					artefacto: nombreArtefacto,
					autor: autor,
					titulo: titulo,
					anyo: anyo,
					ciudad: ciudad,
					editorial: editorial,
					volumen: volumen
				};
			}
			
			function ArticuloWebParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var autor = contenido[1].value;
				var descripcion = contenido[2].value;
				var nombreSitioWeb = contenido[3].value;
				var anyo = contenido[4].value;
				var mes = contenido[5].value;
				var dia = contenido[6].value;
				var url = contenido[7].value;
				
				return {
					artefacto: nombreArtefacto,
					autor: autor,
					titulo: titulo,
					descripcion: descripcion,
					nombreSitioWeb: nombreSitioWeb,
					anyo: anyo,
					mes: mes,
					dia: dia,
					url: url
				};
			}
			
			function ArticuloPDFParser(nombreArtefacto, contenido) {
				var nombre = contenido[0].value;
				var descripcion = contenido[1].value;
				var url = contenido[2].value;
				
				return {
					artefacto: nombreArtefacto,
					nombre: nombre,
					descripcion: descripcion,
					url: url
				};
			}
			
			function RevistaParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var autor = contenido[1].value;
				var descripcion = contenido[2].value;
				var nombreRevista = contenido[3].value;
				var anyo = contenido[4].value;
				var paginas = contenido[5].value;
				var volumen = contenido[6].value;
				var numero = contenido[7].value;
				
				return {
					artefacto: nombreArtefacto,
					autor: autor,
					titulo: titulo,
					descripcion: descripcion,
					nombreRevista: nombreRevista,
					anyo: anyo,
					paginas: paginas,
					volumen: volumen,
					numero: numero
				};
			}
			
			/**
			 * Analiza el nodo DOM pasado y lo convierte a un objeto JavaScript
			 * apropiado de la etapa MDO de Documentación.
			 * @param {string} nombreArtefacto El nombreArtefacto del artefacto.
			 * @param {Node} contenido El nodo DOM del artefacto.
			 * @returns {Object} Un objeto que contiene la información ingresada
			 * sobre el artefacto.
			 */
			function _parse(nombreArtefacto, contenido) {
				if (nombreArtefacto.includes("pelicula"))
					return PeliculaParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("video"))
					return VideoParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("libro"))
					return LibroParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("articuloweb"))
					return ArticuloWebParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("articulopdf"))
					return ArticuloPDFParser(nombreArtefacto, contenido);
				else
					return RevistaParser(nombreArtefacto, contenido);
			}
			
			return {
				parse: _parse
			};
		})();
		
		var _AplicacionParser = (function() {
			function EstudioCasoParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var descripcion = contenido[1].value;
				var objetivos = contenido[2].value;
				var problematica = contenido[3].value;
				var metodosInvestigacion = contenido[4].value;
				var entregables = contenido[5].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					descripcion: descripcion,
					objetivos: objetivos,
					problematica: problematica,
					metodosInvestigacion: metodosInvestigacion,
					entregables: entregables
				};
			}
			
			function MarcoLogicoParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var objetivoGeneral = contenido[1].value;
				var objetivosEspecificos = contenido[2].value;
				var resultados = contenido[3].value;
				var actividades = contenido[4].value;
				var indicadores = contenido[5].value;
				var fuentesVerificacion = contenido[6].value;
				var supuestos = contenido[7].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					objetivoGeneral: objetivoGeneral,
					objetivosEspecificos: objetivosEspecificos,
					resultados: resultados,
					actividades: actividades,
					indicadores: indicadores,
					fuentesVerificacion: fuentesVerificacion,
					supuestos: supuestos
				};
			}
			
			function MapaConceptualParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var descripcion = contenido[1].value;
				var tematica = contenido[2].value;
				var entregables = contenido[3].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					descripcion: descripcion,
					tematica: tematica,
					entregables: entregables
				};
			}
			
			function ArbolProblemasParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var descripcion = contenido[1].value;
				var problematicaCentral = contenido[2].value;
				var causas = contenido[3].value;
				var problemasSecundarios = contenido[4].value;
				var efectos = contenido[5].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					descripcion: descripcion,
					problematicaCentral: problematicaCentral,
					causas: causas,
					problemasSecundarios: problemasSecundarios,
					efectos: efectos
				};
			}
			
			function ProyectoInvestigacionParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var descripcion = contenido[1].value;
				var objetivos = contenido[2].value;
				var marcoTeorico = contenido[3].value;
				var hipotesis = contenido[4].value;
				var entregables = contenido[5].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					descripcion: descripcion,
					objetivos: objetivos,
					marcoTeorico: marcoTeorico,
					hipotesis: hipotesis,
					entregables: entregables
				};
			}
			
			function EjerciciosParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var descripcion = contenido[1].value;
				var tematica = contenido[2].value;
				var ejercicios = contenido[3].value;
				var entregables = contenido[4].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					descripcion: descripcion,
					tematica: tematica,
					ejercicios: ejercicios,
					entregables: entregables
				};
			}
			
			/**
			 * Analiza el nodo DOM pasado y lo convierte a un objeto JavaScript
			 * apropiado de la etapa MDO de Aplicación.
			 * @param {string} nombreArtefacto El nombreArtefacto del artefacto.
			 * @param {Node} contenido El nodo DOM del artefacto.
			 * @returns {Object} Un objeto que contiene la información ingresada
			 * sobre el artefacto.
			 */
			function _parse(nombreArtefacto, contenido) {
				if (nombreArtefacto.includes("estudiocaso"))
					return EstudioCasoParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("marcologico"))
					return MarcoLogicoParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("mapaconceptual"))
					return MapaConceptualParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("arbolproblemas"))
					return ArbolProblemasParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("proyectoinvestigacion"))
					return ProyectoInvestigacionParser(nombreArtefacto, contenido);
				else
					return EjerciciosParser(nombreArtefacto, contenido);
			}
			
			return {
				parse: _parse
			};
		})();
		
		var _AmpliacionParser = (function() {
			function ConferenciaParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var descripcion = contenido[1].value;
				var objetivos = contenido[2].value;
				var tematica = contenido[3].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					descripcion: descripcion,
					objetivos: objetivos,
					tematica: tematica
				};
			}
			
			function MesaRedondaParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var descripcion = contenido[1].value;
				var tematica = contenido[2].value;
				var numeroIntegrantes = contenido[3].value;
				var tiempoExposicion = contenido[4].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					descripcion: descripcion,
					tematica: tematica,
					numeroIntegrantes: numeroIntegrantes,
					tiempoExposicion: tiempoExposicion
				};
			}
			
			function PanelParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var descripcion = contenido[1].value;
				var tematica = contenido[2].value;
				var numeroIntegrantes = contenido[3].value;
				var tiempoExposicion = contenido[4].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					descripcion: descripcion,
					tematica: tematica,
					numeroIntegrantes: numeroIntegrantes,
					tiempoExposicion: tiempoExposicion
				};
			}
			
			function SimposioParser(nombreArtefacto, contenido) {
				var titulo = contenido[0].value;
				var descripcion = contenido[1].value;
				var tematica = contenido[2].value;
				var numeroIntegrantes = contenido[3].value;
				var tiempoExposicionPorIntegrante = contenido[4].value;
				
				return {
					artefacto: nombreArtefacto,
					titulo: titulo,
					descripcion: descripcion,
					tematica: tematica,
					numeroIntegrantes: numeroIntegrantes,
					tiempoExposicionPorIntegrante: tiempoExposicionPorIntegrante
				};
			}
			
			/**
			 * Analiza el nodo DOM pasado y lo convierte a un objeto JavaScript
			 * apropiado de la etapa MDO de Ampliación.
			 * @param {string} nombreArtefacto El nombreArtefacto del artefacto.
			 * @param {Node} contenido El nodo DOM del artefacto.
			 * @returns {Object} Un objeto que contiene la información ingresada
			 * sobre el artefacto.
			 */
			function _parse(nombreArtefacto, contenido) {
				if (nombreArtefacto.includes("conferencia"))
					return ConferenciaParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("mesaredonda"))
					return MesaRedondaParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("ampliacion-panel"))
					return PanelParser(nombreArtefacto, contenido);
				else
					return SimposioParser(nombreArtefacto, contenido);
			}
			
			return {
				parse: _parse
			};
		})();
		
		return {
			VivenciaParser: _VivenciaParser,
			ConceptualizacionParser: _ConceptualizacionParser,
			DocumentacionParser: _DocumentacionParser,
			AplicacionParser: _AplicacionParser,
			AmpliacionParser: _AmpliacionParser
		};
	})();
	
	/**
	 * Toma una lista del tipo NodeList y regresa un Array común de JavaScript.
	 * Se utiliza para convertir la NodeList de artefactos MDO en un arreglo de nodos
	 * fácil de manipular.
	 * 
	 * @param {NodeList} nodeList Una lista de artefactos, obtenidos preferentemente
	 * por document.querySelectorAll('.event').
	 * @returns {Array} Un arreglo común con los nodos de los artefactos MDO.
	 */
	function _parseNodeList(nodeList) {
		return [].slice.call(nodeList);
	}
	
	/**
	 * Obtiene un nodo DOM de algún artefacto MDO y regresa un objeto equivalente. El
	 * nodo debe ser de la clase .mdo-[etapa]-[artefacto]
	 * @param {Node} node Un objeto DOM Node.
	 * @returns {Object} Un objeto con los atributos del artefacto utilizado.
	 */
	function _parseNode(node) {
		var nombreArtefacto = node.className.split(" ")[0];
		var contenido = $(node).children("input");
		var tipoParser;
		
		if (nombreArtefacto.includes("vivencia"))
			tipoParser = "VivenciaParser";
		else if (nombreArtefacto.includes("conceptualizacion"))
			tipoParser = "ConceptualizacionParser";
		else if (nombreArtefacto.includes("documentacion"))
			tipoParser = "DocumentacionParser";
		else if (nombreArtefacto.includes("aplicacion"))
			tipoParser = "AplicacionParser";
		else
			tipoParser = "AmpliacionParser";
		
		return MDOParser[tipoParser].parse(nombreArtefacto, contenido);
	}
	
	/**
	 * Convierte una lista de nodos DOM en una lista de objetos JavaScript. Los nodos
	 * deben ser de la clase .mdo-[etapa]-[artefacto]
	 * 
	 * @param {Array} nodeArray Un arreglo JavaScript de objetos DOM Node.
	 * @returns {Object} Una lista de objetos-artefacto.
	 */
	function _getListaArtefactos(nodeArray) {
		return nodeArray.map(function(e) {
			return _parseNode(e);
		});
	}
	
	return {
		parseNodeList: _parseNodeList,
		getListaArtefactos: _getListaArtefactos
	};
})();

var MDOTimeline = (function() {
	var MDOParser = (function() {
		var _VivenciaParser = (function() {
			function ObservacionParser(contenido) {
				return "<li class='mdo-vivencia-observacion event'>\n\
							<h2 class='heading'>Observación</h2>\n\
							<label>Título:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.titulo + "' /><br>\n\
							<label>Pregunta:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.pregunta + "' /><br>\n\
							<label>Fenómeno a observar:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.fenomenoAObservar + "' /><br>\n\
							<label>Posible explicación:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.posibleExplicacion + "' /><br>\n\
							<label>Posible resultado:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.posibleResultado + "' />\n\
						</li>";
			}
			
			function VisitaParser(contenido) {
				return "<li class='mdo-vivencia-visita event'>\n\
							<h2 class='heading'>Visita</h2>\n\
							<label>Título:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.titulo + "' /><br>\n\
							<label>Lugar a visitar:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.lugarAVisitar + "' /><br>\n\
							<label>Temática del lugar:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.tematica + "' /><br>\n\
							<label>Propósito:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.proposito + "' /><br>\n\
							<label>Objetivos:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.objetivos + "' /><br>\n\
							<label>Entregables:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.entregables + "' />\n\
						</li>";
			}
			
			function DemostracionParser(contenido) {
				return "<li class='mdo-vivencia-demostracion event'>\n\
							<h2 class='heading'>Demostración</h2>\n\
							<label>Título:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.titulo + "' /><br>\n\
							<label>Objetivo:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.objetivo + "' /><br>\n\
							<label>Material necesario:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.materialNecesario + "' /><br>\n\
							<label>Procedimiento:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.procedimiento + "' />\n\
						</li>";
			}
			
			function EnsayoParser(contenido) {
				return "<li class='mdo-vivencia-ensayo event'>\n\
							<h2 class='heading'>Ensayo</h2>\n\
							<label>Título:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.titulo + "' /><br>\n\
							<label>Descripción:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.descripcion + "' /><br>\n\
							<label>Temática:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.tematica + "' /><br>\n\
							<label>Requisitos:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.requisitos + "' /><br>\n\
							<label>Tiempo de realización:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.tiempoRealizacion + "' />\n\
						</li>";
			}
			
			function SimulacionParser(contenido) {
				return "<li class='mdo-vivencia-simulacion event'>\n\
							<h2 class='heading'>Simulación</h2>\n\
							<label>Título:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.titulo + "' /><br>\n\
							<label>Temática:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.tematica + "' /><br>\n\
							<label>Descripción:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.descripcion + "' /><br>\n\
							<label>Roles:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.roles + "' /><br>\n\
							<label>Material necesario:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.materialNecesario + "' /><br>\n\
							<label>Procedimiento:</label>\n\
							<input type='text' class='form-control input-sm' value='" + contenido.procedimiento + "' />\n\
						</li>";
			}
			
			/**
			 * Analiza el artefacto pasado y lo convierte a una cadena HTML
			 * apropiado de la etapa MDO de Vivencia.
			 * @param {string} nombreArtefacto El nombre del artefacto.
			 * @param {object} contenido El artefacto como objeto JavaScript.
			 * @returns {string} Una cadena con la información del artefacto.
			 */
			function _parse(nombreArtefacto, contenido) {
				if (nombreArtefacto.includes("observacion"))
					return ObservacionParser(contenido);
				else if (nombreArtefacto.includes("visita"))
					return VisitaParser(contenido);
				else if (nombreArtefacto.includes("demostracion"))
					return DemostracionParser(contenido);
				else if (nombreArtefacto.includes("ensayo"))
					return EnsayoParser(contenido);
				else
					return SimulacionParser(contenido);
			}
			
			return {
				parse: _parse
			}
		})();
		
		var _ConceptualizacionParser = (function() {
			function DinamicaParser(contenido) {
				return "";
			}
			
			function PreguntasParser(contenido) {
				return "";
			}
			
			function TutoriaParser(contenido) {
				return "";
			}
			
			function LluviaIdeasParser(contenido) {
				return "";
			}
			
			function GrupoEstudioParser(contenido) {
				return "";
			}
			
			/**
			 * Analiza el artefacto pasado y lo convierte a una cadena HTML
			 * apropiado de la etapa MDO de Conceptualización.
			 * @param {string} nombreArtefacto El nombre del artefacto.
			 * @param {object} contenido El artefacto como objeto JavaScript.
			 * @returns {string} Una cadena con la información del artefacto.
			 */
			function _parse(nombreArtefacto, contenido) {
				if (nombreArtefacto.includes("dinamica"))
					return DinamicaParser(contenido);
				else if (nombreArtefacto.includes("preguntas"))
					return PreguntasParser(contenido);
				else if (nombreArtefacto.includes("tutoria"))
					return TutoriaParser(contenido);
				else if (nombreArtefacto.includes("lluviaideas"))
					return LluviaIdeasParser(contenido);
				else
					return GrupoEstudioParser(contenido);
			}
			
			return {
				parse: _parse
			}
		})();
		
		var _DocumentacionParser = (function() {
			function PeliculaParser(contenido) {
				return "";
			}
			
			function VideoParser(contenido) {
				return "";
			}
			
			function LibroParser(contenido) {
				return "";
			}
			
			function ArticuloWebParser(contenido) {
				return "";
			}
			
			function ArticuloPDFParser(contenido) {
				return "";
			}
			
			function RevistaParser(contenido) {
				return "";
			}
			
			/**
			 * Analiza el artefacto pasado y lo convierte a una cadena HTML
			 * apropiado de la etapa MDO de Documentación.
			 * @param {string} nombreArtefacto El nombre del artefacto.
			 * @param {object} contenido El artefacto como objeto JavaScript.
			 * @returns {string} Una cadena con la información del artefacto.
			 */
			function _parse(nombreArtefacto, contenido) {
				if (nombreArtefacto.includes("pelicula"))
					return PeliculaParser(contenido);
				else if (nombreArtefacto.includes("video"))
					return VideoParser(contenido);
				else if (nombreArtefacto.includes("libro"))
					return LibroParser(contenido);
				else if (nombreArtefacto.includes("articuloweb"))
					return ArticuloWebParser(contenido);
				else if (nombreArtefacto.includes("articulopdf"))
					return ArticuloPDFParser(contenido);
				else
					return RevistaParser(contenido);
			}
			
			return {
				parse: _parse
			}
		})();
		
		var _AplicacionParser = (function() {
			function EstudioCasosParser(contenido) {
				return "";
			}
			
			function MarcoLogicoParser(contenido) {
				return "";
			}
			
			function MapaConceptualParser(contenido) {
				return "";
			}
			
			function ArbolProblemasParser(contenido) {
				return "";
			}
			
			function ProyectoInvestigacionParser(contenido) {
				return "";
			}
			
			function ProyectoProduccionParser(contenido) {
				return "";
			}
			
			/**
			 * Analiza el artefacto pasado y lo convierte a una cadena HTML
			 * apropiado de la etapa MDO de Aplicación.
			 * @param {string} nombreArtefacto El nombre del artefacto.
			 * @param {object} contenido El artefacto como objeto JavaScript.
			 * @returns {string} Una cadena con la información del artefacto.
			 */
			function _parse(nombreArtefacto, contenido) {
				if (nombreArtefacto.includes("estudiocasos"))
					return EstudioCasosParser(contenido);
				else if (nombreArtefacto.includes("marcologico"))
					return MarcoLogicoParser(contenido);
				else if (nombreArtefacto.includes("mapaconceptual"))
					return MapaConceptualParser(contenido);
				else if (nombreArtefacto.includes("arbolproblemas"))
					return ArbolProblemasParser(contenido);
				else if (nombreArtefacto.includes("proyectoinvestigacion"))
					return ProyectoInvestigacionParser(contenido);
				else if (nombreArtefacto.includes("proyectoproduccion"))
					return ProyectoProduccionParser(contenido);
				else
					return EjerciciosParser(contenido);
			}
			
			return {
				parse: _parse
			}
		})();
		
		var _AmpliacionParser = (function() {
			function ConferenciaParser(contenido) {
				return "";
			}
			
			function MesaRedondaParser(contenido) {
				return "";
			}
			
			function PanelParser(contenido) {
				return "";
			}
			
			function SimposioParser(contenido) {
				return "";
			}
			
			/**
			 * Analiza el artefacto pasado y lo convierte a una cadena HTML
			 * apropiado de la etapa MDO de Ampliación.
			 * @param {string} nombreArtefacto El nombre del artefacto.
			 * @param {object} contenido El artefacto como objeto JavaScript.
			 * @returns {string} Una cadena con la información del artefacto.
			 */
			function _parse(nombreArtefacto, contenido) {
				if (nombreArtefacto.includes("conferencia"))
					return ConferenciaParser(contenido);
				else if (nombreArtefacto.includes("mesaredonda"))
					return MesaRedondaParser(contenido);
				else if (nombreArtefacto.includes("ampliacion-panel"))
					return PanelParser(contenido);
				else
					return SimposioParser(contenido);
			}
			
			return {
				parse: _parse
			}
		})();
		
		return {
			VivenciaParser: _VivenciaParser,
			ConceptualizacionParser: _ConceptualizacionParser,
			DocumentacionParser: _DocumentacionParser,
			AplicacionParser: _AplicacionParser,
			AmpliacionParser: _AmpliacionParser
		};
	})();
	
	/**
	 * Convierte un objeto JavaScript en su equivalente HTML, de acuerdo
	 * a su etapa.
	 * 
	 * @param {object} artefacto El artefacto
	 * @returns {string} Una cadena HTML con la información del artefacto.
	 */
	function _parseNode(artefacto) {
		var nombreArtefacto = artefacto.artefacto;
		var tipoParser;
		
		if (nombreArtefacto.includes("vivencia"))
			tipoParser = "VivenciaParser";
		else if (nombreArtefacto.includes("conceptualizacion"))
			tipoParser = "ConceptualizacionParser";
		else if (nombreArtefacto.includes("documentacion"))
			tipoParser = "DocumentacionParser";
		else if (nombreArtefacto.includes("aplicacion"))
			tipoParser = "AplicacionParser";
		else
			tipoParser = "AmpliacionParser";
		
		return MDOParser[tipoParser].parse(nombreArtefacto, artefacto);
	}
	
	/**
	 * Convierte los artefactos dados en nodos HTML
	 * que puedan insertarse directamente en el timeline.
	 * 
	 * @param {array} artefactos Un arreglo de objetos JavaScript,
	 * donde cada uno contiene un artefacto de la etapa.
	 * @returns {array} Un arreglo de nodos HTML, cada uno 
	 * contiene la información.
	 */
	function _obtenerNodos(artefactos) {
		return artefactos.map(function(e) {
			return _parseNode(e);
		});
	}
	
	return {
		parseNode: _parseNode,
		obtenerNodos: _obtenerNodos
	};
})();