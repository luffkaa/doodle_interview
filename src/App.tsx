import { useState } from 'react';
import './App.css';
import { MessagesListContainer, SendMessageContainer } from './components';

function App() {
  const [currentAuthor, setCurrentAuthor] = useState<string>('Tom');

  return (
    <div className="App">
      <MessagesListContainer currentAuthor={currentAuthor}/>
      <SendMessageContainer currentAuthor={currentAuthor}/>
    </div>
  );
}

export default App;
