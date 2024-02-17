// const data = new Date();
// console.log(data);
// console.log(Date);
// console.log(data.getDate());

// const dateValue = data.getDate();
// let hors = data.getHours();
// let min = data.getMinutes();
// let sec = data.getSeconds();

// alert(`Сьогодні час за київом ${hors} годин ${min} хв ${sec} сек`)


// const datel = Date.now()
// console.log(datel)

const yuerRef = document.querySelector(".yuer");
const montRef = document.querySelector(".mont");
const weekRef = document.querySelector(".week");
const dayRef = document.querySelector(".day");

const date = new Date();

const year = date.toLocaleDateString("Ug-UA", {year: "numeric"})
const mont = date.toLocaleDateString("Ug-UA", {month: "long"})
const week = date.toLocaleDateString("Ug-UA", {weekday: "long"})
const day = date.toLocaleDateString("Ug-UA", {day: "numeric"})

yuerRef.textContent = year;
montRef.textContent = mont;
weekRef.textContent = week;
dayRef.textContent = day;
// function getLastDayOfMonth(year, month) {
//     let m = month;
//     if (m > 7) {
//       m++;
//     }
//     if (m % 2 === 1) {
//       console.log(31);
//     } else if (
//       (year % 100 === 0 && year % 400 !== 0 && m === 2) ||
//       year % 4 !== 0
//     ) {
//       console.log(28);
//     } else if (m === 2) {
//       console.log(29);
//     } else {
//       console.log(30);
//     }
//   }
//   getLastDayOfMonth(2024, 2);