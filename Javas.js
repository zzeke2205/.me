
function check(){

    var valid = true;

    if((document.feedb.myAge[0].checked == false)&&(document.feedb.myAge[1].checked == false)&&(document.feedb.myAge[2].checked == false)&&(document.feedb.myAge[3].checked == false)){
        alert('Please pick an age range');
        valid = false;
    }

    if((document.feedb.myGend[1].selected == false)&&(document.feedb.myGend[2].selected == false)){
        alert('Please choose a gender');
        valid = false;
    }

    if((document.feedb.myPage[0].checked == false)&&(document.feedb.myPage[1].checked == false)&&(document.feedb.myPage[2].checked == false)){
        alert('Will you tick at least one please :(');
        valid = false;
    }
    
    return valid;
}