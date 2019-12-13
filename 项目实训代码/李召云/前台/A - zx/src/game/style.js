var image = document.getElementsByTagName("img");
var box = document.getElementsByClassName("box");
image.draggable = true;
var source = "";
var nowImage;
var nowImageBox;
var thenImage;
for(let i=0;i<image.length;i++){
    source = "picture"+(i+1)+".jpg";
    image[i].setAttribute("src",source);
    image[i].onmousedown = function(){
        nowImage = this;
        nowImageBox = this.parentNode;
    }
    box[i].ondragover = function(event){
        event.preventDefault(); //去除ondragover事件的默认行为，该行为默认无法将数据或者元素放置到其他元素
    }
    box[i].ondrop = function(event){
        thenImage = box[i].childNodes[0];
        box[i].appendChild(nowImage);
        nowImageBox.appendChild(thenImage);
    }
}