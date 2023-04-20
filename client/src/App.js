import logo from './logo.svg';
import './App.css';

import FileUploader from './UploadComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
      <h1>File Uploader</h1>
      <FileUploader />
    </div>
      </header>
    </div>
  );
}

export default App;
