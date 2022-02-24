const menus = document.querySelectorAll('.nav > ul > li');
const description = document.querySelector('.description');
const gallery = document.querySelector('#gallery');

menus.forEach(menu => {
  menu.addEventListener('click', () => setMenu(menu.className.split(' ')[0]));
});

function setMenu(_menu) {
  menus.forEach(menu => {
    menu.classList.remove('on');
  });
  document.querySelector('nav > ul > li.' + _menu).classList.add('on');
  document.querySelector('main').className = _menu;
}

description.addEventListener('keyup', () => {
  document.querySelector('.descLength').innerHTML =
    description.value.length + '/20';
});

function showMyInfo() {
  document.querySelector('#myInfoId').innerHTML = my_info.id;
  document.querySelector('#myInfoUserName').innerHTML = my_info.user_name;
  document.querySelector('#ip-intro').value = my_info.introduction;
  document.querySelector('#sp-intro').innerHTML = my_info.introduction;
  document.querySelector(
    `#myinfo input[type=radio][value=${my_info.as}]`
  ).checked = true;

  document
    .querySelectorAll('#myinfo input[type=checkbox]')
    .forEach(checkbox => {
      checkbox.checked = false;
    });

  my_info.interest.forEach(interest => {
    document.querySelector(
      `#myinfo input[type=checkbox][value=${interest}]`
    ).checked = true;
  });
}
showMyInfo();

document.querySelector('div.button.editBtn').addEventListener('click', () => {
  console.log('수정');
  setEditMyInfo(true);
});

document.querySelector('div.button.cancel').addEventListener('click', () => {
  console.log('취소');
  setEditMyInfo(false);
});

document.querySelector('div.button.confirm').addEventListener('click', () => {
  console.log('확인');
  updateMyInfo();
});

function setEditMyInfo(on) {
  document.querySelector('#myinfo > div').className = on ? 'edit' : 'non-edit';
  document.querySelectorAll('#myinfo input').forEach(input => {
    input.disabled = !on;
  });
  showMyInfo();
}

function updateMyInfo() {
  my_info.introduction = document.querySelector('#ip-intro').value;
  my_info.as = document.querySelector(
    '#myinfo input[type=radio]:checked'
  ).value;
  let interests = [];
  document
    .querySelectorAll('#myinfo input[type=checkbox]:checked')
    .forEach(checkbox => {
      interests.push(checkbox.value);
      my_info.interest = interests;
    });
  console.log(my_info);
  setEditMyInfo(false);
  showMyInfo();
}

function showPhotos() {
  photos.forEach(photo => {
    // console.log(photo);
    let photoNode = document.querySelector('article.hidden').cloneNode(true);
    photoNode.classList.remove('hidden');
    photoNode.querySelector('.author').innerHTML = photo.user_name;
    photoNode.querySelector('.desc').innerHTML = photo.description;
    photoNode.querySelector('.like').innerHTML = photo.likes;

    if (my_info.like.indexOf(photo.idx) > -1) {
      photoNode.querySelector('.like').classList.add('on');
    }

    photoNode.querySelector(
      '.photo'
    ).style.backgroundImage = `url(./img/photo/${photo.file_name})`;

    gallery.append(photoNode);
  });
}
showPhotos();
