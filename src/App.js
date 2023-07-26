import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    // ...cur의 순서를 바꾸면 todo가 위로 쌓인다.
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo('');
  };
  // todo 배열 속 버튼의 index를 찾아서 삭제하라 ( filter함수 사용 )
  // Array.prototype.filter() : 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
  const deleteBtn = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => deleteBtn(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
