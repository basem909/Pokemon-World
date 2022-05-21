const fs = require('fs');

describe('comments counter', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('dist/index.html');
  });
  test('check the number of comments on the pop window and compare with the comment counter show', () => {
    const section = document.querySelector('.pokemon-pop');
    const commentCounter = document.createElement('h3');
    const counterComment = (arr) => {
      section.append(commentCounter);
      commentCounter.innerHTML = `Counter (${arr.length})`;
      return commentCounter;
    };
    counterComment(['comment1', 'comment2', 'comment3']);
    expect(commentCounter.innerHTML).toEqual('Counter (3)');
  });
  test('check if injected to DOM', () => {
    const section = document.querySelector('.pokemon-pop');
    const commentCounter = document.createElement('h3');
    const newVariable = document.createElement('h3');
    newVariable.innerHTML = 'Counter (3)';
    const counterComment = (arr) => {
      section.append(commentCounter);
      commentCounter.innerHTML = `Counter (${arr.length})`;
      return commentCounter;
    };
    counterComment(['comment1', 'comment2', 'comment3']);
    expect(commentCounter).toEqual(newVariable);
  });
});