$(document).ready(function() {
  $("form#track-suggester").submit(function(event) {
    event.preventDefault();

    console.log();
    debugger;
    var iwebOrSoftware = $("input#webOrSoftware").val();
    var ibigOrSmall = $("input#bigOrSmall").val();
    var imobileOrInternal = $("input#mobileOrInternal").val();
    var ifrontendOrBackend = $("input#frontendOrBackend").val();
    var isecurity = $("input#security").val();

    var iname = $("input#name").val();
    $(".name").text(iname);

    if(iwebOrSoftware === "yes")
    {
      if(ifrontendOrBackend ==="yes")
        {
          $("#ruby").show();
          $("#introHide").hide();
        }
      else
        {
          $("#php").show();
          $("#introHide").hide();
        }
    }

    else
    {
      if(ibigOrSmall === "yes")
      {
        if(imobileOrInternal === "yes")
        {
          $("#java").show();
          $("#introHide").hide();
        }
        else
        {
          $("#cSharp").show();
          $("#introHide").hide();
        }
      }
      else
      {
        $("#java").show();
        $("#introHide").hide();
      }
    }


  });

});
