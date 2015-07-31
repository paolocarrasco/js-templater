var root = this;

if (root.exports) {
  root = root.exports;
}

(function(namespace) {
  'use strict';

  var templates = {};

  function createTemplate(name, template) {
    templates[name] = template;
  }

  function getTemplate(name, valuesContainer) {
    var resultingText = templates[name];
    for(var key in valuesContainer) {
      var pattern = new RegExp('\{\{' + key + '\}\}');
      resultingText = resultingText.replace(pattern, valuesContainer[key]);
    }
    return resultingText;
  }

  namespace.templater = {
    create: createTemplate,
    get: getTemplate
  };

})(root);
