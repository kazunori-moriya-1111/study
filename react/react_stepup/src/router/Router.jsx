import { Switch, Route } from 'react-router-dom'
import { Home } from '../Home';
import { page1Routes } from './Page1Routes';
import { page2Routes } from './Page2Routes';

export const Router = () => {
  return (
    <Switch>
        {/* exact = 完全一致の場合レンダリングする */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1" render={({match: { url } }) => (
          <Switch>
            {page1Routes.map((route) => (
              <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                {route.children}
              </Route>
            ))}
          </Switch>
        )}>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page2" render={({match: { url } }) => (
          <Switch>
            {page2Routes.map((route) => (
              <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                {route.children}
              </Route>
            ))}
          </Switch>
        )}>
        </Route>
      </Switch>
  )
}