const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

let mainUl = document.createElement('ul');
mainUl.classList = 'folder_main';
rootNode.appendChild(mainUl);

let tree = (arr, elem) => {
  arr.forEach((item) => {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let div = document.createElement('div');
    let icon = document.createElement('i');
    icon.classList.add('material-icons');
    icon.innerHTML = !item.folder ? 'insert_drive_file' : 'folder'
    div.appendChild(icon);
    div.appendChild(span);
    span.innerHTML = item.title;
    li.appendChild(div);
    elem.appendChild(li);

    div.className = item.folder ? 'folder' : 'file';

    if (item.folder && !item.children) {
      let ulFolder = document.createElement('ul');
      ulFolder.setAttribute('hidden', 'hidden');
      let liFolder = document.createElement('li');
      let divFolder = document.createElement('div');
      let spanFolder = document.createElement('span');
      divFolder.className = 'empty_folder';
      spanFolder.innerHTML = 'Folder is empty';
      divFolder.appendChild(spanFolder);
      liFolder.appendChild(divFolder);
      ulFolder.appendChild(liFolder);
      li.appendChild(ulFolder);
    }

    if (item.children) {
      let innerUl = document.createElement('ul');
      innerUl.className = 'full_folder';
      innerUl.setAttribute('hidden', 'hidden');
      li.appendChild(innerUl);
      tree(item.children, innerUl);
    }

    let folder = document.querySelector('.folder_main');
    folder.addEventListener('click', (e) => {
      if (e.target.tagName === 'SPAN' || e.target.tagName === 'I') {
        let childrenContainer = e.target.parentNode.parentNode.querySelector('ul');
        if (!childrenContainer) {
          return;
        }
        childrenContainer.hidden = !childrenContainer.hidden;
        if (e.target.parentNode.childNodes[0].innerText === 'folder') {
          e.target.parentNode.childNodes[0].innerText = 'folder_open'
        } else {
          e.target.parentNode.childNodes[0].innerText = 'folder'
        }
      } else if (e.target.tagName === 'DIV') {
        let childrenContainer = e.target.parentNode.querySelector('ul');
        if (!childrenContainer) {
          return;
        }
        childrenContainer.hidden = !childrenContainer.hidden;
        if (e.target.childNodes[0].innerText === 'folder') {
          e.target.childNodes[0].innerText = 'folder_open'
        } else {
          e.target.childNodes[0].innerText = 'folder'
        }
      }
    })
  })
}

tree(structure, mainUl);