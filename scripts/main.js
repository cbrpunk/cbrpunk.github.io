var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/meridian.jpg') {
      myImage.setAttribute ('src','images/meridian2.png');
    } else {
      myImage.setAttribute ('src','images/meridian.jpg');
    }
}