function grabWord() {

    const res = new XMLHttpRequest();
    const form = new FormData();

    let word = document.getSelection().toString();
    form.append('word', word);
    res.open('POST', 'http://127.0.0.1:5000/word');
    res.send(form);
    res.onreadystatechange = () => {
        if (res.readyState == 4) {
            console.log(res.response)
        }
    }
}

grabWord()