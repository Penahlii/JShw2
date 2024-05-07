/*1. Valyuta konvertorunu yaz. İstifadəçi ABŞ dolları miqdarını daxil edir, çevirmək istədiyi
valyutu seçir: EUR, UAH və ya AZN, və cavab olaraq müvafiq məbləği alır.*/

const USAdollars = parseFloat(prompt("Enter the amount of US Dollars: "));
const choice = prompt(
  "Enter the currecny that you want to convert to (EUR, UAH, AZN): "
);
let EURexchangeRate = 0.93;
let UAHexchangeRate = 39.28;
let AZNexchangeRate = 1.7;
let finalConvert;
switch (choice) {
  case "EUR":
  case "eur":
    finalConvert = USAdollars * 0.93;
    break;
  case "UAH":
  case "uah":
    finalConvert = USAdollars * UAHexchangeRate;
    break;
  case "AZN":
  case "azn":
    finalConvert = USAdollars * AZNexchangeRate;
    break;
  default:
    finalConvert = USAdollars;
    break;
}

console.log(`Your ${USAdollars} dollars equals to ${finalConvert} ${choice}`);

/*2. İstifadəçidən alış-verişin məbləğini soruş və endirimlə ödəmə məbləğini göstər: 200-dən
300-ə qədər - 3% endirim, 300-dən 500-ə qədər - 5% endirim, 500-dən yuxarı - 7% endirim*/

let purchaseAmount = parseFloat(prompt("Enter the purchase amount:"));
let discountRate;
let discountedAmount;

if (purchaseAmount >= 200 && purchaseAmount < 300) {
  discountRate = 0.03;
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
  discountRate = 0.05;
} else if (purchaseAmount >= 500) {
  discountRate = 0.07;
} else {
  discountRate = 0;
}

discountedAmount = purchaseAmount - purchaseAmount * discountRate;

console.log(`Purchase Amount: $${purchaseAmount.toFixed(2)}`);
console.log(`Discounted Payment Amount: $${discountedAmount.toFixed(2)}`);

/*3. İstifadəçidən dairənin perimetri və kvadratın perimetri soruş və belə bir dairənin göstərilən
kvadrata sığacağını müəyyənləşdir.*/

let circlePerimeter = parseFloat(prompt("Enter the perimeter of the circle:"));
let squarePerimeter = parseFloat(prompt("Enter the perimeter of the square:"));
let circleDiameter = circlePerimeter / Math.PI;

if (squarePerimeter <= circleDiameter) {
  console.log("The circle can fit into the square.");
} else {
  console.log("The circle cannot fit into the square.");
}

/*4. İstifadəçiyə 3 sual ver, hər bir sual üç cavab variantı ilə. Hər doğru cavab üçün 2 bal verilir.
Suallardan sonra istifadəçiyə qazanılan bələdçi balı göstər*/

let questions = [
  {
    question: "What is the capital of Azerbaijan?",
    options: ["London", "Paris", "Baku"],
    answer: "Baku",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["Wa", "H2O", "Ho"],
    answer: "H2O",
  },
];

let score = 0;
for (let i = 0; i < questions.length; i++) {
  let answer = prompt(
    `${questions[i].question}\nA) ${questions[i].options[0]}\nB) ${questions[i].options[1]}\nC) ${questions[i].options[2]}`
  );

  if (answer && answer.toLowerCase() === questions[i].answer.toLowerCase()) {
    score += 2;
  }
}

console.log(`Your score: ${score}`);

/*5. Tarixi soruş (gün, ay, il) və onun ardınca gələn tarixi göstər. Növbəti ay, il və ya dövr
keçidini nəzərə alın, həmçinin dövr varlığını.*/

let day = parseInt(prompt("Enter the day:"));
let month = parseInt(prompt("Enter the month (1-12):"));
let year = parseInt(prompt("Enter the year:"));

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function daysInMonth(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(month)) {
    return 30;
  } else {
    return 31;
  }
}

day++;
if (day > daysInMonth(month, year)) {
  day = 1;
  month++;
  if (month > 12) {
    month = 1;
    year++;
  }
}

console.log(`Next date: ${day}-${month}-${year}`);

/*6. Həftə gününün çıxışını dövrə salın: "Həftə günü. Növbəti günü görmək istəyirsiniz?" və
istifadəçi OK düyməsini basana qədər belə davam edir.*/

let nextDay;

do {
  let today = new Date();
  let dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });

  console.log(`${dayOfWeek}. Növbəti günü görmək istəyirsiniz?`);
  nextDay = confirm("Növbəti günü görmək istəyirsiniz?");
} while (nextDay);

/*7. Bütün 2-dən 9-a qədər rəqəmlərin vurma cədvəlini göstərin. Hər rəqəmi 1-dən 10-a qədər
rəqəmlərlə vurun*/

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("\n");
}

/*Avtomobil haqqında məlumatları təsvir edən obyekt yaradın (istehsalçı, model, buraxılış ili,
orta sürət), və bu obyekt ilə işləmək üçün aşağıdakı funksiyaları yaradın.
1. Avtomobil haqqında məlumatları ekrana çıxaran funksiya.
2. Verilən məsafəni orta sürətlə qət edərkən lazım olan zamanı hesablamaq üçün funksiya
yaradın. Sürət əsasında hər 4 saatda bir sürücünün 1 saatlik istirahət etməsinin vacib
olduğunu nəzərə alın.*/

class Car {
  manufacturer;
  model;
  year;
  averageSpeed;

  constructor(manufacturer, model, year, averageSpeed) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.averageSpeed = averageSpeed;
  }

  displayInfo() {
    console.log(`Manufacturer: ${this.manufacturer}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Average Speed: ${this.averageSpeed} km/h`);
  }

  calculateTime(distance) {
    let hours = distance / this.averageSpeed;
    let restCount = Math.floor(hours / 4);
    let totalHours = hours + restCount;
    return totalHours;
  }
}
