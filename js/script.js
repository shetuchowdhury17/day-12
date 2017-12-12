
$('#add').click(function () {
    var x = Number($('#firstNo').val());
    var y = Number($('#lastNo').val());
    var result = x+y;

    $('#result').val(result);

});

$('#sub').click(function () {
    var x = Number($('#firstNo').val());
    var y = Number($('#lastNo').val());
    var result = x-y;

    $('#result').val(result);

});

$('#multi').click(function () {
    var x = Number($('#firstNo').val());
    var y = Number($('#lastNo').val());
    var result = x*y;

    $('#result').val(result);

});

$('#div').click(function () {
    var x = Number($('#firstNo').val());
    var y = Number($('#lastNo').val());
    var result = x/y;

    $('#result').val(result);

});

// $('#btn').click(function () {
//     var x = $('#firstName').val();
//     var y = $('#lastName').val();
//     var fullName = x+' '+y;
//
//     $('#fullName').val(fullName);
//     alert(fullName);
// });


// alert($('#h1').html('Hello World'));
// alert($('#h1').text());
























// var redBtnElement = document.getElementById('redBtn');
// redBtnElement.onmouseover =function () {
//     var divOneElement = document.getElementById('divOne')
//     // divOneElement.style.backgroundColor = 'red';
//
//     divOneElement.className = 'class-one';
// };
//
// var redBtnElement = document.getElementById('greenBtn');
// redBtnElement.onmouseover =function () {
//     var divOneElement = document.getElementById('divOne')
//     // divOneElement.style.backgroundColor = 'green';
//     divOneElement.className = 'class-two';
// };
//
// var redBtnElement = document.getElementById('blueBtn');
// redBtnElement.onmouseover =function () {
//     var divOneElement = document.getElementById('divOne')
//     // divOneElement.style.backgroundColor = 'blue';
//     divOneElement.className = 'class-three';
// };
//
// var redBtnElement = document.getElementById('defaultBtn');
// redBtnElement.onmouseover =function () {
//     var divOneElement = document.getElementById('divOne')
//     // divOneElement.style.backgroundColor = 'white';
//     divOneElement.className = 'class-four';
// };












var btnElement = document.getElementById('btn');
btnElement.onclick = function () {
    var startingNumberValue = document.getElementById('startingNumber').value;
    var endingNumberValue = document.getElementById('endingNumber').value;

    var res='';
    for(var x=startingNumberValue;x<=endingNumberValue;x++){
        // document.write(x+' ');

        res+=x;  //res = res(string) + x(string) concate
    }

    document.getElementById('result').value =res;
};
