// First require (e.g., load) our seneca.js module
var seneca = require('./seneca');

/**
 * Tests for seneca.isValidEmail()
 */
describe('seneca.isValidEmail()', function() {

  test('returns true for simple myseneca address', function() {
    var simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', function() {
    var gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });
  
  test('returns false for an argument that is not a string (int)', function() {
    var number = 123;
    expect(seneca.isValidEmail(number)).toBe(false);
  });
  
  test('returns false for an argument that is null', function() {
    var nullvalue = null;
    expect(seneca.isValidEmail(nullvalue)).toBe(false);
  });
  
  test('returns email address contains leading whitespace', function() {
    var leadingSpaceEmail = ' mshaw@myseneca.ca';
    expect(seneca.isValidEmail(leadingSpaceEmail)).toBe(false);
  });
  
  test('returns email address for a professor', function() {
    var professorEmail = 'peter.james@senecacollege.ca';
    expect(seneca.isValidEmail(professorEmail)).toBe(true);
  });
  
  test('returns old style Seneca email address', function() {
    var oldProfessorEmail = 'peter.james@senecac.on.ca';
    expect(seneca.isValidEmail(oldProfessorEmail)).toBe(true);
  });
  
});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', function() {

  test('adds @myseneca.ca to the end of name', function() {
    var name = "mshaw";
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });
  
  test('passes null as a parameter', function() {
    var name = null;
    expect(seneca.formatSenecaEmail(name)).toBe(false);
  });
  
  test('passes special characters as a part of the name', function() {
    var name = "james?anderson";
    expect(seneca.formatSenecaEmail(name)).toBe(false);
  });
  
  test('passes a name with a leading space', function() {
    var name = " janderson";
    expect(seneca.formatSenecaEmail(name)).toBe(false);
  });
  
  test('passes an integer instead of string value', function() {
    var name = 123;
    expect(seneca.formatSenecaEmail(name)).toBe(false);
  });

});