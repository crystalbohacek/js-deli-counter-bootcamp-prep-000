function takeANumber(line, name){
    let number = line.length + 1;
    return `Welcome ${name}. You are number ${number} in line.`
}

function nowServing(katzDeliLine){
    katzDeliLine.splice(0, 1);
}

function currentLine(katzDeliLine){
    var string = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length-1; i++){
       string += `${i+1}. ${katzDeliLine[i]}, `
    }
    return string;
}