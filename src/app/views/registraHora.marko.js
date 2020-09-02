// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mymanager$1.0.0/src/app/views/registraHora.marko",
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

  out.w("<!DOCTYPE html><html lang=\"en\" id=\"teste\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>Document</title><link rel=\"stylesheet\" href=\"/estatico/estilo.css\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\"></head><body id=\"teste2\">");

  component_globals_tag({}, out);

  out.w("<div class=\"container-formulario-insert\" id=\"tabela\"><table class=\"table\"><thead><tr><tr>Horas Apontadas</tr><th scope=\"col\">Ordem</th><th scope=\"col\">Projeto</th><th scope=\"col\">Tempo</th></tr></thead><tbody><tr><th scope=\"row\">1</th><td>Alelo</td><td>8</td></tr><tr><th scope=\"row\">2</th><td>Porto Seguro</td><td>5</td></tr><tr><th scope=\"row\">3</th><td>BRB</td><td>10</td></tr><tr><th scope=\"row\">4</th><td>BRB</td><td>10</td></tr><tr><th scope=\"row\">5</th><td>BRB</td><td>10</td></tr><tr><th scope=\"row\">6</th><td>Alelo</td><td>8</td></tr><tr><th scope=\"row\">7</th><td>Porto Seguro</td><td>5</td></tr><tr><th scope=\"row\">8</th><td>BRB</td><td>10</td></tr><tr><th scope=\"row\">9</th><td>BRB</td><td>10</td></tr><tr><th scope=\"row\">10</th><td>BRB</td><td>10</td></tr></tbody></table></div><div class=\"container-formulario-insert\" id=\"form1\"><figure class=\"cx-fotos-portugal\"></figure><form><div class=\"form-group\"><label for=\"inputProjeto\">Nome do Projeto</label><select name=\"InputProjeto\" id=\"comboProjeto\"><option value=\"teste\">Alelo</option><option value=\"teste\">Porto Seguro</option><option value=\"teste\">BRB</option></select></div><div class=\"form-group\"><label for=\"inputProjeto\">Digite a tarefa</label><select name=\"InputProjeto\" id=\"ComboTarefa\"><option value=\"teste\">Implatação</option><option value=\"teste\">Alteração Verbalização</option><option value=\"teste\">Alteração de API </option></select></div><div class=\"form-group\"><label for=\"inputTempoUsado\">Tempo Usado</label><input type=\"text\" class=\"form-control\" maxlength=\"2\" id=\"inputTempoUsado\"></div><div class=\"form-group\"><label for=\"inputData\">Data</label><input type=\"date\" class=\"form-control\" id=\"inputData\"></div><div class=\"form-group\"><label for=\"exampleFormNotas\">Notas</label><textarea class=\"form-control\" id=\"exampleFormNotas\" maxlength=\"199\" rows=\"4\"></textarea></div><button type=\"submit\" class=\"btn btn-primary\">Salvar</button></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "83");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/mymanager$1.0.0/src/app/views/registraHora.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
