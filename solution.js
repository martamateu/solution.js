// code in order to make titles //
var p = document.querySelectorAll('.h3 span');
for (let i = 0; i < p.length; i++) {

    p[i].innerText = 'BLOG-ARTICLE - ' + ([i + 1] > 9 ? "" + [i + 1] : "0" + [i + 1])

}


// Code to change the background color for odds and pairs // 

var box = document.querySelectorAll('.insights-content .post-wrapper');


for (let i = 0; i < box.length; i++) {
    if (i % 2 === 0) {
        box[i].style.backgroundColor = "#f5f5f5";

    } else {
        box[i].style.backgroundColor = "#fff";

    }
}

// Code to change according if it's hover or not// 

for (let i = 0; i < box.length; i++) {
    box[i].onmouseover = function (e) {
        box[i].style.backgroundColor = "#666";
    }

    box[i].onmouseleave = function (e) {
        if (i % 2 === 0) {
            box[i].style.backgroundColor = "#f5f5f5";
        } else {
            box[i].style.backgroundColor = "#fff";

        }

    }
}