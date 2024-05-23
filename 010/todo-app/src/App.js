import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => (
    <TodoTemplate>
        <TodoInsert />
        <TodoList />
    </TodoTemplate>
);

export default App;
