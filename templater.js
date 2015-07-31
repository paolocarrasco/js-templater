// making this available for node and browser
var root = this;

if (root.exports) {
  root = root.exports;
}

/**
*
* Templater helps to create string templates and stores them in memory.
*
**/
(function(namespace) {
  'use strict';

  var templates = {};

  /**
  * It adds the template to the list of templates it handles.
  * name: this is how we are going to retrieve the template later on.
  * template: the text that has tokens to be replaced.
  **/
  function createTemplate(name, template) {
    templates[name] = template;
  }

  /**
  * Retrieves the template identified with the key and replace the tokens with the valuesContainer.
  * key: identifier of the template we want to retrieve.
  * valuesContainer: object with the values that will replace the tokens in the template. Each
  *     property should match a token.
  **/
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
