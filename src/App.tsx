import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <table>
        <thead>
          <th>
            <td>Name</td>
            <td>Skill</td>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>Kevin Hayes</td>
            <td>{Math.floor(Math.random() * 50) + 50}</td>
          </tr>
          <tr>
            <td>Sammy Blais</td>
            <td>{Math.floor(Math.random() * 50) + 50}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
