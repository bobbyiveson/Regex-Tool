const regexInput = document.getElementById('regex-input');
const testStringInput = document.getElementById('test-string-input');
const matchesOutput = document.getElementById('matches-output');

let regexObj;
let testString = '';

regexInput.addEventListener('input', handleRegexChange);
testStringInput.addEventListener('input', handleTestStringChange);

function handleRegexChange(event) {
  try {
    regexObj = new RegExp(event.target.value, 'gm');
    testRegexOnString();
  } catch (error) {
    while (matchesOutput.firstChild) {
      matchesOutput.removeChild(matchesOutput.firstChild);
    }
    createMatchElement("invalid regex");
    console.log('regex error');
  }
}

function handleTestStringChange(event) {
  testString = event.target.value;
  console.log('test', testString);
  testRegexOnString();
}

function testRegexOnString() {
  while (matchesOutput.firstChild) {
    matchesOutput.removeChild(matchesOutput.firstChild);
  }
  if (regexObj.test(testString)) {
    let matches = testString.match(regexObj);
    console.log('matches', matches);

    for (let match of matches) {
      createMatchElement(match);
    }
  }
  //   else {
  //     while (matchesOutput.firstChild) {
  //       matchesOutput.removeChild(matchesOutput.firstChild);
  //     }
  //     createMatchElement('no matches');
  //   }
}

function createMatchElement(match) {
  let div = document.createElement('div');
  let text = document.createTextNode(match);
  div.appendChild(text);
  matchesOutput.append(div);
}
