import "./App.css";
import BookTable from "./components/BookTable";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <div className="container mt-5">
        <h1>Add Book:</h1>
        <Form></Form>
        <BookTable></BookTable>
      </div>
    </div>
  );
}

export default App;
