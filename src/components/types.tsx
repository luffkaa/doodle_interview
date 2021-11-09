export interface GlobalProps {
  currentAuthor: string,
}

export interface HandlingMessageProps extends GlobalProps{
  handleMessageSent: () => void,
  isMessageSent?: boolean,
}
