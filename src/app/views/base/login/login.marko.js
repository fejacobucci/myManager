// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mymanager$1.0.0/src/app/views/base/login/login.marko",
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

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\"><title>login</title><link rel=\"stylesheet\" href=\"/estatico/assets/bootstrap/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/fonts/ionicons.min.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/gradient-navbar-1.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/gradient-navbar.css\"><link rel=\"stylesheet\" href=\"/estatico/assets/css/styles.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-dark navbar-expand-md text-center\" id=\"app-navbar\" style=\"margin: 5px;padding: 5px;\"><div class=\"container-fluid\"><a class=\"navbar-brand\"><i class=\"icon ion-ios-infinite\" id=\"brand-logo\"></i></a></div></nav><div class=\"contenedorPrimario\"><div class=\"modal fade centro\" role=\"dialog\" tabindex=\"-1\" id=\"modalRegister\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h6 class=\"modal-title txtsGrises\">REGISTRAR </h6><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></div><div class=\"modal-body\"><h2 class=\"titulos\">Vamos criar um lgoin então! </h2><p class=\"text-left margenesEspacio\">Preencha os campos para registra novo acesso ao sistema </p><div class=\"col padMar\"><input type=\"text\" class=\"margenesEspacio inputLargo\" placeholder=\"Email \" required><input type=\"password\" class=\"margenesEspacio inputLargo\" placeholder=\"Create a password\" required><input type=\"password\" class=\"margenesEspacio inputLargo\" placeholder=\"Confirm your password\" required></div></div><div class=\"modal-footer\"><button class=\"btn btn-primary btn-Oscuro\" type=\"button\">REGISTRAR </button></div></div></div></div><div class=\"modal fade centro\" role=\"dialog\" tabindex=\"-1\" id=\"modalForgot\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h6 class=\"modal-title txtsGrises\">TROCAR A SENHA? </h6><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></div><div class=\"modal-body\"><h2 class=\"titulos\">Nova Senha: </h2><div class=\"col padMar\"><input type=\"text\" class=\"margenesEspacio inputLargo\" placeholder=\"Email \"></div><p class=\"text-center margenesEspacio\">Você recebera sua senha no e-mail cadastrado no sistema</p></div><div class=\"modal-footer\"><button class=\"btn btn-primary btn-Oscuro\" type=\"button\">ENVIAR </button></div></div></div></div><h1 class=\"padMar headerOmolds text-center\"> </h1><div class=\"row padMar margenesArriba10porCiento\"><div class=\"col-11 col-sm-7 col-md-5 col-lg-4 col-xl-3 text-center padMar mx-auto d-block colorCajasBlancas paddingCompleto15px\" style=\"margin: 5px;padding: 5px;\"><form method=\"post\" action=\"/login\"> <h1>Login</h1><hr><input type=\"email\" class=\"margenesEspacio inputLargo\" placeholder=\"Email\" required><input type=\"password\" class=\"margenesEspacio inputLargo\" placeholder=\"Password\" required><p class=\"margenesTxts\"><a data-toggle=\"modal\" data-target=\"#modalForgot\" href=\"#\" style=\"margin: 5px;padding: 5px;\">Esqueci minha senha</a></p><p class=\"margenesTxts\"><a data-toggle=\"modal\" data-target=\"#modalRegister\" href=\"#\" style=\"margin: 5px;padding: 5px;\">Não tenho acesso ainda!</a></p><button class=\"btn btn-primary mx-auto d-block\" type=\"submit\">ENTRAR </button></form></div> </div><footer class=\"footerOmoldsOscuro\"></footer></div><script src=\"/estatico/assets/js/jquery.min.js\"></script><script src=\"/estatico/assets/bootstrap/js/bootstrap.min.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "62");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/mymanager$1.0.0/src/app/views/base/login/login.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
