import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([
    '🤖 Olá! Bem-vindo ao projeto AlimentaMG 🧺',
    'Digite seu endereço para encontrar o mercado mais próximo com promoções.',
    'Exemplo: Rua José Silva, Lavras - MG',
  ]);
  const [userInput, setUserInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    setMessages(prev => [...prev, `🧍‍♂️ ${userInput}`]);

    try {
      const response = await axios.post('http://localhost:3000/chat', {
        address: userInput,
      });

      const reply = response.data.userResponse || '❌ Não foi possível encontrar um fornecedor.';
      setMessages(prev => [...prev, `🤖 ${reply}`]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, '❌ Erro ao se comunicar com o servidor.']);
    }

    setUserInput('');
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index} style={styles.message}>{msg}</div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div style={styles.inputArea}>
        <input
          type="text"
          placeholder="Digite seu endereço..."
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.button}>Enviar</button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100%',
    maxWidth: '480px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    backgroundColor: '#ffffff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    height: '600px',
  },
  chatBox: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '15px',
    overflowY: 'auto',
    boxShadow: 'inset 0 0 8px rgba(0,0,0,0.05)',
    color: '#222222',
    fontSize: '1rem',
  },
  message: {
    marginBottom: '12px',
    lineHeight: '1.4',
    color: '#222222',
    whiteSpace: 'pre-wrap',
  },
  inputArea: {
    marginTop: '15px',
    display: 'flex',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    outline: 'none',
    color: '#222222',
  },
  button: {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
  },
};

export default Chatbot;
