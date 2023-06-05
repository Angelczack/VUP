// var banner1=document.getElementById("banner1");
// var first=banner1.getElementsByClassName("first");
// var second=banner1.getElementsByClassName("second");
// var i=0;
// var timer=setInterval("task()",1000);
// function task(){
//        first.style.transform="translateX(-50%)";
//     //    first[i+1].style.transform="translateX(0%)";
//     //    second[i].style.transform="translateX(50%)";
//     //    second[i+1].style.transform="translateX(0%);"
// }



var ad=document.getElementById("ad");
var lis=ad.getElementsByTagName('li');
var  i=0;//默认显示第一张图片，选中第一个小圆点，下标为0
//轮播图切换效果的本质，通过下标给每一个li添加class名称

//自动轮播效果
var timer=setInterval("task1()",2000);//每过2秒执行一次task函数
function task1()
{
    //让图片与小圆点切换一个
    if(i<lis.length-1)//不是最后一张
    {
     lis[i].className='';//修改正在显示的class名称为" "
     i++;
     lis[i].className='cur';//修改下一个的class的名称为cur
    }
    else //当前是最后一张
    {
      lis[i].className=''; //修改正在显示的class的名称为" "
      i=0;
      lis[i].className='cur';
    }
}



//鼠标移入移出事件  鼠标移入轮播图停止，鼠标移出轮播图开始
ad.onmouseover=function(){
    clearInterval(timer);//停止定时器
}
ad.onmouseout=function(){
    timer=setInterval("task1()",2000);//开始定时器
}