var bannert=document.getElementById("bannert");
var lix=bannert.getElementsByTagName('li');
var  s=0;//默认显示第一张图片，选中第一个小圆点，下标为0
//轮播图切换效果的本质，通过下标给每一个li添加class名称

//自动轮播效果
var times=setInterval("task2()",3000);//每过2秒执行一次task函数
function task2()
{
    //让图片与小圆点切换一个
    if(s<lix.length-1)//不是最后一张
    {
     lix[s].className='';//修改正在显示的class名称为" "
     s++;
     lix[s].className='ba1';//修改下一个的class的名称为cur
    }
    else //当前是最后一张
    {
      lix[s].className=''; //修改正在显示的class的名称为" "
      s=0;
      lix[s].className='ba1';
    }
}



//鼠标移入移出事件  鼠标移入轮播图停止，鼠标移出轮播图开始
bannert.onmouseover=function(){
    clearInterval(times);//停止定时器
}
bannert.onmouseout=function(){
    times=setInterval("task2()",3000);//开始定时器
}