function scrollWin() {
            window.scrollTo(0, 596);
        }

        function scrollWind() {
            window.scrollTo(0, 1140);
        }
  var myVar;

      function myFunction() {
          myVar = setTimeout(showPage, 2500);
      }

      function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
      }
