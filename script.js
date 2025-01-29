let right = document.querySelector('.nextarrow')
let left = document.querySelector('.nextarrow1')
let slider1 = document.querySelector('.slider1')
let slider2 = document.querySelector('.slider2')
let select=document.getElementById('input1')
let email = document.getElementById('email1')


const next = function () {
    slider1.style.transition = 'transform 0.8s ease'
    slider2.style.transition = 'transform 0.8s ease'
    slider1.style.transform = 'translateX(-93%)'
    slider2.style.transform = 'translateX(-93%)'
    right.style.opacity='0'
    right.style.transition='opacity 0.8s ease'
    left.style.transition='opacity 0.8s ease'
    left.style.opacity='1'
    
    


};
const prev = function () {
    slider1.style.transition = 'transform 0.8s ease'
    slider2.style.transition = 'transform 0.8s ease'
    slider1.style.transform = 'translateX(0)'
    slider2.style.transform = 'translateX(0)'
    right.style.opacity='0.8'
    right.style.transition='opacity 0.8s ease'
    left.style.transition='opacity 0.8s ease'

    left.style.opacity='0'
    
    


};
const shiftemail = function () {
    email.style.fontSize='10px'
    email.style.top='510px'
    email.style.left='480pxpx'
    select.focus();

    
};

const focusdiv = function(){

};
right.addEventListener('click',next)
left.addEventListener('click',prev)
select.addEventListener('click',()=>{
    email.style.fontSize='11px'
    email.style.top='510px'
    email.style.left='480pxpx'
    
    select.focus();
})

$(document).ready(function () {
    function changeEmailStyles() {
        $('#email1').css({
            'font-size': '11px',
            'top': '510px',
            'left': '480px'
            
        });
    }

    function resetEmailStyles() {
        $('#email1').css({
            'font-size': '18px', 
            'top': '519px',      
            'left': '480px'      
        });
    }

    
    $('#input1').focus(changeEmailStyles);

    
    $('#email1').click(function (event) {
        event.stopPropagation(); 
        $("#input1").focus();
        changeEmailStyles();
    });

    $(document).click(function () 
    {
        $("#input1").val('')
        resetEmailStyles();
    });

    $('#input1').click(function (event) {
        event.stopPropagation();
    });
});
$(document).ready(function () {
    function changeEmailStyles() {
        $('.email2').css({
            'font-size': '11px',
            'top': '1px',
            'left': '30px'
            
        });
    }

    function resetEmailStyles() {
        $('.email2').css({
            'font-size': '18px', 
            'top': '10px',      
            'left': '30px'      
        });
    }

    $('#input2').focus(changeEmailStyles);

    $('.email2').click(function (event) {
        event.stopPropagation(); 
        $("#input2").focus();
        changeEmailStyles();
    });

    $(document).click(function () 
    {
        $("#input2").val('')
        resetEmailStyles();
    });

    $('#input2').click(function (event) {
        event.stopPropagation();
    });
});
$(document).ready(function(){
    $(".faqans").hide()
    $(".cross").hide()


    $(".faqquest").click(function(){
        console.log("Clicked")
        $(this).next(".faqans").toggle();
        $(this).children(".cross").toggle()
        $(this).children(".plus").toggle()
    });
})

