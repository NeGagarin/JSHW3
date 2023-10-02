// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

//findBiggestWord(str) 
function findBiggestWord(str) {
    const wordsArray = str.split(" ");
    let longestWord = "";

    for (const i of wordsArray) {
        if (i.length > longestWord.length) {
            longestWord=i;
        }
    }

    return longestWord;
    }
console.log(findBiggestWord(""));
// 2. написать функцию которая принимает число и возвращает перевернутое число

//function reverseNumber(number)

function reverseNumber(number) {
    number=number + '';
    return number.split('').reverse('').join('');
}
console.log(reverseNumber(""))

// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

 //function unique(str) 
 function unique(str) {
    const uniqueSimbols=new Set("");
    for(const simbol of str) {
        uniqueSimbols.add(simbol);
    }
    const uniqueStr=[...uniqueSimbols].join("");
    return uniqueStr

}
const uniqueSimbols = unique("");
console.log(unique(""));

// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

 function calcPoints(win,draw,loss) {
    const calcPoints=win*3+draw;
    return calcPoints;
}
console.log(calcPoints(""))
// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

 //function statisctics(arr);
 function statistics(arr) {
    if (arr.length === 0) {
      return {
        max: undefined,
        min: undefined,
        count: 0,
        average: undefined,
      };
    }
  
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const count = arr.length;
    const sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    const average = sum / count;
  
    return {
      max,
      min,
      count,
      average,
    };
  }
  
  const arr = [10, 59, 38, 27, 15, 67];
  const result = statistics(arr);
  console.log(result); 


// 6.Написать функцию которая принимает массив работников компании 

const workers = [
   { name: "Jimm", salary: 40000, department: "IT" },
   { name: "Bob", salary: 60300, department: "HR" },
   { name: "Stacy", salary: 15000, department: "IT" },
   { name: "Tom", salary: 55200, department: "DEVOPS" },
   { name: "Kate", salary: 25000, department: "IT" },
   { name: "John", salary: 40000, department: "HR" },
   { name: "Billy", salary: 60000, department: "DEVOPS" },
];
function findDepartmentWithHighestAverageSalary(workers) {
    
    const departmentStats = {};
  
    
    for (const worker of workers) {
      const { department, salary } = worker;
  
      
      if (departmentStats[department]) {
        departmentStats[department].totalSalary += salary;
        departmentStats[department].count += 1;
      } else {
        
        departmentStats[department] = {
          totalSalary: salary,
          count: 1,
        };
      }
    }
  
    let maxAverageSalary = 0;
    let departmentWithMaxAverageSalary = '';
  
    
    for (const department in departmentStats) {
      const { totalSalary, count } = departmentStats[department];
      const averageSalary = totalSalary / count;
  
      if (averageSalary > maxAverageSalary) {
        maxAverageSalary = averageSalary;
        departmentWithMaxAverageSalary = department;
      }
    }
  
    return {
      department: departmentWithMaxAverageSalary,
      average: maxAverageSalary,
    };
  }
console.log(findDepartmentWithHighestAverageSalary(workers));
// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 