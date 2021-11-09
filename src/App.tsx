import { useState } from 'react';
import './App.css';
import { Header, MessagesListContainer, SendMessageContainer } from './components';

function App() {
  const [currentAuthor, setCurrentAuthor] = useState<string>('Tom');

  const handleCurrentAuthor = (name: string) => {
    setCurrentAuthor(name)
  }

  return (
    <div className="App">
      <Header
        currentAuthor={currentAuthor}
        handleCurrentAuthor={handleCurrentAuthor}
      />
      <MessagesListContainer currentAuthor={currentAuthor}/>
      <SendMessageContainer currentAuthor={currentAuthor}/>
    </div>
  );
}

export default App;
