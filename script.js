const button1 = document.getElementById('redirectButton1');
const button2 = document.getElementById('redirectButton2');
const button3 = document.getElementById('circle1');
const button4 = document.getElementById('circle2');
const button5 = document.getElementById('circle3');
const hireMe = document.getElementById('hire-button'); // Fixed typo
const getCv = document.getElementById('cv-button');

button1.addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1TJ6OS2XjI0nVXlTcHGlpSZ0f2-fZbiys/view', '_blank');// Replace with your desired URL
});

button2.addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1HuLoFE1AYKh_kjhZwstv7CbWbmMohatY/view', '_blank'); // Replace with your desired URL
});

button3.addEventListener('click', function() {
    window.open('https://drive.google.com/drive/folders/1uuCs1mOrhOf5QiTdk3fGHPFheFJwXFqD', '_blank'); // Replace with your desired URL
});

button4.addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1coWujQ5tyg9VkptcPqi1l3Tphshuc8s1/view', '_blank'); // Replace with your desired URL
});

button5.addEventListener('click', function() {
    window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/codekaze/FMfcgzGmvTwLxVCnmDgnKxvfHjRbGdfl', '_blank'); // Replace with your desired URL
});


const yourEmail = 'sahakunal1803@gmail.com';
    const cvLink = 'https://drive.google.com/drive/folders/10Iq0NzE5mcH3sZzw0Xay0exV6cWCkPEG';

    hireMe.addEventListener('click', function() {
        window.open(`mailto:${yourEmail}`, '_blank'); // Replace with your desired URL
    });

    getCv.addEventListener('click', function() {
        window.open(cvLink, '_blank'); // Replace with your desired URL
    });