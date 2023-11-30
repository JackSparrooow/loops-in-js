

function gradeSystem(grade) {
   if(grade >= 90 && grade <=100){
      return 'A';
   }else if(grade>= 70 && grade <=80 ){
      return 'B';
   }else if(grade >=50 && grade <=70){
      return 'C';
   }else if (grade >= 0 && grade <=50){
      return 'F'
   }else{
      return 'invalid grade'
   }
   
}

const numericalGrade = 40;
const letterGrade = gradeSystem(numericalGrade);
console.log(`Numerical Grade: ${numericalGrade}, letter Grade: ${letterGrade}`);
