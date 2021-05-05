// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mymanager$1.0.0/src/app/views/base/erros/404.marko",
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

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>SB Admin 2 - Cadastro de Produto</title><link href=\"/estatico/css/all.min.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i\" rel=\"stylesheet\"><link href=\"/estatico/css/sb-admin-2.min.css\" rel=\"stylesheet\" type=\"text/css\"></head><body id=\"page-top\">");

  component_globals_tag({}, out);

  out.w("<div id=\"wrapper\"><ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\"><a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"index.html\"><div class=\"sidebar-brand-icon rotate-n-15\"><i class=\"fas fa-laugh-wink\"></i></div><div class=\"sidebar-brand-text mx-3\">SB Admin <sup>2</sup></div></a><hr class=\"sidebar-divider my-0\"><li class=\"nav-item\"><a class=\"nav-link\" href=\"/dashboard\"><i class=\"fas fa-fw fa-tachometer-alt\"></i><span>Dashboard</span></a></li><hr class=\"sidebar-divider\"><div class=\"sidebar-heading\">Materiais</div><li class=\"nav-item\"><a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\"><i class=\"fas fa-fw fa-cog\"></i><span>ESTOQUE</span></a><div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\"><div class=\"bg-white py-2 collapse-inner rounded\"><a class=\"collapse-item\" href=\"/estoque\">Relatorio</a><a class=\"collapse-item\" href=\"/produto\">Produto</a><a class=\"collapse-item\" href=\"/pedido\">Pedido</a><a class=\"collapse-item\" href=\"/cadProd\">Cadastro de Equipamento</a><a class=\"collapse-item\" href=\"/cadProd\">Saída de Equipamento</a><a class=\"collapse-item\" href=\"/cadProd\">Baixa de Estoque</a><a class=\"collapse-item\" href=\"/cadProd\">Inventário</a></div></div></li><li class=\"nav-item\"><a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseUtilities\" aria-expanded=\"true\" aria-controls=\"collapseUtilities\"><i class=\"fas fa-fw fa-wrench\"></i><span>Utilidades</span></a><div id=\"collapseUtilities\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\"><div class=\"bg-white py-2 collapse-inner rounded\"><h6 class=\"collapse-header\">Documentação Clientes:</h6><a class=\"collapse-item\" href=\"utilities-color.html\">Acessos</a><a class=\"collapse-item\" href=\"utilities-border.html\">Fluxos</a><h6 class=\"collapse-header\">Documentação DNK:</h6><a class=\"collapse-item\" href=\"utilities-border.html\">Horas Extras</a><a class=\"collapse-item\" href=\"utilities-border.html\">Informativos</a><a class=\"collapse-item\" href=\"utilities-border.html\">Agendas</a></div></div></li><hr class=\"sidebar-divider\"></ul><div id=\"content-wrapper\" class=\"d-flex flex-column\"><div id=\"content\"><nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\"><button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\"><i class=\"fa fa-bars\"></i></button><ul class=\"navbar-nav ml-auto\"><li class=\"nav-item dropdown no-arrow d-sm-none\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fas fa-search fa-fw\"></i></a><div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\" aria-labelledby=\"searchDropdown\"><form class=\"form-inline mr-auto w-100 navbar-search\"><div class=\"input-group\"><input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\"><div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\"><i class=\"fas fa-search fa-sm\"></i></button></div></div></form></div></li><li class=\"nav-item dropdown no-arrow mx-1\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"alertsDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fas fa-bell fa-fw\"></i><span class=\"badge badge-danger badge-counter\">3+</span></a><div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"alertsDropdown\"><h6 class=\"dropdown-header\">Central de Novidades</h6><a class=\"dropdown-item d-flex align-items-center\" href=\"#\"><div class=\"mr-3\"><div class=\"icon-circle bg-primary\"><i class=\"fas fa-file-alt text-white\"></i></div></div><div><div class=\"small text-gray-500\">Agosto 12, 2019</div><span class=\"font-weight-bold\">Um novo modelo de Site</span></div></a><a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Show All Alerts</a></div></li><li class=\"nav-item dropdown no-arrow mx-1\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"messagesDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fas fa-envelope fa-fw\"></i><span class=\"badge badge-danger badge-counter\">7</span></a><div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"messagesDropdown\"><h6 class=\"dropdown-header\">Central de Mensagens</h6><a class=\"dropdown-item d-flex align-items-center\" href=\"#\"><div class=\"dropdown-list-image mr-3\"><img class=\"rounded-circle\" src=\"https://source.unsplash.com/fn_BT9fwg_E/60x60\" alt=\"\"><div class=\"status-indicator bg-success\"></div></div><div class=\"font-weight-bold\"><div class=\"text-truncate\">Oi, Você possui saldo com a Ambev... Bora beber com a gente!.</div><div class=\"small text-gray-500\">Mina da AMBEV · há 58m</div></div></a><a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Read More Messages</a></div></li><div class=\"topbar-divider d-none d-sm-block\"></div><li class=\"nav-item dropdown no-arrow\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">USUARIO DEMO</span><img class=\"img-profile rounded-circle\" src=\"/estatico/img/usuarios/33822314846.jpg\" alt=\"\"></a><div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\"><a class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i> Perfil</a><a class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i> Configurações</a><a class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i> Atividades</a><div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\"><i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i> Logout</a></div></li></ul></nav><div class=\"container-fluid\"><div class=\"text-center\"><div class=\"error mx-auto\" data-text=\"404\">404</div><p class=\"lead text-gray-800 mb-5\">Página Não Encontrada</p><p class=\"text-gray-500 mb-0\">Parece que encontramos uma falha na MATRIX...</p><a href=\"/login\">&larr; Back to Login</a></div></div></div><footer class=\"sticky-footer bg-white\"><div class=\"container my-auto\"><div class=\"copyright text-center my-auto\"><span>Copyright &copy; SB ADMIN 2019</span></div></div></footer></div></div><a class=\"scroll-to-top rounded\" href=\"#page-top\"><i class=\"fas fa-angle-up\"></i></a><div class=\"modal fade\" id=\"logoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\" id=\"exampleModalLabel\">Ja está indo embora?</h5><button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></div><div class=\"modal-body\">Clieque em \"Logout\" abaixo para encerrar sua sessão!</div><div class=\"modal-footer\"><button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancelar</button><a class=\"btn btn-primary\" href=\"login.html\">Logout</a></div></div></div></div><script src=\"/estatico/vendor/jquery/jquery.min.js\"></script><script src=\"/estatico/vendor/bootstrap/js/bootstrap.bundle.min.js\"></script><script src=\"/estatico/vendor/jquery-easing/jquery.easing.min.js\"></script><script src=\"/estatico/js/sb-admin-2.min.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "139");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/mymanager$1.0.0/src/app/views/base/erros/404.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };