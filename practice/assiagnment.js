/* data 2
let MarkWheight = 78;
MarkWheight = 95;
let MarkHeight = 1.69;
MarkHeight = 1.88;
let JohnWheight = 92;
JohnWheight = 85;
let JohnHeight = 1.95;
JohnHeight = 1.76
const MarkBMI = MarkWheight / MarkHeight ** 2 / (MarkHeight * MarkHeight);
const JohnBMI = JohnWheight / JohnWheight ** 2 / (JohnHeight * JohnHeight);
const markHigherBMI = MarkBMI > JohnBMI;
console.log(MarkBMI, JohnBMI)
console.log(markHigherBMI) 
let MarkWheight = 78;
MarkWheight = 95;
let MarkHeight = 1.69;
MarkHeight = 1.88;
let JohnWheight = 92;
JohnWheight = 85;
let JohnHeight = 1.95;
JohnHeight = 1.76
const MarkBMI = MarkWheight / MarkHeight ** 2 / (MarkHeight * MarkHeight);
const JohnBMI = JohnWheight / JohnWheight ** 2 / (JohnHeight * JohnHeight);
if(MarkBMI > JohnBMI){
    console.log(`Mark (${MarkBMI}) has a higher BMI than John (${JohnBMI})`)
} else {
    console.log(`John (${JohnBMI}) has a higher BMI that Mark (${MarkBMI})`)
}
const dolphinsScore = (97 + 112 + 101) / 3;
const koalasScore = (109 + 95 + 106) / 3;
console.log(dolphinsScore, koalasScore)
if(dolphinsScore > koalasScore){
    console.log('Dolphins get the trophy 🏆')
} else if(dolphinsScore < koalasScore){
    console.log('Koalas get the trophy 🏆')
} else if(dolphinsScore && koalasScore < 100){
    console.log('No one gets the trophy')
} else if(dolphinsScore == koalasScore){
    console.log('both teams get a trophy 🏆🏆')
}
*/