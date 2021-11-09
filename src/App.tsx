import { useState } from 'react';
import './App.css';
import { Header, MessagesListContainer, SendMessageContainer } from './components';

function App() {
  const [currentAuthor, setCurrentAuthor] = useState<string>('Tom');
  const [isMessageSent, setIsMessageSent] = useState<boolean>(false)

  const handleCurrentAuthor = (name: string) => {
    setCurrentAuthor(name)
  }
  
  const handleMessageSent = () => {
    setIsMessageSent(!isMessageSent)
  }

  return (
    <div className="App">
      <Header
        currentAuthor={currentAuthor}
        handleCurrentAuthor={handleCurrentAuthor}
      />
      <MessagesListContainer
        currentAuthor={currentAuthor}
        handleMessageSent={handleMessageSent}
      />
      <SendMessageContainer 
        currentAuthor={currentAuthor} 
        handleMessageSent={handleMessageSent}
      />
    </div>
  );
}

export default App;
