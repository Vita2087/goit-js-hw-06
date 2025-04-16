// Задача 2. Розрахунок калорій
// Напиши функцію calcAverageCalories(days),
// яка повертає середньодобове значення кількості калорій,
// які спортсмен споживав протягом тижня.
// Функція очікує один параметр: days — масив об'єктів.
// Кожен об'єкт описує день тижня та кількість калорій calories,
// спожитих спортсменом, у цей день.

function calcAverageCalories(days) {
  // const days = [
  //   { day: "nameDay1", calories: 0 },
  //   { day: "nameDay2", calories: 0 },
  // ];
  let totalCalories = 0;
  let totalDays = 0;

  for (const day of days) {
    totalCalories += day.calories;
    totalDays += 1;
  }

  if (totalDays === 0) {
    //
    return 0;
  }
  return totalCalories / totalDays; //якщо calcAverageCalories([])), то totalDays=0, а на 0 ділити не можна, буде NaN
}

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 2040 },
    { day: 'tuesday', calories: 2270 },
    { day: 'wednesday', calories: 2420 },
    { day: 'thursday', calories: 1900 },
    { day: 'friday', calories: 2370 },
    { day: 'saturday', calories: 2280 },
    { day: 'sunday', calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0