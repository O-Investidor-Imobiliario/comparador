import { Colors } from "../../styles/colors";

export const styles = (width: number): any => {
  return width >= 24
    ? {
        container: {},
        result: {
          color: Colors.PRIMARY,
          fontWeight: "bold",
          fontSize: 32,
          lineHeight: "48px",
          margin: 0,
        },
        comparatorName: {
          color: Colors.RED,
        },
        incomeValue: {
          color: Colors.GREEN,
          fontWeight: "bold",
        },
        numberAndTooltipContainer: { display: "flex" },
      }
    : {
        container: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        result: {
          color: Colors.PRIMARY,
          fontWeight: "bold",
          fontSize: 64,
          lineHeight: "64px",
          margin: 0,
        },
        comparatorName: {
          color: Colors.RED,
        },
        incomeValue: {
          color: Colors.GREEN,
          fontWeight: "bold",
        },
        numberAndTooltipContainer: { display: "flex" },
      };
};
