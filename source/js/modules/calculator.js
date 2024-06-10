const calculationForm = document.querySelector('.price');//секция с калькулятором
const inputField = document.querySelector('#currency');//поле ввода суммы в юанях
const currencies = document.querySelectorAll('.currency__item input');//валюты
const categories = document.querySelectorAll('.items__item input');//категории
const calculationResult = document.querySelector('#result');//поле с результатом
const buttonReset = document.querySelector('.button__reset_price');//кнопка сброса
const buttonCalculate = document.querySelector('.button__calculate_price');//кнопка посчитать

const courses = {
  RUB: 12.72,
  BYN: 0.45,
  KZT: 61.26,
  KGS: 12.26
};

const meaningOfCategories = {
  clothes: 200,
  sneakers: 250,
  technique: 25,
  other: 100
};

//Добавляет валютам атрибут value и значение из обьекта с курсами
if (calculationForm) {
  currencies.forEach((element) => {
    console.log(element, 'element');
    console.log(element.closest('#RUB'), 'element.closest(#RUB)');
    switch (element) {
      case element.closest('#RUB'):
        element.setAttribute('value', courses.RUB);
        break;
      case element.closest('#BYN'):
        element.setAttribute('value', courses.BYN);
        break;
      case element.closest('#KZT'):
        element.setAttribute('value', courses.KZT);
        break;
      case element.closest('#KGS'):
        element.setAttribute('value', courses.KGS);
        break;
    }
  })
}

if (calculationForm) {
  //Добавляем категориям атрибут value и значение из объекта с категориями
  categories.forEach((element) => {
    switch (element) {
      case element.closest('#clothes'):
        element.setAttribute('value', meaningOfCategories.clothes);
        break;
      case element.closest('#sneakers'):
        element.setAttribute('value', meaningOfCategories.sneakers);
        break;
      case element.closest('#technique'):
        element.setAttribute('value', meaningOfCategories.technique);
        break;
      case element.closest('#other'):
        element.setAttribute('value', meaningOfCategories.other);
        break;
    }
  })
}

if (calculationForm) {
  buttonCalculate.addEventListener('click', onResultInput);
}

function onResultInput() {

  if (calculationForm) {
    const currentCourses = getCourse();
    const currentCategory = getCategory();
    getResult(currentCourses, currentCategory);
  }
}

//Функция получения курса выбраной радиокнопки
function getCourse() {
  if (calculationForm) {
    let result = '';
    currencies.forEach((element) => {
      if (element.checked) {
        result = element.value;
      }
    })
    return result;
  }
}

//Функция получения категории выбраной радиокнопки
function getCategory() {
  if (calculationForm) {
    let category = '';
    categories.forEach((element) => {
      if (element.checked) {
        category = element.value;
      }
    })
    return category;
  }
}

function getResult(course, category) {
  if (calculationForm) {
    const convertedNumber = inputField.value * course;
    const useCategory = convertedNumber + (convertedNumber * category) / 100;
    calculationResult.value = useCategory.toFixed(0);
  }
}
if (calculationForm) {
  buttonReset.addEventListener('click', resetForm);
}

function resetForm() {
  if (calculationForm) {
    inputField.value = '';
    calculationResult.value = '';
    currencies.forEach(function (radiobox) {
      radiobox.checked = false;
    });
    categories.forEach(function (radiobox) {
      radiobox.checked = false;
    });
  }
}
