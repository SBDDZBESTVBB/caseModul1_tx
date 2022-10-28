function drawXx() {

    let a = new Array()
    a[0] = '<img src="Anhbaitap/xucxac1diem.png" />'
    a[1] = '<img src="Anhbaitap/xucxac2diem.png" />'
    a[2] = '<img src="Anhbaitap/xucxac3diem.png" />'
    a[3] = '<img src="Anhbaitap/xucxac4diem.png" />'
    a[4] = '<img src="Anhbaitap/xucxac5diem.png" />'
    a[5] = '<img src="Anhbaitap/xucxac6diem.png" />'
    let i = Math.round(5 * Math.random());
    let j = Math.round(5 * Math.random());
    let k = Math.round(5 * Math.random());
    document.getElementById("anhxx1").innerHTML = a[i]
    document.getElementById("anhxx2").innerHTML = a[j]
    document.getElementById("anhxx3").innerHTML = a[k]
    result = i + j + k + 3
    return result
}

function tinhDiem() {
    konan();
    if (result > 10 && chon == 1) {
        point = point + t
    }
    if (result > 10 && chon == 0) {
        point = point - x
    }

    if (result < 11 && chon == 1) {
        point = point - t
    }
    if (result < 11 && chon == 0) {
        point = point + x
    }
    document.getElementById("pointsss").innerText = "Point" + "=" + point
    t = 0;
    x = 0;
    accounts[userid].points = point;
    console.log(accounts);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    if (point <= 0) {
        loseDialog.showModal();
        clearInterval(gamechay)
    }

}

function chontai() {
    t = +document.getElementById("tiendatcuoc").value;
    chon = 1
}

function chonxiu() {
    x = +document.getElementById("tiendatcuoc").value;
    chon = 0
}

function drawcau() {
    if (result < 11) {
        anhketqua.shift();
        anhketqua.push('Anhbaitap/hinhtronmautrang.png');
    }
    if (result > 10) {
        anhketqua.shift();
        anhketqua.push('Anhbaitap/hinhtronmauden.png');
    }
    document.getElementById('anhkq0').src = anhketqua[0];
    document.getElementById('anhkq1').src = anhketqua[1];
    document.getElementById('anhkq2').src = anhketqua[2];
    document.getElementById('anhkq3').src = anhketqua[3];
    document.getElementById('anhkq4').src = anhketqua[4];
    document.getElementById('anhkq5').src = anhketqua[5];
    document.getElementById('anhkq6').src = anhketqua[6];
    document.getElementById('anhkq7').src = anhketqua[7];

}

function init() {
    let mouseMove = function (e) {
        if (enableMouse == true) {
            const x = window.Event
                ? e.pageX
                : event.clientX +
                (document.documentElement.scrollLeft
                    ? document.documentElement.scrollLeft
                    : document.body.scrollLeft);
            const y = window.Event
                ? e.pageY
                : event.clientY +
                (document.documentElement.scrollTop
                    ? document.documentElement.scrollTop
                    : document.body.scrollTop);

            let node = document.getElementById("id-object");
            node.style.top = y - 150 + "px";
            node.style.left = x - 150 + "px";
        }
    };
    window.addEventListener("mousedown", function (e) {
        window.addEventListener("mousemove", mouseMove);

    })
    window.addEventListener("mouseup", function (e) {
        window.removeEventListener("mousemove", mouseMove);
    })
};


function batNan() {
    enableMouse = true;
}

function konan() {
    enableMouse = false;
}






