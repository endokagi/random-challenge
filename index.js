$(function () {
    // ก่อนทำงาน
    $("#img").hide();
    $("#img").fadeIn(1000);
    $("#welcome").hide();
    $("#welcome").fadeIn(1000);
    $("#welcome").fadeTo("slow", 0.7);
    $("#divlv").hide();
    $("#divlv").show(1150);
    $("#divAns").hide();
    $("#reset").hide();

    // click submit
    $("#submit").click(function (level) {
        var level = $("#lv").val();
        console.log("Submit Clicked!");
        console.log("Level: " + lv);
        var col, row;
        switch (level) {
            case "ez": col = 4, row = 4; break;
            case "normal": col = 8, row = 8; break;
            case "hard": col = 10, row = 10; break;
            case "extreme": col = 9, row = 20; break;
        }
        // show table
        var i, j, total = 0, count0 = 0, count1 = 0, count2 = 0, count3 = 0
            , count4 = 0, count5 = 0, count6 = 0, count7 = 0, count8 = 0, count9 = 0;
        for (i = 1; i <= row; i++) {
            var table = '<tr>';
            $('#table').append(table);
            for (j = 1; j <= col; j++) {
                var item = Math.floor(Math.random() * 10);
                var tableRow = '<td>' + item + '</td>';
                if (item == 0) { count0 = +1; }
                else if (item == 1) { count1 += 1; total += item; }
                else if (item == 2) { count2 += 1; total += item; }
                else if (item == 3) { count3 += 1; total += item; }
                else if (item == 4) { count4 += 1; total += item; }
                else if (item == 5) { count5 += 1; total += item; }
                else if (item == 6) { count6 += 1; total += item; }
                else if (item == 7) { count7 += 1; total += item; }
                else if (item == 8) { count8 += 1; total += item; }
                else { count9 += 1; total += item; }
                $('#table').append(tableRow);
            }
            var table2 = '</tr>';
            $('#table').append(table2);
        }
        $("#welcome").text("ทายซิ! เลขไหน เยอะสุด").hide().fadeIn(1000).css("color", "red")
            .css("font-family", "'Itim', cursive").css("text-align", "right");
        $("#divlv").hide();
        $("#table").fadeOut("slow");
        $("#table").fadeIn(1000);
        $("#divAns").hide();
        $("#divAns").fadeIn(1000);


        // click answer
        $("#answer").click(function () {
            console.log("Answer Clicked!");
            var num = $('#num').val();
            var checkAns = 0;
            while (checkAns == 0) {
                if (num == 0 || num == 1 || num == 2 || num == 3 || num == 4
                    || num == 5 || num == 6 || num == 7 || num == 8 || num == 9) {
                    checkAns = 1;
                }
                else if (num == "0572") {
                    checkAns = 2; break;
                }
                else if (num == total) {
                    checkAns = 3; break;
                }
                else {
                    alert("เฉพาะเลข 1-9 เท่านั้น");
                    checkAns = 0; break;
                }
            }
            $("#divAns").hide();
            $("#table").remove();
            $("#reset").fadeIn(1000);

            // calculate
            var numarray = Array(count0, count1, count2, count3, count4
                , count5, count6, count7, count8, count9);

            // find max num
            var maxnum = numarray[0], i, j, k;
            for (i in numarray) {
                if (numarray[i] > maxnum) {
                    maxnum = numarray[i];
                }
            }
            // count num repeat 
            var showresult;
            var other = new Array();
            for (j in numarray) {
                if (numarray[j] == maxnum) {
                    other.push(j);
                }
            }
            // answer
            for (k in other) {
                if (other.length == 1) {
                    showresult = "คำตอบ คือ เลข " + other;
                }
                else { showresult = "คำตอบทัังหมดมี " + other.length + " เลข คือ " + other; }
            }

            // check answer
            var check;
            for (var l in other) {
                if (num == other[l]) {
                    check = "true"; break;
                } else { check = "false"; }
            }
            var result;
            if (checkAns == 0) {
                $("#welcome").text("Try again").hide().fadeIn(1000).css("color", "gold");
                result = "Oops! Something went wrong<br>ใส่ผิดอะ ลองใหม่นะ</br>";
                $("#body").css("background-image"
                    , "url(https://stmed.net/sites/default/files/question-mark-wallpapers-25286-9601130.jpg)");
                $("#result").css("text-shadow", "0.1em 0.1em 0.2em green").css("color", "yellow");
                console.log("Oops! Something went wrong");
            }
            else if (checkAns == 2) {
                $("#welcome").text("Congrats!").hide().fadeIn(1000).css("color", "gold");
                result = "Wrong Answer!<p></p>,but you found it.";
                $("#body").css("background-image"
                    , "url(https://wallpapermemory.com/uploads/815/easter-egg-wallpaper-full-hd-324919.jpg)");
                $("#result").css("text-shadow", "0.1em 0.1em 0.2em black").css("color", "gold");
                console.log("ee!");
            }
            else if (checkAns == 3) {
                $("#welcome").text("?  ?  ?  ?").hide().fadeIn(1000).css("color", "gold");
                result = "Yeah!<br>" + total + "</br>";
                $("#body").css("background-image"
                    , "url(https://ak6.picdn.net/shutterstock/videos/3808376/thumb/4.jpg)");
                $("#result").css("text-shadow", "0.1em 0.1em 0.2em black").css("color", "gold");
                console.log("ee!");
            }
            else {
                if (check == "true") {
                    $("#welcome").text("Thank You").hide().fadeIn(1000).css("color", "gold");
                    result = "You Won" + '<br>' + showresult + '</br>';
                    $("#body").css("background-image"
                        , "url(https://images.alphacoders.com/884/thumb-1920-884239.jpg)");
                    $("#result").css("color", "yellow");
                    console.log("You Won");
                }
                else if (check == "false") {
                    $("#welcome").text("Thank You").hide().fadeIn(1000).css("color", "gold");
                    result = "แง~~ ทายผิดนะแจ๊ะ T-T<br>ไว้ลองใหม่นะ ;p</br>";
                    $("#body").css("background-image"
                        , "url(https://i.imgur.com/FcVnqFW.jpg)");
                    $("#result").css("text-shadow", "0.1em 0.1em 0.2em black").css("color", "wheat");
                    console.log("You guess wrong");
                }
            }

            // click reset
            $('#result').append(result);
            $('#reset').click(function () {
                location.reload();
            });


        });
    });
});
