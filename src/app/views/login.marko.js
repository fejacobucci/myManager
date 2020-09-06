// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mymanager$1.0.0/src/app/views/login.marko",
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

  out.w("<html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\"><title>login</title><link rel=\"stylesheet\" href=\"bootstrap.min.css\"><link rel=\"stylesheet\" href=\"Login-Form-Dark.css\"><link rel=\"stylesheet\" href=\"styles.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"login-dark\"><form method=\"post\"><h2 class=\"sr-only\">Login Form</h2><div class=\"illustration\"><i class=\"icon ion-ios-locked-outline\"></i></div><div class=\"form-group\"><input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"Email\"></div><div class=\"form-group\"><input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\"></div><div class=\"form-group\"><button class=\"btn btn-primary btn-block\" type=\"submit\">Log In</button></div><a class=\"forgot\" href=\"#\">Forgot your email or password?</a></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "21");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/mymanager$1.0.0/src/app/views/login.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
