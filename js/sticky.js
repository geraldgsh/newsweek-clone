window.onresize = function(){
    if ($('body').width() < 750){
        //if body width is less than 640px, then put the second column before the first column
        $('.culture-travel.secondColumn').insertAfter(".more-stories.thirdColumn");
    }
    else{
        //if body width is more than or equal to 640px, then reset the ordering.
        $('.more-stories.thirdColumn').insertAfter(".culture-travel.secondColumn");
    }
}