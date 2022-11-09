            //Element oluşturma

const li = document.createElement("li");
li.className = "class";
li.setAttribute("title","text"); //li etiketine title=text ekler



//Text node
const text = document.createTextNode("5"); //Yukarıda oluşturduğumuz etiketin içine ekler
li.appendChild(text);

const a = document.createElement("a");
a.setAttribute("href","#");
a.className = "class";



//Append a to li
li.appendChild(a);//A etiketini li'nin altına yazar

console.log(li);



            //Element silme

let list = document.querySelector("#id");
list.remove();

list.childNodes[silinecek-sıra].remove();

list.children[silinecek-sıra].remove();

list.removeChild(list.children[silinecek-sıra]);



//Removing attribute
list.children[silinecek-sıra].removeAttribute("class"); //Seçilen children'in classını siler

for(let i = 0; i < list.children.length; i++){
    list.children[i].removeAttribute("class"); //Seçilen etiketin tüm classları siler
} 



console.log(list);
