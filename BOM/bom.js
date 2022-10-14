// const list = document.querySelector('ul');
const user_input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.list');



button.addEventListener('click', () => {
    const myItem = user_input.value;
    user_input.value = ''

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem)
    });
    user_input.focus()
});
