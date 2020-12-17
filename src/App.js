import Invoice from './Invoice'
import Navbar from './Navbar'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css';
function App({user,imageUrl,setLog}) {
  return (
    <div className="App">
    <Navbar user={user} imageUrl={imageUrl} setLog={setLog}/>
    <Invoice user={user}/>
    </div>
  );
}

export default App;
