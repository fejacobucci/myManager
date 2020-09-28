// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mymanager$1.0.0/src/app/views/horas/registraHora.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\"><title>apontamentoHoras</title><link rel=\"stylesheet\" href=\"/estatico/assets/bootstrap/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/font-awesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/ionicons.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar-1.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar-2.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Features-Boxed.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Formulario-Farmacia.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/gradient-navbar-1.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/gradient-navbar.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Lista-Productos-Canito.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/styles.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/untitled.css\"></head><body style=\"width: auto;height: auto;\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-dark navbar-expand-md\" id=\"app-navbar\" style=\"margin: 5px;width: auto;height: auto;padding: 1px;\"><div class=\"container-fluid\"><a class=\"navbar-brand\" href=\"#\"><i class=\"icon ion-ios-infinite\" id=\"brand-logo\"></i></a><button data-toggle=\"collapse\" class=\"navbar-toggler\" data-target=\"#navcol-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navcol-1\"><ul class=\"nav navbar-nav ml-auto\"><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link active\" href=\"/home\">Home</a></li><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" href=\"#\">Meus Dados</a></li><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" href=\"#\">Logout</a></li></ul></div></div></nav><div style=\"width: auto;height: auto;\"><div class=\"container\" style=\"width: auto;height: auto;\"><div class=\"row\" style=\"width: auto;height: auto;\"><div class=\"col-md-4 col-lg-10\" style=\"width: auto;height: auto;\"><h2 style=\"width: 343px;\">Apontamento de Horas</h2></div><div class=\"col-md-4 col-lg-2 d-flex justify-content-center align-items-center\" style=\"width: auto;height: auto;\"><button class=\"btn btn-primary d-flex align-items-center align-self-center\" type=\"button\" style=\"height: 38px;background-color: rgb(21,221,4);\">SALVAR&nbsp;<i class=\"fa fa-plus-circle\"></i></button></div></div></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-md-12\"><form method=\"post\"><div class=\"form-row\"><div class=\"col-md-12 col-lg-12\"><div class=\"form-group\"><div class=\"col-sm-4\"><label class=\"col-form-label\" style=\"font-family:Lato, sans-serif;font-weight:normal;\" for=\"nombre\">Projeto</label></div><div class=\"col-sm-8\" id=\"projeto\" name=\"projeto\"><select class=\"form-control\" id=\"projeto\" name=\"projeto\"><optgroup label=\"Projetos\">");

  var for__54 = 0;

  marko_forEach(data.projetos, function(projetos) {
    var keyscope__55 = "[" + ((for__54++) + "]");

    out.w("<option value=\"" +
      marko_escapeXmlAttr(projetos.id) +
      "\">" +
      marko_escapeXml(projetos.titulo) +
      "</option>");
  });

  out.w("</optgroup></select></div></div><div class=\"form-group\"><div class=\"col-sm-4\"><label class=\"col-form-label\" style=\"font-family:Lato, sans-serif;font-weight:normal;\" for=\"titular\">Tempo Utilizado (em horas)</label></div><div class=\"col-sm-4 col-lg-2\"><input class=\"form-control\" type=\"text\" id=\"tempoUtilizado\" name=\"titular\" style=\"width: auto;height: auto;\"></div><div class=\"col-sm-4\"><label style=\"font-family:Lato, sans-serif;font-weight:normal;\" for=\"nombre\">Atividade</label><select class=\"form-control\" id=\"tarefa\" name=\"tarefa\"><optgroup label=\"Tipos de atividades\">");

  var for__66 = 0;

  marko_forEach(data.atividades, function(atividade) {
    var keyscope__67 = "[" + ((for__66++) + "]");

    out.w("<option value=\"" +
      marko_escapeXmlAttr(atividade.id) +
      "\">" +
      marko_escapeXml(atividade.atividade) +
      "</option>");
  });

  out.w("</optgroup></select></div><div class=\"col-lg-2\"><label style=\"font-family:Lato, sans-serif;font-weight:normal;\" for=\"nombre\">Data da Execução</label><input class=\"form-control\" type=\"date\"></div><div class=\"col-lg-6\"><label style=\"font-family:Lato, sans-serif;font-weight:normal;\" for=\"nombre\">Descrição ou Observação</label><textarea class=\"form-control\" id=\"anotacao\" name=\"anotacao\"></textarea></div></div></div></div></form></div></div></div><script src=\"/estatico/assets/js/jquery.min.js\"></script><script src=\"/estatico/assets/bootstrap/js/bootstrap.min.js\"></script><script src=\"/estatico/assets/js/novoProjeto.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "78");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/mymanager$1.0.0/src/app/views/horas/registraHora.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
