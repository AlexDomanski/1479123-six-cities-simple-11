import Main from '../../pages/main/main';


function App(props: { offersAmount: number }): JSX.Element {
  return (
    <Main offersAmount={props.offersAmount} />
  );
}

export default App;
