// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mymanager$1.0.0/src/app/views/home.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\"><title>home</title><link rel=\"stylesheet\" href=\"/estatico/assets/bootstrap/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/font-awesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/ionicons.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar-1.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar-2.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Dark-NavBar.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Features-Boxed.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/gradient-navbar-1.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/gradient-navbar.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/Lista-Productos-Canito.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/styles.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/untitled.css\"></head><body style=\"width: auto;height: auto;\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-dark navbar-expand-md\" id=\"app-navbar\" style=\"margin: 5px;width: auto;height: auto;padding: 1px;\"><div class=\"container-fluid\"><a class=\"navbar-brand\" href=\"#\"><i class=\"icon ion-ios-infinite\" id=\"brand-logo\"></i></a><button data-toggle=\"collapse\" class=\"navbar-toggler\" data-target=\"#navcol-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navcol-1\"><ul class=\"nav navbar-nav ml-auto\"><li class=\"nav-item\" role=\"presentation\"></li><li class=\"nav-item\" role=\"presentation\"></li><li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" href=\"#\">Logout</a></li></ul></div></div></nav><div class=\"features-boxed\"><div class=\"container\"><div class=\"intro\"><h2 class=\"text-center\">Bem vindo !</h2><p class=\"text-center\"></p></div><div class=\"row justify-content-center features\"><div class=\"col-sm-6 col-md-5 col-lg-4 item\"><div class=\"box\"><i class=\"fa fa-clock-o icon\"></i><h3 class=\"name\">Apontamento de Horas</h3><p class=\"description\">Aqui você pode fazer seu apontamento de horas mensais.</p><a class=\"learn-more\" href=\"/apontamento\">Abrir &gt;&gt;</a></div></div><div class=\"col-sm-6 col-md-5 col-lg-4 item\"><div class=\"box\"><i class=\"fa fa-list-alt icon\"></i><h3 class=\"name\">Projetos Cadastrados</h3><p class=\"description\">Aqui você poderá ver os projetos cadastrados e atribuídos aos funcionários</p><a class=\"learn-more\" href=\"/listaProjetos\">Abrir &gt;&gt;</a></div></div><div class=\"col-sm-6 col-md-5 col-lg-4 item\"><div class=\"box\"><i class=\"fa fa-calendar icon\"></i><h3 class=\"name\">Relatório De Horas&nbsp;</h3><p class=\"description\">Aqui você poderá ver os dias que ja possuem apontamento de horas e o total de horas apontadas para cada dia,</p><a class=\"learn-more\" href=\"#\">Abrir &gt;&gt;</a></div></div><div class=\"col-sm-6 col-md-5 col-lg-4 item\"><div class=\"box\"><i class=\"fa fa-cogs icon\"></i><h3 class=\"name\">Configuração</h3><p class=\"description\">Configurações do seu usuário.</p><a class=\"learn-more\" href=\"#\">Abrir &gt;&gt;</a></div></div><div class=\"col-sm-6 col-md-5 col-lg-4 item\"><div class=\"box\"><i class=\"fa fa-tasks icon\"></i><h3 class=\"name\">Relatórios</h3><p class=\"description\">Relatórios e Dashboard referete aos projetos cadastrados e recursos</p><a id=\"relatorios\" class=\"learn-more\" href=\"/relatorios\" name=\"/relatorios\">Abrir &gt;&gt;</a></div></div><div class=\"col-sm-6 col-md-5 col-lg-4 item\"><div class=\"box\"><i class=\"fa fa-users icon\"></i><h3 class=\"name\">Administração de Dados</h3><p class=\"description\">Adicionar, Editar ou Remover usuários do sistema de controle</p><a class=\"learn-more\" href=\"#\">Abrir &gt;&gt;</a></div></div></div></div></div><script src=\"/estatico/assets/js/jquery.min.js\"></script><script src=\"/estatico/assets/bootstrap/js/bootstrap.min.js\"></script><script src=\"/estatico/assets/js/novoProjeto.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "76");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/mymanager$1.0.0/src/app/views/home.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
