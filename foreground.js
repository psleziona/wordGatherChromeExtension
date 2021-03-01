const res = new XMLHttpRequest();
let form = new FormData();

let word = document.getSelection().toString();
form.append('word', word);
res.open('POST', 'http://127.0.0.1:5000/add_word');
res.send(form);
