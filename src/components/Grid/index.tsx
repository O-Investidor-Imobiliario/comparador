import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function getWidthGrid(value: number): string | undefined {
  const width = (value / 12) * 100;
  return `width: ${width}%`;
}

export interface ColumnProps {
  mobile?: number;
  tablet?: number;
  desktop?: number;
}

export const Column = styled.div<ColumnProps>`
  float: left;
  padding: 0.25rem;
  box-sizing: border-box;
  @media (max-width: 768px) {
    ${({ mobile }) => mobile && getWidthGrid(mobile)}
  }
  @media (min-width: 768px) {
    ${({ tablet }) => tablet && getWidthGrid(tablet)}
  }
  @media (min-width: 1000px) {
    ${({ desktop }) => desktop && getWidthGrid(desktop)}
  }
`;
