// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mymanager$1.0.0/src/app/views/projetos/novoProjeto.marko",
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

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\"><title>novoProjeto</title><link rel=\"stylesheet\" href=\"/estatico/assets/bootstrap/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/font-awesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/ionicons.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar-1.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar-2.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Features-Boxed.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/gradient-navbar-1.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/gradient-navbar.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Lista-Productos-Canito.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/styles.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/untitled.css\"></head><body style=\"width: auto;height: auto;\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-dark navbar-expand-md\" id=\"app-navbar\" style=\"margin: 5px;width: auto;height: auto;padding: 1px;\"><div class=\"container-fluid\"><a class=\"navbar-brand\" href=\"/home\"><i class=\"icon ion-ios-infinite\" id=\"brand-logo\"></i></a><button data-toggle=\"collapse\" class=\"navbar-toggler\" data-target=\"#navcol-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navcol-1\" style=\"width: auto;height: auto;margin: 5px;padding: 1px;\"><ul class=\"nav navbar-nav ml-auto\"><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link active\" href=\"/home\">Home</a></li><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" href=\"#\">MeusDados</a></li><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" href=\"#\">Logout</a></li></ul></div></div></nav><div style=\"width: auto;height: auto;\"><form id=\"novoProjeto\" method=\"post\" action=\"/novoProjeto\"><div class=\"container\" style=\"width: auto;height: auto;\"><div class=\"form-row\" style=\"width: auto;height: auto;\"><div class=\"col-md-4\" style=\"width: auto;height: auto;\"><h2 style=\"width: 343px;\">Novo Projeto</h2></div><div class=\"col-md-4 d-flex justify-content-end align-self-start\" style=\"width: auto;height: auto;\"></div><div class=\"col-md-4 d-flex justify-content-center align-items-center\" style=\"width: auto;height: auto;\"><button class=\"btn btn-primary d-flex align-items-center align-self-center\" id=\"salvar\" type=\"submit\" data-target=\"#novoProjeto\" style=\"height: 38px;background-color: rgb(21,221,4);\">Salvar&nbsp;<i class=\"fa fa-plus-circle\"></i></button></div></div><div class=\"form-row\"><div class=\"col-md-12\"><form id=\"formProjeto\" action=\"/projeto\" method=\"post\"><div class=\"form-row\"><div class=\"col-sm-12\"><div class=\"form-group\"><label>Título</label><input class=\"form-control\" type=\"text\" id=\"titulo\" name=\"titulo\" placeholder=\"Um título para este projeto...\"></div></div></div><div class=\"form-row\"><div class=\"col-sm-6\"><div class=\"form-group\"><label>Cliente</label><select class=\"form-control\" id=\"cliente\" name=\"cliente\"><optgroup label=\"Clientes Cadastrados\"><option value=\"0\" selected>Selecione...</option>");

  var for__58 = 0;

  marko_forEach(data.clientes, function(clientes) {
    var keyscope__59 = "[" + ((for__58++) + "]");

    out.w("<option value=\"" +
      marko_escapeXmlAttr(clientes.id) +
      "\">" +
      marko_escapeXml(clientes.nome) +
      "</option>");
  });

  out.w("</optgroup></select></div></div><div class=\"col-sm-6\"><div class=\"form-group\"><label>Proposta</label><input class=\"form-control\" id=\"proposta\" type=\"text\" name=\"proposta\" placeholder=\"Proposta comercial incial...\"></div></div></div><div class=\"form-row\"><div class=\"col-sm-3\"><div class=\"form-group\"><label>Data Prevista para início</label><input class=\"form-control\" id=\"dataPrevInicio\" type=\"date\" name=\"dataPrevInicio\"></div></div><div class=\"col-sm-3\"><div class=\"form-group\"><label>Data Prevista para o término</label><input class=\"form-control\" id=\"dataPrevFim\" type=\"date\"></div></div><div class=\"col-sm-3\"><div class=\"form-group\"><label>Tempo estimado (em horas)</label><input class=\"form-control\" type=\"text\" id=\"tempoEstimado\" name=\"tempoEstimado\" placeholder=\"Tempo em horas...\"></div></div></div></form></div></div></div></form></div><script src=\"/estatico/assets/js/jquery.min.js\"></script><script src=\"/estatico/assets/bootstrap/js/bootstrap.min.js\"></script><script src=\"/estatico/assets/js/novoProjeto.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "81");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/mymanager$1.0.0/src/app/views/projetos/novoProjeto.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
