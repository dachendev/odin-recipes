window.onload = function () {
    const ttb = document.getElementById('ttb');

    ttb.onclick = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}