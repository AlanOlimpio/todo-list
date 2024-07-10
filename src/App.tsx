import Header from './Header';
import './global.css';
import styles from './App.module.css';
import Form from './Form';
import List from './List';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Form />
          <List />
        </main>
      </div>
    </>
  );
}

export default App;
