function App() {
  const name = '리액트';
  const style = {
    padding: 16,
    backgroundColor: 'black',

    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold'
  }

  return <div style={style}>{name}</div>;
}

export default App;
