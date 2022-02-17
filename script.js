$(document).ready(function () {

    $("#stream1_btn").on(function () {
        $(".stream1").show();
        $(".stream1").show("slow");
        $(".stream1").show("medium");
        $(".stream1").show("fast");
        $(".stream1").show(1000);
    });

    $("#stream1_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });
    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });
});

$(document).ready(function () {
    // Create the slideToggle effects each of the paragraphs and
    // buttons
    $("#button_effects1").click(function () {
        $('#par1').slideToggle('1000');
    });
    $("#button_effects2").click(function () {
        $('#par2').slideToggle('1000');
    });
    $("#button_effects3").click(function () {
        $('#par3').slideToggle('1000');
    });
    $("#button_effects4").click(function () {
        $('#par4').slideToggle('1000');
    });
    $("#button_effects5").click(function () {
        $('#par5').slideToggle('1000');
    });
    $("#button_effects6").click(function () {
        $('#par6').slideToggle('1000');
    });

    // Use the fadeTo effect when the mouse hovers over a specific button
    // and fadeTo again when the mouse is no longer hovering over the button
    $("#button_effects1").mouseenter(function () {
        $('#button_effects1').fadeTo(1000, 0.5);
    });
    $("#button_effects1").mouseleave(function () {
        $('#button_effects1').fadeTo(1000, 1);
    });

    $("#button_effects2").mouseenter(function () {
        $('#button_effects2').fadeTo(1000, 0.5);
    });
    $("#button_effects2").mouseleave(function () {
        $('#button_effects2').fadeTo(1000, 1);
    });

    $("#button_effects3").mouseenter(function () {
        $('#button_effects3').fadeTo(1000, 0.5);
    });
    $("#button_effects3").mouseleave(function () {
        $('#button_effects3').fadeTo(1000, 1);
    });

    $("#button_effects4").mouseenter(function () {
        $('#button_effects4').fadeTo(1000, 0.5);
    });
    $("#button_effects4").mouseleave(function () {
        $('#button_effects4').fadeTo(1000, 1);
    });

    $("#button_effects5").mouseenter(function () {
        $('#button_effects5').fadeTo(1000, 0.5);
    });
    $("#button_effects5").mouseleave(function () {
        $('#button_effects5').fadeTo(1000, 1);
    });

    $("#button_effects6").mouseenter(function () {
        $('#button_effects6').fadeTo(1000, 0.5);
    });
    $("#button_effects6").mouseleave(function () {
        $('#button_effects6').fadeTo(1000, 1);
    });

    $("#myButton").removeClass("blueBox").addClass("border");
    $("p").css("color", "blue").slideUp(2000).slideDown(2000);
    $("a").attr("href", "http://www.example.com");
});
// challenges
$("p").click(function () {
    $("p").css("color", "red");
});

$("h2").hover(function () {
    $("h2").css("background", "lightblue");
});

$(".card-panel").mouseenter(function () {
    $("body").css("background-color", "black");
});

$(".card-panel").mouseleave(function () {
    $("body").css("background-color", "#e1e2e2");
});
//------------------------------
$("#card-panel-1").click(function () {
    $("#card-panel-1").hide("slow");
});

$("#card-panel-2").click(function () {
    $("#card-panel-2").hide("medium");
});
$("#card-panel-3").click(function () {
    $("#card-panel-3").hide("fast");
});

$("#card-panel-4").click(function () {
    $("#card-panel-4").hide(3000);
});
//-------------------------------------------------
$("#button-card-1").click(function () {
    $("#par-1").toggle("slow");
});

$("#button-card-2").click(function () {
    $("#par-2").toggle("medium");
});

$("#button-card-3").click(function () {
    $("#par-3").toggle("fast");
});
$("#button-card-4").click(function () {
    $("#par-4").toggle();
});
//-------------------------------------------
$("#button-card-1").click(function () {
    $("#par-1").slideToggle(750);
});

$("#button-card-2").click(function () {
    $("#par-2").slideToggle(1000);
});
$("#button-card-3").click(function () {
    $("#par-3").slideToggle();
});
//-----------------------------------------------------
$("#button-card-1").mouseenter(function () {
    $("#par-1").fadeTo(200, 0.5);
});

$("#button-card-1").mouseleave(function () {
    $("#par-1").fadeTo(200, 1);
});

$("#button-card-2").mouseenter(function () {
    $("#par-2").fadeTo(1000, 0.5);
});
$("#button-card-2").mouseleave(function () {
    $("#par-2").fadeTo(1000, 1);
});