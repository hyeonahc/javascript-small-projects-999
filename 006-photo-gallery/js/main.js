// Variable declaration
const menus = document.querySelectorAll('.nav > ul > li');
const main = document.querySelector('main');
const description = document.querySelector('.description');
const descLength = document.querySelector('.descLength');
const editBtn = document.querySelector('.non-edit.button');
const onEditBtns = document.querySelectorAll('.edit.button');
const confirmBtn = document.querySelector('.confirm');
const cancelBtn = document.querySelector('.cancel');
const myInfo = document.querySelector('#myinfo > .non-edit');
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const radioButtons = document.querySelectorAll('input[type="radio"]');
let mainClassName;
let letterNum;

// Menu: add underline
menus.forEach(menu =>
  menu.addEventListener('click', () => {
    removeUnderline();
    menu.classList.add('on');
    showContent(menu);
  })
);

// Menu: remove underline
function removeUnderline() {
  menus.forEach(menu => {
    menu.classList.remove('on');
  });
}

// Menu: move to different pages
function showContent(menu) {
  mainClassName = menu.className.split(' ')[0];
  main.className = '';
  main.classList.add(mainClassName);
}

// Upload photo page: count letters
description.addEventListener('keyup', () => {
  descLength.innerHTML = `${description.value.length}/20`;
});

// after clicking edit button
editBtn.addEventListener('click', () => {
  editMode();
});

// after clicking cancel button
cancelBtn.addEventListener('click', () => {
  nonEditMode();
});

// after clicking confirm button
confirmBtn.addEventListener('click', () => {
  updateMyInfo();
  showMyInfo();
  nonEditMode();
});

function editMode() {
  editBtn.style.display = 'none';
  myInfo.className = 'edit';
  onEditBtns.forEach(btn => {
    btn.style.display = 'inline-block';
  });
  radioButtons.forEach(radioButton => {
    radioButton.disabled = false;
  });
  checkBoxes.forEach(checkBox => {
    checkBox.disabled = false;
  });
}

function nonEditMode() {
  editBtn.style.display = 'inline-block';
  myInfo.className = 'non-edit';
  onEditBtns.forEach(btn => {
    btn.style.display = 'none';
  });
  radioButtons.forEach(radioButton => {
    radioButton.disabled = true;
  });
  checkBoxes.forEach(checkBox => {
    checkBox.disabled = true;
  });
}

function showMyInfo() {
  document.querySelector('#myInfoId').innerHTML = my_info.id;
  document.querySelector('#myInfoUserName').innerHTML = my_info.user_name;
  document.querySelector('#sp-intro').innerHTML = my_info.introduction;
  document.querySelector(`input#${my_info.as}`).checked = true;
  my_info.interest.forEach(el => {
    document.querySelector(`input#${el}`).checked = true;
  });
}
showMyInfo();

function updateMyInfo() {
  my_info.introduction = document.querySelector('#ip-intro').value;
  my_info.as = document.querySelector(
    '#myinfo input[type=radio]:checked'
  ).value;
  let newInterest = [];
  document
    .querySelectorAll('#myinfo input[type=checkbox]:checked')
    .forEach(checkBox => {
      newInterest.push(checkBox.value);
      my_info.interest = newInterest;
    });
}
