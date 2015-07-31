var Chance = require('chance');
var expect = require('chai').expect;
var chance = new Chance();

describe('templater', function() {
  var templater;
  var key = chance.word();

  beforeEach(function() {
    templater = require('../templater').templater;
  });

  it('should store the template with the given name', function() {
    var template = chance.string();
    templater.create(key, template);
    expect(templater.get(key)).to.not.be.undefined;
  });

  describe('when there are arguments', function() {
    var templateWithArguments = 'Hello {{fullName}} from {{country}}';
    var resultingText;
    var name;

    beforeEach(function() {
      templater.create(key, templateWithArguments);
      name = chance.name();
    });

    describe('and all the arguments are set', function() {
      var country;

      beforeEach(function() {
        country = chance.country();
        resultingText = templater.get(key, {fullName: name, country: country});
      });

      it('should replace them in the template', function() {
        expect(resultingText).to.equal('Hello ' + name + ' from ' + country);
      });
    });

    describe('and some of the arguments are set', function() {

      beforeEach(function() {
        name = chance.name();
        resultingText = templater.get(key, {fullName: name});
      });

      it('should replace only the arguments set', function() {
        expect(resultingText).to.equal('Hello ' + name + ' from {{country}}');
      });
    });
  });
});
