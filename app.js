var banner = document.querySelector('#page-banner');
var bookList = document.querySelector('#book-list');
var titles = document.getElementsByClassName('title');
var lis = document.getElementsByTagName('li');
for(i = 0; i < titles.length; i++){
    console.log(titles[i]);
}

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(item){
    console.log(item);  
});

const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

let books = document.querySelector('#book-list li .name');
books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(function(book){
    book.textContent += ' (book title)';
});

bookList.innerHTML += '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML</p>';

console.log('#page-banner node type is: ' + banner.nodeType);
console.log('#page-banner node name is: ' + banner.nodeName);
console.log('#page-banner has child nodes: ' + banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

console.log('the parent node is: ' + bookList.parentNode);
console.log('the grandparent element is: ' + bookList.parentElement.parentElement);
console.log(bookList.childNodes);
console.log(bookList.children);

console.log(bookList.nextSibling);
console.log(bookList.nextElementSibling);
console.log(bookList.previousSibling);
console.log(bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br>Too cool for everyone else!';

var h2 = document.querySelector('#book-list h2');
h2.addEventListener('click', function(e){
    console.log(e.target);
    console.log(e);
});

var btns = document.querySelectorAll('#book-list .delete');
Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    })
})

const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});

const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    value.textContent += ' (book title) ';
    console.log(value);
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'delete';
    deleteBtn.className += 'delete';
    bookName.textContent = value;
    bookName.className += 'name';
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});

// const hideBox = document.querySelector('#hide');
// hideBox.addEventListener('change', function(e){
//     if(hideBox.ariaChecked){
//         list.style.display = 'none';
//     } else {
//         list.style.display = 'initial';
//     }
// })

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
            
        }
    })
})