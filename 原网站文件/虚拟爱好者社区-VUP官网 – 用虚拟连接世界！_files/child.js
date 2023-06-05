//您自己的js代码写到下面

$(".login-box-content").prepend('<div class="login-box-img"></div>');

// $(".login-form-item span b").eq(1).text("手机号");
if ($(".login-title span").text() == "注册") {
  $(".login-form-item span b").eq(1).text("手机号");
} else {
  $(".login-form-item span b").eq(1).text("VUP软件账号/手机号");
}
// let user = 1;
// console.log(window.location.search.substring(1).split("&")[2].split("=")[1]);
// console.log($(".search-page-title"));
// if (user == window.location.search.substring(1).split("&")[2].split("=")[1]) {
//   $(".search-page-title").hide();
// }
function getCookie(name) {
  var strcookie = document.cookie; //获取cookie字符串
  var arrcookie = strcookie.split("; "); //分割
  for (let item of arrcookie) {
    let arr = item.split('=')
    if (arr[0] == name) {
      // console.log(arr[1]);
      return arr[1]
    }
  }
  return "";
}
let author=getCookie('b2_token')
function del(id) {
  $.ajax({
    url: "https://virtualup.cn/wp-json/b2/v1/delCommentList",
    type: "POST",
    data: { comment_id: id },
    success: (res) => {
      console.log(res);
      $("body").append("<div id='msg'><span>删除成功!</span></div>");
      clearmsg();
    },
  });
}
function clearmsg() {
  var t = setTimeout(function () {
    $("#msg").remove();
    location.reload();
  }, 2000);
}

$("#write-textarea").on("input", function (e) {
  // console.log(e.target.value.length);
  let num = e.target.value.length;
  $(".write-select-row-top>span").html(num + "/100");
  //其他执行代码
});
