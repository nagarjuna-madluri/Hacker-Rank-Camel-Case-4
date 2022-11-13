let makeSplit = (subString, operationChar) => {
  if (operationChar == 'M') {
    subString.length = subString.length - 2;
    var makeString = subString
      .toString()
      .replaceAll(',', '')
      .split(/(?=[A-Z])/);
    return makeString;
  }
  if (operationChar == 'C') {
    var makeString = subString
      .toString()
      .replaceAll(',', '')
      .split(/(?=[A-Z])/);
    return makeString.toString().replaceAll(',', ' ').toLowerCase();
  }
  if (operationChar == 'V') {
    var makeString = subString
      .toString()
      .replaceAll(',', '')
      .split(/(?=[A-Z])/);
    return makeString.toString().replaceAll(',', ' ').toLowerCase();
  }
};
let makeCombine = (subString, operationChar) => {
  if (operationChar == 'M') {
    var makeString = subString
      .toString()
      .replaceAll(',', '')
      .split(/(?=[A-Z])/);
    makeString = makeString.toString().replaceAll(',', '');
    makeString = makeString
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    return makeString + '()';
  }
  if (operationChar == 'C') {
    var makeString = subString
      .toString()
      .replaceAll(',', '')
      .split(/(?=[A-Z])/);
    makeString = makeString.toString().replaceAll(',', '');
    makeString = makeString
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

    var makeToarray = makeString.split('');
    makeToarray[0] = makeToarray[0].toUpperCase();
    return makeToarray.toString().replaceAll(',', '');
  }
  if (operationChar == 'V') {
    var makeString = subString
      .toString()
      .replaceAll(',', '')
      .split(/(?=[A-Z])/);
    makeString = makeString.toString().replaceAll(',', '');
    makeString = makeString
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    return makeString;
  }
};

let getStart = (stringData) => {
  var splitString = stringData.split('');
  var [startChar, ...remainig] = splitString;
  var [, , operationChar, , ...remainig] = splitString;

  if (startChar == 'S') {
    let arraForm = makeSplit(remainig, operationChar);
    return arraForm.toString().replaceAll(',', ' ').toLowerCase();
  }
  if (startChar == 'C') {
    let arraForm = makeCombine(remainig, operationChar);
    return arraForm;
  }
};

console.log(getStart('C;M;white sheet of paper'));
