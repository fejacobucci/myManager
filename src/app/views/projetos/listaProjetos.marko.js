// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mymanager$1.0.0/src/app/views/projetos/listaProjetos.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\"><title>listaProjetos</title><link rel=\"stylesheet\" href=\"/estatico/assets/bootstrap/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/fontawesome-all.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/font-awesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/ionicons.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/fontawesome5-overrides.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar-1.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar-2.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Features-Boxed.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/gradient-navbar-1.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/gradient-navbar.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Lista-Productos-Canito.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/styles.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/untitled.css\"></head><body style=\"width: auto;height: auto;\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-dark navbar-expand-md\" id=\"app-navbar\" style=\"margin: 5px;width: auto;height: auto;padding: 1px;\"><div class=\"container-fluid\"><a class=\"navbar-brand\" href=\"#\"><i class=\"icon ion-ios-infinite\" id=\"brand-logo\"></i></a><button data-toggle=\"collapse\" class=\"navbar-toggler\" data-target=\"#navcol-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navcol-1\"><ul class=\"nav navbar-nav ml-auto\"><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link active\" href=\"/home\">Home</a></li><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" href=\"#\">Meus Dados</a></li><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" href=\"#\">Logout</a></li></ul></div></div></nav><div style=\"width: auto;height: auto;\"><div class=\"container\" style=\"width: auto;height: auto;\"><div class=\"row\" style=\"width: auto;height: auto;\"><div class=\"col-md-4\" style=\"width: auto;height: auto;\"><h2 style=\"width: 343px;\">Lista de Projetos</h2></div><div class=\"col-md-4 d-flex justify-content-end align-self-start\" style=\"width: auto;height: auto;\"><i class=\"fas fa-search d-xl-flex justify-content-xl-center align-items-xl-center\"></i><input class=\"border rounded d-xl-flex justify-content-xl-center align-items-xl-center search-field\" type=\"search\" id=\"search-field\" style=\"background-color: #eaeaea;width: 80%;height: 38px;padding: 0px;margin-left: 17px;\" name=\"search\"></div><div class=\"col-md-4 d-flex justify-content-center align-items-center\" style=\"width: auto;height: auto;\"><a class=\"btn btn-primary d-flex align-items-center align-self-center\" id=\"novoProjeto\" type=\"button\" href=\"/novoProjeto\" style=\"height: 38px;background-color: rgb(21,221,4);\" name=\"novoProjeto\">Novo Projeto&nbsp;<i class=\"fa fa-plus-circle\"></i></a></div></div><div class=\"row\"><div class=\"col-md-12\"><table id=\"example\" class=\"table table-striped table-bordered\" cellspacing=\"0\" width=\"100%\"><thead><tr><th>Título</th><th>Cliente</th><th>Status</th><th>Ações</th></tr></thead><tbody>");

  var for__56 = 0;

  marko_forEach(data.projetos, function(projetos) {
    var keyscope__57 = "[" + ((for__56++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(projetos.titulo) +
      "</td><td>" +
      marko_escapeXml(projetos.cliente) +
      "</td><td>" +
      marko_escapeXml(projetos.situacao) +
      "</td><td><button type=\"button\" class=\"btn btn-danger\"><i class=\"far fa-trash-alt d-xl-flex justify-content-xl-center align-items-xl-center\"></i></button><button type=\"button\" class=\"btn btn-primary\"><i class=\"fas fa-pencil-alt d-xl-flex justify-content-xl-center align-items-xl-center\"></i></button><button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-archive d-xl-flex justify-content-xl-center align-items-xl-center\"></i></button></td></tr>");
  });

  out.w("</tbody></table></div></div></div></div><script src=\"/estatico/assets/js/jquery.min.js\"></script><script src=\"/estatico/assets/bootstrap/js/bootstrap.min.js\"></script><script src=\"/estatico/assets/js/novoProjeto.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "72");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/mymanager$1.0.0/src/app/views/projetos/listaProjetos.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
