import './App.css';
import Hello from './my-component/Hello';
import Welcome from './my-component/Welcome';

function App() {
  return (
    <div className="App">
      <Hello name="Robeyoul Awal" age="22"></Hello>
      <Hello name="Elora Khatun" age="20"></Hello>
      <Hello name="Asha Akter" age="15"></Hello>
      <Hello name="Taslima Akter" age="22"></Hello>

      <Welcome name="class"></Welcome>
      <Welcome name="i am class "></Welcome>
    </div>
  );
}

export default App;
