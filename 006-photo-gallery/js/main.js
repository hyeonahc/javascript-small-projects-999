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

let sorts = {
  recent: (a, b) => {
    return a.idx > b.idx ? -1 : 1;
  },
  like: (a, b) => {
    return a.likes > b.likes ? -1 : 1;
  },
};

let sort = sorts.recent;

function setSort(_sort) {
  sortOptions = document.querySelectorAll('#sorts > li');
  sortOptions.forEach(sortOption => {
    sortOption.classList.remove('on');
  });
  document.querySelector('#sorts .' + _sort).classList.add('on');
  sort = sorts[_sort];
  showPhotos();
}

let filters = {
  all: () => {
    return true;
  },
  mine: photo => {
    return photo.user_id === my_info.id;
  },
  like: photo => {
    return my_info.like.indexOf(photo.idx) > -1;
  },
  follow: photo => {
    return my_info.follow.indexOf(photo.user_id) > -1;
  },
};

let filter = filters.all;

function setFilter(_filter) {
  filterOptions = document.querySelectorAll('#filters > li');
  filterOptions.forEach(filterOption => {
    filterOption.classList.remove('on');
  });
  document.querySelector('#filters .' + _filter).classList.add('on');
  filter = filters[_filter];
  showPhotos();
}

let filtered;

function showPhotos() {
  let existingNodes = document.querySelectorAll('article:not(.hidden)');
  existingNodes.forEach(function (existingNode) {
    existingNode.remove();
  });

  const gallery = document.querySelector('#gallery');

  filtered = photos.filter(filter);
  filtered.sort(sort);

  filtered.forEach(photo => {
    const photoNode = document.querySelector('article.hidden').cloneNode(true);
    photoNode.classList.remove('hidden');

    photoNode.querySelector(
      '.photo'
    ).style.backgroundImage = `url('./img/photo/${photo.file_name}')`;
    photoNode.querySelector('.like').innerHTML = photo.likes;
    photoNode.querySelector('.author').innerHTML = photo.user_name;
    photoNode.querySelector('.desc').innerHTML = photo.description;

    if (my_info.like.indexOf(photo.idx) !== -1) {
      photoNode.querySelector('.like').classList.add('on');
    }

    photoNode.querySelector('.like').addEventListener('click', function () {
      toggleLike(photo.idx);
    });

    gallery.append(photoNode);
  });
}
showPhotos();

function toggleLike(idx) {
  console.log(idx);
  if (my_info.like.indexOf(idx) === -1) {
    my_info.like.push(idx);
    console.log(my_info.like);
    for (let i = 0; i < photos.length; i++) {
      if (photos[i].idx === idx) {
        photos[i].likes++;
        break;
      }
    }
  } else {
    my_info.like = my_info.like.filter(num => {
      return num !== idx;
    });
    console.log(my_info.like);
    for (let i = 0; i < photos.length; i++) {
      if (photos[i].idx === idx) {
        photos[i].likes--;
        break;
      }
    }
  }
  showPhotos();
}
