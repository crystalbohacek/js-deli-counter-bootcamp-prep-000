function takeANumber(line, name){
    let number = line.length + 1;
    return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    katzDeliLine.splice(0, 1);
  }
}

function currentLine(katzDeliLine){
    var string = "The line is currently: "

    if (katzDeliLine.length === 0) {
      return "The line is currently empty."
    }

    for (var i = 0; i < katzDeliLine.length; i++){
      if (i === katzDeliLine.length-2){
        string += `${i+1}. ${katzDeliLine[i]} `
      } else {
        string += `${i+1}. ${katzDeliLine[i]}, `
      }
    }

    return string;
}
