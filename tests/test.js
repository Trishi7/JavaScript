const assert = require('assert');
const { execSync } = require('child_process');

describe('Task 1: Basic Syntax and DOM Manipulation', function () {
  it('should return correct output for Set 1', function () {
    const output = execSync('node tasks/student/task1/index.js "Alice" 5 true').toString();
    const expected = "Hello, my name is Alice and I am a student.\n".repeat(5).trim();
    assert.strictEqual(output.trim(), expected);
  });

  it('should return correct output for Set 2', function () {
    const output = execSync('node tasks/student/task1/index.js "Bob" 15 false').toString();
    const expected = "Hello, my name is Bob.";
    assert.strictEqual(output.trim(), expected);
  });

  it('should return correct output for Set 3', function () {
    const output = execSync('node tasks/student/task1/index.js "Charlie" 8 true').toString();
    const expected = "Hello, my name is Charlie and I am a student.\n".repeat(8).trim();
    assert.strictEqual(output.trim(), expected);
  });

  it('should toggle boolean correctly', function () {
    const output = execSync('node tasks/student/task1/index.js toggle').toString();
    const [firstToggle, secondToggle] = output.trim().split('\n');
    assert.strictEqual(firstToggle, 'true');
    assert.strictEqual(secondToggle, 'false');
  });
});
