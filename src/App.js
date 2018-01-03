import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom'
import Bundle from './Bundle'

const Home = (props) => (
    <Bundle load={() => import('./home_Chunk')}>
        {(Home) => <Home {...props}/>}
    </Bundle>
)

const About = (props) => (
    <Bundle load={() => import('./about_Chunk')}>
        {(About) => <About {...props}/>}
    </Bundle>
)

const Topics = (props) => (
    <Bundle load={() => import('./topics_Chunk')}>
        {(Topics) => <Topics {...props}/>}
    </Bundle>
)

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/topics',
        component: Topics,
        routes: [
            {
                path: '/Topics/1',
                component: Topics
            },
            {
                path: '/Topics/2',
                component: Topics
            }
        ]
    }
]

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
)

const NoMatch = ({location}) => (
    <div>
        <h3>404</h3>
    </div>
)

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home1</Link></li>
                        <li><Link to="/about">About1</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>
                    <hr/>
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route}/>
                        ))}
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Router>

        )
    }
}

export default App