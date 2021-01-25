<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Bar Chart</title>
    <script src="https://cdn.anychart.com/releases/8.0.0/js/anychart-base.min.js">>/script>
  </head>
  <body>
    <div id="container" style="width: 100%; height: 100%"></div>
    <script>
      anychart.onDocumentReady(function() {
 
        // set the data
        var data = {
            header: ["Campaign", "Donation Amount"],
            rows: [
              ["ActBlue", 1500],
              ["Biden", 87000],
              ["DCCC", 17500],
        ]};
 
        // create the chart
        var chart = anychart.bar();
 
        // add the dataÎ
        chart.data(data);
 
        // set the chart title
        chart.title("The deadliest earthquakes in the XXth century");
 
        // draw
        chart.container("container");
        chart.draw();
      });
    </script>
  </body>
</html>