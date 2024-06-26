// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import {TestLib} from "@pol-test/test-lib";


export function App() {
  return (
    <div>
      <NxWelcome title="pol-test" />
      <TestLib/>
    </div>
  );
}

export default App;
