function getImage() {

    return new Promise(function (resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";

        xhr.onload = () => {
            if (xhr.status === 200) {
                let img = document.createElement('img');
                img.src = window.URL.createObjectURL(xhr.response);
                resolve(img);
            }
            else {
                reject(new Error('Image load error: ' + xhr.statusText));
            }
        };

        xhr.send();

    });
};
getImage('image.jpg')
 .then((img) => {
     document.getElementById('example');
 },
 (err) => {
     console.log(err);
     alert(err);
 });