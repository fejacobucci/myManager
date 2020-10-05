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

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\"><title>listaProjetos</title><link rel=\"stylesheet\" href=\"/estatico/assets/bootstrap/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/fontawesome-all.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/font-awesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/ionicons.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/fontawesome5-overrides.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Custom-Card.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar-1.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar-2.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Features-Boxed.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/gradient-navbar-1.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/gradient-navbar.css\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Lista-Productos-Canito.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Steps-Progressbar.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/styles.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/untitled.css\"></head><body style=\"width: auto;height: auto;\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-dark navbar-expand-md\" id=\"app-navbar\" style=\"margin: 5px;width: auto;height: auto;padding: 1px;\"><div class=\"container-fluid\"><a class=\"navbar-brand\" href=\"#\"><i class=\"icon ion-ios-infinite\" id=\"brand-logo\"></i></a><button data-toggle=\"collapse\" class=\"navbar-toggler\" data-target=\"#navcol-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navcol-1\"><ul class=\"nav navbar-nav ml-auto\"><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link active\" href=\"/homel\">Home</a></li><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" href=\"#\">Meus Dados</a></li><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" href=\"#\">Logout</a></li></ul></div></div></nav><div><div class=\"container\"><div class=\"row\"><div class=\"col-md-6\"><h1>Lista Projetos</h1></div><div class=\"col-md-6 col-lg-5 text-right\" style=\"width: auto;height: auto;margin: 1px;padding: 1px;\"><button class=\"btn btn-primary\" type=\"button\">Nov Projeto&nbsp;<i class=\"fa fa-plus\"></i></button></div></div></div></div><div><div class=\"container\"><div class=\"row\"><div class=\"col-md-6 col-lg-5\" style=\"width: auto;height: auto;padding: 1px;\"><div class=\"table-responsive\"><table class=\"table\"><thead><tr><th>Projetos</th></tr></thead><tbody>");

  var for__57 = 0;

  marko_forEach(data.projetos, function(projetos) {
    var keyscope__58 = "[" + ((for__57++) + "]");

    out.w("<tr><td value($escapeXml(projetos.id))>" +
      marko_escapeXml(projetos.titulo) +
      "</td></tr>");
  });

  out.w("</tbody></table></div></div><div class=\"col-md-6\"><div class=\"row\"><div class=\"col\"><div class=\"steps-progressbar\"><strong>Etapas do Projeto</strong><ul><li class=\"previous\">Item 1</li><li class=\"active\">Item 2</li><li>Item 3</li><li>Item 4</li></ul></div></div></div><div class=\"row\"><div class=\"col\"></div></div><div class=\"row\"><div class=\"col\"><div class=\"card\"><strong>Detalhes</strong><div class=\"card-header\"><a class=\"btn header-arrow-btn\" role=\"button\" data-toggle=\"collapse\" href=\"#detailed-view\"><i class=\"fa fa-chevron-right\"></i><i class=\"fa fa-chevron-down\"></i></a><span>Sample-Card</span><div class=\"btn-group custom-btngrp\" role=\"group\"><button class=\"btn btn-outline-primary\" type=\"button\"><i class=\"fa fa-tasks\"></i><span>Editar</span></button><button class=\"btn btn-outline-danger\" type=\"button\"><i class=\"fa fa-trash\"></i><span>Deletar</span></button><div class=\"dropdown btn-group no-arrow\" role=\"group\"><button class=\"btn btn-outline-primary dropdown-toggle border-primary\" data-toggle=\"dropdown\" aria-expanded=\"false\" type=\"button\"><i class=\"fas fa-ellipsis-h\" data-bs-hover-animate=\"rubberBand\"></i></button><div class=\"dropdown-menu dropdown-menu-right animated--fade-in\" role=\"menu\"><a class=\"dropdown-item\" role=\"presentation\" href=\"#\">Iniciar</a><a class=\"dropdown-item\" role=\"presentation\" href=\"#\">Pausar</a><div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" role=\"presentation\" href=\"#\">Encerrar</a></div></div></div></div><div class=\"card-body collapse show\" id=\"detailed-view\"><div><ul class=\"nav nav-tabs\"><li class=\"nav-item\"><a class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\" href=\"#tab-1\">Overview</a></li><li class=\"nav-item\"><a class=\"nav-link\" role=\"tab\" data-toggle=\"tab\" href=\"#tab-2\">Atividades</a></li></ul><div class=\"tab-content\"><div class=\"tab-pane active\" role=\"tabpanel\" id=\"tab-1\"><div class=\"row\"><div class=\"col-lg-6\"><div class=\"row\"><div class=\"col-md-4 label-col\"><label class=\"col-form-label\"><b>Dt.Inicio</b></label></div><div class=\"col-md-8 data-col\"><p>Sem data</p></div></div></div><div class=\"col-lg-6\"><div class=\"row\"><div class=\"col-md-4 label-col\"><label class=\"col-form-label\"><b>Dt.Fim</b></label></div><div class=\"col-md-8 data-col\"><p>Sem data</p></div></div></div></div><div class=\"row\"><div class=\"col-lg-6\"><div class=\"row\"><div class=\"col-md-4 label-col\"><label class=\"col-form-label\"><b>Prev.Inicio</b></label></div><div class=\"col-md-8 data-col\"><p>01/10/2020</p></div></div></div><div class=\"col-lg-6\"><div class=\"row\"><div class=\"col-md-4 label-col\"><label class=\"col-form-label\"><b>Prev.Fim</b></label></div><div class=\"col-md-8 data-col\"><p>22/10/2020</p></div></div></div></div></div><div class=\"tab-pane\" role=\"tabpanel\" id=\"tab-2\"><span>No Record Found</span></div></div></div></div></div></div></div></div></div></div></div><script src=\"/estatico/assets/js/jquery.min.js\"></script><script src=\"/estatico/assets/bootstrap/js/bootstrap.min.js\"></script><script src=\"/estatico/assets/js/bs-init.js\"></script><script src=\"/estatico/assets/js/novoProjeto.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "142");

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
