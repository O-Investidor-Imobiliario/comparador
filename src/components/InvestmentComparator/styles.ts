import styled from "styled-components";

export const styles = {
  container: {
    maxWidth: 1140,
  },
  headerContainer: {
    minHeight: 200,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filtersContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginBottom: 24,
  },
};

export const TextFieldContainer = styled.div`
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
