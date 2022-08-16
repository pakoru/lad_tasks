var formElement = document.forms['formElement'].elements[0];

formElement.onfocus = function (evt) {
   evt.target.classList.add('focused');
};

formElement.onblur = function (evt) {
   evt.target.classList.remove('focused');
};

var formElement2 = document.forms['formElement'].elements[1];

formElement2.onfocus = function (evt) {
   evt.target.classList.add('focused');
};

formElement2.onblur = function (evt) {
   evt.target.classList.remove('focused');
};