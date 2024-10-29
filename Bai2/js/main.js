$(document).ready(function() {
    $("#capnhat").click(function() {
        var txtmv = $("#mv").val();
        var txtbr = $("#br").val(); 
        var rad = $('[name="nt"]:radio:checked').val();
        if(rad == "Vang"){
            $("#vangmv").html(txtmv);
            $("#vangbr").html(txtbr);
            $("#usdmv").html("");
            $("#usdbr").html("");
        } else {
            $("#vangmv").html("");
            $("#vangbr").html("");
            $("#usdmv").html(txtmv);
            $("#usdbr").html(txtbr);
        }
    });

    $("#xe").change(function(){
        var h = $(this).children("option:selected").val();
        $("#hinhxe").attr("src", h);
    });
});