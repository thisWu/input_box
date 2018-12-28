# input_box
在输入框敲回车的时候动态添加tag标签。

下图截图时未把鼠标截出来

![image](https://raw.githubusercontent.com/thisWu/input_box/master/GIF.gif)

      //初始化
      $("#input_box").contentbox({
          elm: "#set_text",
          callback: function(e) {
              //						alert(添加成功回调)
          }
      })
