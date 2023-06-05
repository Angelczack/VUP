//获取元素
var all = document.getElementsByClassName("all")[0];
var shopshow = document.getElementsByClassName("shopshow");
var content = document.getElementsByClassName("content")[0];
var count = 0; //改变left
var img = document.getElementsByTagName("img")[0];
var length = parseInt(window.getComputedStyle(img).width);
var speed = 1000; //计时器速度
var circle = document.getElementsByClassName("circle")[0].children;
var index = 0; //圆点索引  与count关联
var timer = null; //计时器名称
var btn = document.getElementsByClassName("btn")[0].children;

//图片水平移动
function move() {
    all.className = "all tras";
    count += 1;
    all.style.left = -(count * length) + "px";
    // 前一张过渡完，判断count是否大于等于6，如果是的话，图7到图1就去掉过渡，直接变成图1的位置，count=0；
    setTimeout(function () {
    //console.log(1);  总是在前一张图片过渡完 输出了1
        if (count >= shopshow.length - 1) {
            all.className = "all";
            count = 0;
            all.style.left = "0px";
        }
        //控制台输出count，count值就是当前图片的索引
        index = count;
        addcolor();
    }, 500);//延迟的时间等于动画过渡的时间
}


       //轮播动画
       function animate() {
        timer = setInterval(function () {
            move();
        }, speed);
    }

    //小圆点
    function addcolor() {
        for (var i = 0; i < circle.length; i++) {
            if (i == index) {
                circle[i].className = "bgc";
            } else {
                circle[i].className = "";
            }
        }

    }

    //加载之后
       window.onload = function () {
        animate();
        addcolor(); //方法一开始就需要调用，以此获取index值

        //鼠标进入与离开
        content.onmouseenter = function () {
            clearInterval(timer);
        }
        content.onmouseleave = function () {
            animate();
        }

        //圆点 碰到的圆点变色，变成相应的图片，移出，从该点继续向后轮播
        for (var i = 0; i < circle.length; i++) {
        //圆点索引的一一对应
            circle[i].index = i;
            circle[i].onmouseenter = function () {
                //相应圆点颜色  把索引赋值给index  与addcolor()关联
                index = this.index;
                addcolor();
                //对应图片
                count = index -
                1; //图片的left值是索引的length，图片的left是在count+1后执行的，所以需要count-1，因为count=index，所以需要index-1
                move();
            }

        }
        //btn事件
        //鼠标点击右边，图片向左边，点向右，正常走向
        //鼠标点击左边，图片向右走，点向左
        btn[0].onclick = function () {
            move();
        }
        btn[1].onclick = function () {
            //图片  
            count--;
            if (count < 0) {
                all.className = "all"
                count = shopshow.length - 2; //图片种类个数
                all.style.left = "-2400px";
            }
            //settimeout 延迟一点时间执行，方便最后一张到第一张的过渡,不然刚取消过渡又开始过渡。。。
            setTimeout(function () {
                all.className = "all tras";
                all.style.left = (-count * length) + "px";
            }, 1);
            //小圆点 settimeout让小圆点在图片变化之后再改变颜色
            setTimeout(function () {
                index = count;
                addcolor();
            }, 500);

        }
    }
