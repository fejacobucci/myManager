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

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\"><title>apontamentoHoras</title><link rel=\"stylesheet\" href=\"/estatico/assets/bootstrap/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/font-awesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/ionicons.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar-1.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar-2.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Features-Boxed.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Formulario-Farmacia.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/gradient-navbar-1.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/gradient-navbar.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Lista-Productos-Canito.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/styles.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/untitled.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/calendario.css\"></head><body style=\"width: auto;height: auto;\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-dark navbar-expand-md\" id=\"app-navbar\" style=\"margin: 5px;width: auto;height: auto;padding: 1px;\"><div class=\"container-fluid\"><a class=\"navbar-brand\" href=\"/home\"><i class=\"icon ion-ios-infinite\" id=\"brand-logo\"></i></a><button data-toggle=\"collapse\" class=\"navbar-toggler\" data-target=\"#navcol-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navcol-1\"><ul class=\"nav navbar-nav ml-auto\"><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link active\" href=\"/home\">Home</a></li><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" href=\"#\">Meus Dados</a></li><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" href=\"#\">Logout</a></li></ul></div></div></nav><div style=\"width: auto;height: auto;\"><div class=\"container\" style=\"width: auto;height: auto;\"><div class=\"row\" style=\"width: auto;height: auto;\"><div class=\"col-md-4 col-lg-10\" style=\"width: auto;height: auto;\"><h2 style=\"width: 343px;\">Apontamento de Horas</h2></div></div></div></div><div><div class=\"container\"><div class=\"row\" style=\"margin: 1px;padding: 0px;\"><div class=\"col-md-5 col-lg-5 offset-lg-4\" style=\"margin: 5px;padding: 1px;\"><div class=\"table-responsive\" style=\"font-size: 9px;\"><table class=\"table\"><thead><tr><th>Dom</th><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sab</th></tr></thead> <tbody> <ol type=\"I\"><tr for|i| from=0 to=5><td for|j| from=0 to=7><p>---</p></td></tr> </ol> </tbody> </table></div></div><div class=\"col\"><form><div class=\"form-group\"><div class=\"form-row\"><div class=\"col\" style=\"width: 100%;\"><p>Cliente<select class=\"form-control\" id=\"cliente\" style=\"width: 100%;\" name=\"cliente\"><optgroup label=\"Clientes Cadastrados\"><option value=\"0\" selected>Selecione...</option>");

  var for__69 = 0;

  marko_forEach(data.clientes, function(clientes) {
    var keyscope__70 = "[" + ((for__69++) + "]");

    out.w("<option value=\"" +
      marko_escapeXmlAttr(clientes.id) +
      "\">" +
      marko_escapeXml(clientes.nome) +
      "</option>");
  });

  out.w("</optgroup></select></p></div></div><div class=\"form-row\"><div class=\"col\"><p>Projeto<select class=\"form-control\" id=\"projeto\" style=\"width: 100%;\" name=\"projeto\"><optgroup label=\"Projetos atribuídos à você\"><option value=\"0\" selected>Selecione...</option>");

  var for__78 = 0;

  marko_forEach(data.projetos, function(projetos) {
    var keyscope__79 = "[" + ((for__78++) + "]");

    out.w("<option value=\"" +
      marko_escapeXmlAttr(projetos.id) +
      "\">" +
      marko_escapeXml(projetos.titulo) +
      "</option>");
  });

  out.w("</optgroup></select></p></div></div><div class=\"form-row\"><div class=\"col\"><p>Atividade<select class=\"form-control\" id=\"atividade\" name=\"atividade\"><optgroup label=\"Clientes que você pode atender\"><option value=\"0\" selected>Selecione...</option>");

  var for__87 = 0;

  marko_forEach(data.atividades, function(atividades) {
    var keyscope__88 = "[" + ((for__87++) + "]");

    out.w("<option value=\"" +
      marko_escapeXmlAttr(atividades.id) +
      "\">" +
      marko_escapeXml(atividades.atividade) +
      "</option>");
  });

  out.w("</optgroup></select></p></div></div><div class=\"form-row\"><div class=\"col\"><p>Tempo(hrs)<input class=\"form-control\" type=\"text\" id=\"tempo\" style=\"width: 100%;\" name=\"tempo\"></p></div><div class=\"col\"><p>Data Execução<input class=\"form-control\" id=\"data\" type=\"date\" style=\"width: 100%;\" name=\"data\"></p></div></div><div class=\"form-row\"><div class=\"col\"><p>Descrição da Atividade<textarea class=\"form-control\" id=\"descricao\" style=\"width: 100%;\" name=\"descricao\"></textarea></p></div></div></div></form><button class=\"btn btn-primary d-flex align-items-center align-self-center\" type=\"button\" style=\"height: 38px;background-color: rgb(4,91,221);filter: invert(0%);\">SALVAR&nbsp;<i class=\"fa fa-plus-circle\"></i></button></div></div></div></div><script src=\"/estatico//estatico/assetsjs/jquery.min.js\"></script><script src=\"/estatico//estatico/assetsbootstrap/js/bootstrap.min.js\"></script><script src=\"/estatico//estatico/assetsjs/novoProjeto.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "106");

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
