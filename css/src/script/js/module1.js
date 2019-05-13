define(['module2'], function(m2) {
    return {
        // tab: (function() { //tab切换效果
        //     var titleBtn = document.querySelectorAll('.tab_title li');
        //     var aItem = document.querySelectorAll('.item');
        //     for (var i = 0; i < titleBtn.length; i++) {
        //         titleBtn[i].a = i;
        //         titleBtn[i].onclick = function() {
        //             for (var j = 0; j < titleBtn.length; j++) {
        //                 titleBtn[j].className = '';
        //                 aItem[j].style.display = 'none';
        //             }
        //             this.className = 'active';
        //             aItem[this.a].style.display = 'block';
        //         }
        //     }
        // })(),

        lunbo: (function() {
            //1.获取元素
            var taoBao = document.querySelector('.taobao');
            var picUl = document.querySelector('.taobao ul');
            var picLi = document.querySelectorAll('.taobao ul li'); //5
            var btnLi = document.querySelectorAll('.taobao ol li');
            var btnLeft = document.querySelector('#left');
            var btnRight = document.querySelector('#right');
            var num = 0;
            var bstop = true;
            var timer = null;
            //2.改变布局。
            //对布局里面首尾图片进行克隆，然后追加
            var firstPic = picLi[0].cloneNode(true);
            var lastPic = picLi[picLi.length - 1].cloneNode(true);
            picUl.appendChild(firstPic);
            picUl.insertBefore(lastPic, picLi[0]);

            //3.ul赋值宽度，让所有的li排成一行。
            picLi = document.querySelectorAll('.taobao ul li'); //7
            var liWidth = picLi[0].offsetWidth; //1个li的宽度
            picUl.style.width = liWidth * picLi.length + 'px';
            picUl.style.left = -liWidth + 'px';


            //4.给小圆圈添加点击事件。
            for (var i = 0; i < btnLi.length; i++) {
                btnLi[i].index = i; //自定义的索引
                btnLi[i].onmousemove = function() {
                    num = this.index; //当前按钮的索引
                    tabSwitch();
                    btnLi[num].className = 'active';
                }
            }
            //5.封装切换过程。
            function tabSwitch() {
                for (var i = 0; i < btnLi.length; i++) {
                    btnLi[i].className = '';
                }
                m2.bufferMove(picUl, {
                    left: -(num + 1) * liWidth
                }, function() {
                    //判断是否到最后一张
                    if (picUl.offsetLeft <= -liWidth * (btnLi.length + 1)) {
                        picUl.style.left = -liWidth + 'px';
                        num = 0;
                    }

                    //判断是否第一张
                    if (picUl.offsetLeft >= 0) {
                        picUl.style.left = -liWidth * btnLi.length + 'px';
                        num = btnLi.length - 1;
                    }
                    bstop = true;
                });
            }

            //6.左右箭头显示与隐藏
            taoBao.onmouseover = function() {
                // btnLeft.style.display = 'block';
                // btnRight.style.display = 'block';
                btnLeft.style.display = 'none';
                btnRight.style.display = 'none';
                clearInterval(timer);
            };
            taoBao.onmouseout = function() {
                btnLeft.style.display = 'none';
                btnRight.style.display = 'none';
                timer = setInterval(function() {
                    btnRight.onclick();
                }, 2000);
            };

            //右箭头添加点击事件
            btnRight.onclick = function() {
                if (bstop) {
                    bstop = false;
                    num++;
                    tabSwitch();
                    if (num == btnLi.length) {
                        btnLi[0].className = 'active';
                    } else {
                        btnLi[num].className = 'active';
                    }
                }

            };

            btnLeft.onclick = function() {
                if (bstop) {
                    bstop = false;
                    num--;
                    tabSwitch();
                    if (num < 0) {
                        btnLi[btnLi.length - 1].className = 'active';
                    } else {
                        btnLi[num].className = 'active';
                    }
                }

            };

            timer = setInterval(function() {
                btnRight.onclick();
            }, 2000);
        })()

    }
});