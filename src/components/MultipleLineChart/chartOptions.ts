export const options = {
  maintainAspectRatio: true,
  responsive: true,
  stacked: false,
  interaction: {
    intersect: false,
    mode: "index" as const,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        callback: function (value: any) {
          if (value >= 1000000000000) {
            return value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            });
          }
          if (value >= 1000000000) {
            return `R$ ${value / 1000000000} B`;
          }
          if (value >= 1000000) {
            return `R$ ${value / 1000000}M`;
          }
          if (value > 1000) {
            return `R$ ${value / 1000} K`;
          } else {
            return `R$ ${value}`;
          }
        },
      },
    },
    y1: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 1,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
