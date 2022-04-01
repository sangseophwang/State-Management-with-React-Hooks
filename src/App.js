import createStore from "./Hooks/useGlobalState";

function App() {
  const [useStore, dispatch] = createStore(0);

  const Display = () => {
    const count = useStore();
    return <div>{count}</div>;
  };

  const Plus = () => (
    <button onClick={() => dispatch((count) => count + 1)}>+</button>
  );

  const Minus = () => (
    <button onClick={() => dispatch((count) => count - 1)}>-</button>
  );
  return (
    <div className="App">
      <Display />
      <Plus />
      <Minus />
    </div>
  );
}

export default App;
