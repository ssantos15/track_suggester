$(document).ready(function() {
  ("form#track-suggester").submit(function(event) {
    event.preventDefault();
    console.log();
    debugger;
    var iwebOrSoftware = $("input#webOrSoftware").val();

    var ibigOrSmall = $("input#bigOrSmall").val();

    var imobileOrInternal = $("input#mobileOrInternal").val();

    var ibackendOrFrontend = $("input#backendOrFrontend").val();

    var isecurity = $("input#security").val();


    if(iwebOrSoftware === "yes")
    {
      if(ibackendOrFrontend ==="yes")
        {
          ("#ruby").show();
        }
      else
        {
          ("#php").show();
        }
    }

    else
    {
      if(ibigOrSmall === "yes")
      {
        if(imobileOrInternal === "yes")
        {
          ("#java").show();
        }
        else
        {
          ("#cSharp").show();
        }
      }
      else
      {
        ("#cSharp").show();
      }
    }


  });

});
