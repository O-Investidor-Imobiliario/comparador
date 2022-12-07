export const Button = ({ title, onClick }: { title: string; onClick: any }) => {
  return (
    <>
      <button onClick={() => onClick()}>
        <p>{title}</p>
      </button>
    </>
  );
};
