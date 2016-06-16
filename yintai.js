






$(function(){
  for(var i=0;i<9;i++){
    as(i);
  }

  function as(a){

    var hezi=$(".modelzuo-b")[a];
   // console.log(hezi);
   var tu=$(".modelzuo-b-zhong",hezi);
   
   
   var left=$(".modelzuo-b-zuo")[a];
   var right=$(".modelzuo-b-you")[a];
   var n=0;
   var next=0;
   
   var width=parseInt(getStyle(tu[0],"width"));
   
   function move(){
     next=n+1;
     if(next>=tu.length){
      next=0;
    }
    for(var i=0;i<tu.length;i++){
     
    }
    
    tu[next].style.left=width+"px";
    animate(tu[n],{left:-width},500);
    animate(tu[next],{left:0},500);
    n=next;
  }
  function move1(){
   next=n-1
   if(next<0){
    next=tu.length-1;
    
  }
  for(var i=0;i<tu.length;i++){
    
  }
  
  tu[next].style.left=-width+"px";
  animate(tu[n],{left:width},500);
  animate(tu[next],{left:0},500);
  n=next;
}   

left.onclick=function(){
  move();
}
right.onclick=function(){
  move1();
} 


}




function remen(){
  var y=$(".l1-content-p")
  var d=$(".l1-content-you1span")
  for(var i=0;i<d.length;i++){
    d[i].index=i
    d[i].onmouseover=function(){
      for(var i=0;i<d.length;i++){
        d[i].style.borderBottom="0"
        y[i].style.display="none"
      }
      d[this.index].style.borderBottom="4px solid red"
      y[this.index].style.display="block"
    }
  }
}
remen();


function bannerxia(){
  var y=$(".ytl1-zuo2")
  var d=$(".ytl1-zuo1-a")
  for(var i=0;i<d.length;i++){
    d[i].index=i
    d[i].onmouseover=function(){
      for(var i=0;i<d.length;i++){
        d[i].style.borderBottom="0"
        y[i].style.display="none"
      }
      d[this.index].style.borderBottom="4px solid red"
      y[this.index].style.display="block"
    }
  }
}
bannerxia();









for(var i=0;i<9;i++){
  lunlun(i);
}


function lunlun(a){

 var hezi=$(".modelzhong")[a];
   // console.log(hezi);
   var tu=$(".modelzhong-img",hezi);
   var lis=$(".modelzhong-yuan",hezi);
   
   var left=$(".modelzhong-left")[a];
   var right=$(".modelzhong-right")[a];
   var n=0;
   var next=0;

   var width=parseInt(getStyle(tu[0],"width"));

   function move(){
     next=n+1;
     if(next>=tu.length){
      next=0;
    }
    for(var i=0;i<tu.length;i++){
        lis[i].style.background="#6E6E6E";/*当进行一个for循环，让运行的函数
        继续运行，不会出现断裂的结果，瞬间将所有的点背景设置为黑色*/
      }
         lis[next].style.background="#E2155D";/*将所需要的点的颜色瞬间改变为
         红色*/
         tu[next].style.left=width+"px";/*将运行的图片向左运用一个图片长度*/
         animate(tu[n],{left:-width},500);
         animate(tu[next],{left:0},500);/*通过animate的动画效果将下一张移动*/
         n=next;
       }
       function move1(){
         next=n-1
         if(next<0){
          next=tu.length-1;
            /*当下一张的数目小于0的时候
            将最大长度-1赋予它，让他重新运行*/
          }
          for(var i=0;i<tu.length;i++){
            lis[i].style.background="#6E6E6E";
                /*当进行一个for循环，让运行的函数
                继续运行，不会出现断裂的结果，瞬间将所有的点背景设置为黑色*/
              }
              lis[n].style.background="#E2155D";
               /*将所需要的点的颜色瞬间改变为
               红色*/
               tu[next].style.left=-width+"px";/*将运行的图片向左运用一个图片负长度*/
               animate(tu[n],{left:width},500);
               animate(tu[next],{left:0},500);
               n=next;
             }   
             
             left.onclick=function(){/*左箭头点击事件*/
              move1();
            }
            right.onclick=function(){/*右箭头点击事件*/
              move();
            } 
            

            for(var i=0;i<lis.length;i++){
              lis[i].index=i;
              lis[i].onclick=function(){/*小点点击事件*/
                for(var i=0;i<tu.length;i++){
                  lis[i].style.background="#6E6E6E";
                /*当进行一个for循环，让运行的函数
                继续运行，不会出现断裂的结果，瞬间将所有的点背景设置为黑色*/
              } 
              lis[this.index].style.background="#E2155D"
                /*将所需要的点的颜色瞬间改变为
                红色*/
                if(this.index<n){               
                  tu[this.index].style.left=width+"px";
                  animate(tu[n],{left:-width},500);
                  animate(tu[this.index],{left:0},500)
                  n=this.index;
                }else if(this.index>n){
                  tu[this.index].style.left=-width+"px";
                  animate(tu[n],{left:width},500);
                  animate(tu[this.index],{left:0},500)
                  n=this.index;
                } 
              }
            }
          }













          function gailu(){
            var floor=$(".gailou");
            var box=$(".fang");
            var top=document.scrolltop;
            var b=$(".fangs")[0];
    var height1=document.documentElement.clientHeight;//获取浏览器的高
    var bh=b.offsetHeight;
    // console.log(document.documentElement.scrollTop);
    var arr=[{name:'时尚潮流'},
    {name:'潮流女装'},
    {name:'精品男装'},
    {name:'时尚鞋靴'},
    {name:'潮流箱包'},
    {name:'美容护肤'},
    {name:'运动户外'},
    {name:'内衣配饰'},
    {name:'婴童家具'},
    {name:'返回顶部'}
    ]

        b.style.top=(height1-bh)/2+"px";//左边楼层控制居中
        for(var i=0;i<box.length;i++){
         box[i].index=i;
         box[i].onclick=function(){
          if(!sign){
            return;
          }
          var obj=document.documentElement.scrollTop?document.documentElement:document.body;
          var top=floor[this.index].offsetTop;
               // obj.scrollTop=top;//瞬间移动
               animate(document.body,{scrollTop:top},300)
               animate(document.documentElement,{scrollTop:top},300)//缓慢移动

               for(var i=0;i<box.length;i++){
                box[i].style.background="white";//初始为白
                box[this.index].style.background="#E5004F";//按钮变色+
                box[this.index].innerHTML=arr[this.index]['name'];
     //下一个
     //scrollTop>=offsetTop-height
   }
 }
}
var sign=true;




         var flag=true;//定义开关
         var flag1=true;//定义开关
         window.onscroll=function(){
          var obj=document.documentElement.scrollTop?document.documentElement:document.body;
              // console.log(obj.scrollTop);//输出obj
              for(var i=0;i<floor.length;i++){
               if(obj.scrollTop>=floor[i].offsetTop-bh+10){
                for(var j=0;j<box.length;j++){
                  box[j].style.background="white";
                }
                box[i].style.background="#E5004F";
                var imgs=$("imgs",floor[i]);
                for(var j=0;j<imgs.length;j++){
                  var aa=imgs[j].getAttribute("aa");
                  imgs[j].src=aa;
                }


              }
            }
            if(obj.scrollTop>=floor[0].offsetTop-bh+10){
                // b.style.opacity=1;//左边到一楼时显示
                if(flag){
                  flag=false;
                  animate(b,{opacity:1},300,function(){
                    flag1=true;
                  });
                }
              }else{
               // b.style.opacity=0;}//左边到一楼时隐藏
               if(flag1){
                flag1=false;
                animate(b,{opacity:0},300,function(){
                        //当执行此处程序，关掉开关
                        flag=true;
                      });
              }
            }
          }
        }
        gailu();










        function lunbo(){
          var box=$(".hd")[0];
          var imgs=$(".hd-img");
          var left=$(".hd-img-zuo")[0];
          var right=$(".hd-img-you")[0];
          var yuan=$(".hd-img-yuan");
          var width=parseInt(getStyle(imgs[0],"width"));
          var t=setInterval(move,1000);
          var n=0;
          function move(){
           n++;
           if(n>=imgs.length){
            n=0;
          }
          
          for(var i=0;i<imgs.length;i++){
           imgs[i].style.zIndex=0;
           yuan[i].style.background="red"
         }
         imgs[n].style.zIndex=1;
         yuan[n].style.background="blue";
         
       }

       function move1(){
        n--;
        if(n<0){
          n=imgs.length-1;
        }
        for(var i=0;i<imgs.length;i++){
          imgs[i].style.zIndex=0;
        }
        
        imgs[n].style.zIndex=1;
        for(var i=0;i<imgs.length;i++){
          yuan[i].style.background="red"
        }
        yuan[n].style.background="blue";
      }


      left.onclick=function(){
        move1();
      }
      right.onclick=function(){
        move();
      } 

      box.onmouseover=function(){
        clearInterval(t)
      }
      box.onmouseout=function(){
       t=setInterval(move,1000);
     }
     for(var i=0;i<yuan.length;i++){
      yuan[i].index=i;

      yuan[i].onclick=function(){
        for(var i=0;i<imgs.length;i++){
          yuan[i].style.background="red";
          imgs[i].style.zIndex=0;
        } 
        yuan[this.index].style.background="blue"
        imgs[this.index].style.zIndex=1;

      }
    }
    
  }
  lunbo();




  function yin(){
    var b=$(".hstopa")[0];
    var gai=$(".yin")[0];
    b.onmouseover=function(){
      animate(gai,{height:200,width:200},200)
      
    }
    b.onmouseout=function(){
      animate(gai,{height:0,width:0},200)

    }
  }
  yin();


  function yin1(){
    var b=$(".hstopb")[0];
    var gai=$(".yin1")[0];
    b.onmouseover=function(){
      animate(gai,{height:200,width:200},200)
      
    }
    b.onmouseout=function(){
      animate(gai,{height:0,width:0},200)

    }
  }
  yin1();


  function yin2(){
    var b=$(".hstopc")[0];
    var gai=$(".yin2")[0];
    b.onmouseover=function(){
      animate(gai,{height:245,width:66},200)
      
    }
    b.onmouseout=function(){
      animate(gai,{height:0,width:0},200)

    }
  }
  yin2();

  function yin3(){
    var b=$(".hdmain-you-c")[0];
    var gai=$(".yin3")[0];
    b.onmouseover=function(){
      animate(gai,{height:200,width:200},200)
      
    }
    b.onmouseout=function(){
      animate(gai,{height:0,width:0},200)

    }
  }
  yin3();



  for(var i=0;i<10;i++){
    ahd(i)
  }

  function ahd(n){
    var y=$(".ahd")[n]
    var d=$(".hd-zuo-a")[n]
    addEvent(d,"mouseover",function(){y.style.display="block"})
    addEvent(d,"mouseout",function(){y.style.display="none"})   
  }






  function ahdb(n){
    var y=$(".modelzhong-right")[n]
    var d=$(".modelzhong")[n]
    addEvent(d,"mouseover",function(){y.style.display="block"})
    addEvent(d,"mouseout",function(){y.style.display="none"})   
  }
























})