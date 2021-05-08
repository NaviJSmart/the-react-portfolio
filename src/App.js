import GlobalStyle from './components/GlobalStyle';
import NavComponent from './components/NavComponent';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import { Switch, Route } from 'react-router-dom';
import ProjDetailPage from './pages/ProjDetailPage';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavComponent />
      <Switch>
      <Route path="/" exact>
        <AboutPage />
      </Route>
      <Route path="/work" exact>
        <ProjectsPage  />
      </Route>
      <Route>
        <ProjDetailPage path="/work/:id"/>
      </Route>
      <Route path="/contact">
        <ContactPage  />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
