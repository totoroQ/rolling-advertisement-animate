
$(document).ready(function(){
      //滚动触发
    $(window).scroll(function() {
        var screenHeight = $(window).height();
        var picItemHeight = $("#picItem").height();
        var picHeight = $("#pic").height();
        var picItem = document.getElementById("picItem");
        var pic = document.getElementById("pic");
        var picItemPosition = picItem.getBoundingClientRect().top;

        // 图片实时位置的计算
        var picPosition = (picHeight-picItemHeight)/(screenHeight-picItemHeight)*picItemPosition+picItemHeight-picHeight;
        var picPositionStr = 'translateY(' + picPosition + 'px)';
        var picBeyondTopPosition = picItemHeight-picHeight;
        var picBeyondTopPositionStr = 'translateY(' + picBeyondTopPosition + 'px)';    
        var picBeyondBottomPositionStr = 'translateY(0)';

        // 通过JavaScript改变transform属性来触发transition动画
        if( picItemPosition<=0 ){
            pic.style.transform=picBeyondTopPositionStr;
        }

        if( picItemPosition>=(screenHeight-picItemHeight) ){
            pic.style.transform=picBeyondBottomPositionStr;
        }

        if( picItemPosition>0 && picItemPosition<(screenHeight-picItemHeight) ){
            pic.style.transform=picPositionStr;
        }
    });
});