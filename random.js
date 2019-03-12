$(function () {
    $("#submit").click(function (lv) {
        var lv = $("#lv").val();
        console.log("Clicked");
        console.log(lv);
        var array = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
        var col, row, index;
        switch (lv) {
            case "ez": col = 5, row = 5; break;
            case "normal": col = 8, row = 10; break;
            case "hard": col = 10, row = 20; break;
            case "extreme": col = 15, row = 30; break;
        }

        var i, j, count0 = 0, count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0, count7 = 0, count8 = 0, count9 = 0;

        for (i = 1; i <= row; i++) {
            var table = '<tr>';
            $('#table').append(table);
            for (j = 1; j <= col; j++) {
                var item = array[Math.floor(Math.random() * array.length)];
                var tableRow = '<td>' + item + '</td>';
                if (item == num[0]) { count0 = +1; }
                else if (item == array[1]) { count1 += 1; }
                else if (item == array[2]) { count2 += 1; }
                else if (item == array[3]) { count3 += 1; }
                else if (item == array[4]) { count4 += 1; }
                else if (item == array[5]) { count5 += 1; }
                else if (item == array[6]) { count6 += 1; }
                else if (item == array[7]) { count7 += 1; }
                else if (item == array[8]) { count8 += 1; }
                else { count9 += 1; }
                $('#table').append(tableRow);

            }
            var table2 = '</tr>';
            $('#table').append(table2);
        }




        // console.log("count0=" + count0); console.log("count1=" + count1);
        // console.log("count2=" + count2); console.log("count3=" + count3);
        // console.log("count4=" + count4); console.log("count5=" + count5);
        // console.log("count6=" + count6); console.log("count7=" + count7);
        // console.log("count8=" + count8); console.log("count9=" + count9);
        $(document).ready(function(){
            
            $("#submit").click(function(){
                $("#table").empty();
            });
        });
        // $("#submit").click(function(){
        //     $("#submit").text("Try again");

        //    $("#answer").click(function () {
        //     var num = $('#num').val();
        //     var numarray = Array(count0, count1, count2, count3, count4, count5, count6, count7, count8, count9);
        //     // console.log("count0=" + numarray[0]); console.log("count1=" + numarray[1]);
        //     // console.log("count2=" + numarray[2]); console.log("count3=" + numarray[3]);
        //     // console.log("count4=" + numarray[4]); console.log("count5=" + numarray[5]);
        //     // console.log("count6=" + numarray[6]); console.log("count7=" + numarray[7]);
        //     // console.log("count8=" + numarray[8]); console.log("count9=" + numarray[9]);

        //     var maxnum = numarray[0], i, j, k;
        //     for (i in numarray) {
        //         if (numarray[i] > maxnum) {
        //             maxnum = numarray[i];
        //         }
        //     }
        //     var showresult;
        //     var other = new Array();
        //     for (j in numarray) {
        //         if (numarray[j] == maxnum) {
        //             other.push(j);
        //         }
        //     }
        //     for (k in other) {
        //         if (other.length == 1) {
        //             showresult = "คำตอบ คือ เลข " + other;
        //         }
        //         else {
        //             showresult = "คำตอบทัังหมดมี " + other.length + " เลข คือ " + other;
        //         }
        //     }

        //     console.log("max count= " + other);
        //     console.log(num);
        //     console.log(showresult);
        //     for(var l in other){
        //         if(num==other[l]){
        //             check="true";break;
        //         }else{check="false";}
        //     }
        //     if (check=="true") {
        //         var result = "You are Won" + '<br>'+ showresult + '</br>';
        //     } else { var result = "You are Lose" + '<br>' + "Please try again" + '</br>'; }
        //     $('#result').append(result);



        // }); 
        // });
        
    });


});