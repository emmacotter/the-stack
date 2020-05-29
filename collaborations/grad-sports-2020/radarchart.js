let data = {
  labels: ['NCAA Rank', 'Conference Standing', 'Win Percentage'],
  datasets: [
    {
      label: "Men's Basketball",
      backgroundColor: 'rgb(141,211,199, 0.3)',
      borderColor: 'rgb(141,211,199)',
      pointBackgroundColor: 'rgb(141,211,199)',
      data: [0, 275 / 3, 61.3],
      hidden: true,
    },
    {
      label: "Women's Basketball",
      backgroundColor: 'rgb(255,255,179, 0.3)',
      borderColor: 'rgb(255,255,179)',
      pointBackgroundColor: 'rgb(255,255,179)',
      data: [64, 275 / 3, 83.9],
    },
    {
      label: 'Gymnastics',
      backgroundColor: 'rgb(190,186,218, .3)',
      borderColor: 'rgb(190,186,218)',
      pointBackgroundColor: 'rgb(190,186,218)',
      data: [92, 250 / 3, 76.9],
    },
    {
      label: 'Baseball',
      backgroundColor: 'rgb(251,128,114, .3)',
      borderColor: 'rgb(251,128,114)',
      pointBackgroundColor: 'rgb(251,128,114)',
      data: [84, 100, 86.7],
    },
    {
      label: 'Softball',
      backgroundColor: 'rgb(128,177,211, .3)',
      borderColor: 'rgb(128,177,211)',
      pointBackgroundColor: 'rgb(128,177,211)',
      data: [100, 100, 96.2],
    },
    {
      label: "Women's Water Polo",
      backgroundColor: 'rgb(253,180,98, .3)',
      borderColor: 'rgb(253,180,98)',
      pointBackgroundColor: 'rgb(253,180,98)',
      data: [96, 100, 90.5],
      hidden: true,
    },
    {
      label: "Men's Volleyball",
      backgroundColor: 'rgb(179,222,105, .3)',
      borderColor: 'rgb(179,222,105)',
      pointBackgroundColor: 'rgb(179,222,105)',
      data: [72, 200 / 3, 52.6],
      hidden: true,
    },
    {
      label: 'Beach Volleyball',
      backgroundColor: 'rgb(252,205,229, .3)',
      borderColor: 'rgb(252,205,229)',
      pointBackgroundColor: 'rgb(252,205,229)',
      data: [96, 0, 86.7],
      hidden: true,
    },
    {
      label: "Men's Tennis",
      backgroundColor: 'rgb(217,217,217, .3)',
      borderColor: 'rgb(217,217,217)',
      pointBackgroundColor: 'rgb(217,217,217)',
      data: [16, 275 / 3, 69.2],
      hidden: true,
    },
    {
      label: "Women's Tennis",
      backgroundColor: 'rgb(188,128,189, .3)',
      borderColor: 'rgb(188,128,189)',
      pointBackgroundColor: 'rgb(188,128,189)',
      data: [72, 100, 92.3],
      hidden: true,
    },
    {
      label: 'Rowing',
      backgroundColor: 'rgb(204,235,197, .3)',
      borderColor: 'rgb(204,235,197)',
      pointBackgroundColor: 'rgb(204,235,197)',
      data: [24, 0, 100],
      hidden: true,
    },
    {
      label: 'Swim and Dive',
      backgroundColor: 'rgb(255,237,111, .3)',
      borderColor: 'rgb(255,237,111)',
      pointBackgroundColor: 'rgb(255,237,111)',
      data: [8, 0, 70],
      hidden: true,
    },
  ],
};

let options = {
  scale: {
    ticks: {
      suggestedMin: 0,
      suggestedMax: 100,
      display: false,
    },
    pointLabels: {
      fontSize: 18,
    },
  },
  legend: {
    position: 'left',
  },
};

let ctx = document.getElementById('radarchart');
var barchart = new Chart(ctx, {
  type: 'radar',
  data: data,
  options: options,
});