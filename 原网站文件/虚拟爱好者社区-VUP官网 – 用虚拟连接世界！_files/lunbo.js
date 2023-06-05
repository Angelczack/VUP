$(document).ready(function () {
  //设置变量速度为3秒
  var speed = 3000;
  //循环变量为1，是避免定时器再等第一章图片
  var a = 1;
  var b = 2;
  var c = 3;
  var d = 4;
  var e = 5;
  var f = 6;
  var g = 0;

  //给整个轮播图绑定鼠标事件，当鼠标放到轮播图上停止轮播图，当鼠标离开轮播图继续滚动
  $(".ula")
    .mouseenter(function () {
      //停止定时
      clearInterval(playTimer);
    })
    .mouseleave(function () {
      //重新开始定时
      playTimer = setInterval(runPlay, speed);
    });
  $(".left")
    .mouseenter(function () {
      //停止定时
      clearInterval(playTimer);
    })
    .mouseleave(function () {
      //重新开始定时
      playTimer = setInterval(runPlay, speed);
    });
  $(".right")
    .mouseenter(function () {
      //停止定时
      clearInterval(playTimer);
    })
    .mouseleave(function () {
      //重新开始定时
      playTimer = setInterval(runPlay, speed);
    });
  //设置定时器的函数和时间
  var playTimer = setInterval(runPlay, speed);
  //定时函数
  function runPlay() {
    //判读如果m大于5，就设置m=0
    if (a > 4) {
      a = 0;
    }
    if (b > 4) {
      b = 0;
    }
    if (c > 4) {
      c = 0;
    }
    if (d > 4) {
      d = 0;
    }
    if (e > 4) {
      e = 0;
    }
    if (f > 4) {
      f = 0;
    }
    if (g > 4) {
      g = 0;
    }
    // console.log(a);
    //调用controlPlay函数来控制图片变化
    controlPlay(e);
    a++;
    b++;
    c++;
    d++;
    e++;
    f++;
    g++;
  }
  //通过参数控制图片的变化,图标变化
  function controlPlay(n) {
    $(".ula li").removeClass("xcurrent").eq(a).addClass("xcurrent");
    $(".ula li").removeClass("xcurrent1").eq(b).addClass("xcurrent1");
    $(".ula li").removeClass("xcurrent2").eq(c).addClass("xcurrent2");
    $(".ula li").removeClass("xcurrent3").eq(d).addClass("xcurrent3");
    $(".ula li").removeClass("xcurrent4").eq(e).addClass("xcurrent4");
  }
  //下一张图片
  $(".right").click(function () {
    //判断m的值
    if (a > 4) {
      a = 0;
    }
    if (b > 4) {
      b = 0;
    }
    if (c > 4) {
      c = 0;
    }
    if (d > 4) {
      d = 0;
    }
    if (e > 4) {
      e = 0;
    }
    if (f > 4) {
      f = 0;
    }
    if (g > 4) {
      g = 0;
    }
    //显示下一站图片
    controlPlay(e);
    a++;
    b++;
    c++;
    d++;
    e++;
    f++;
    g++;
  });

  // 上一张图片;
  $(".left").click(function () {
    //m默认显示下一张，所以为了显示上一张，m必须减2
    a -= 2;
    b -= 2;
    c -= 2;
    d -= 2;
    e -= 2;
    if (c < 0) {
      c = 4;
    }
    if (a < 0) {
      a = 4;
    }
    if (b < 0) {
      b = 4;
    }
    if (d < 0) {
      d = 4;
    }
    if (e < 0) {
      e = 4;
    }
    //显示上一张图片
    controlPlay();
    //保证m要显示下一张
    a++;
    b++;
    c++;
    d++;
    e++;
    f++;
    g++;
  });
});
