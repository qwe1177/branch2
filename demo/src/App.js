import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom'
import home from 'bundle-loader?lazy!./home_Chunk'
import about from 'bundle-loader?lazy!./about_Chunk'
import topics from 'bundle-loader?lazy!./topics_Chunk'
import Bundle from './Bundle'

const Home = (props) => (
    <Bundle load={home}>
        {(Home) => <Home {...props}/>}
    </Bundle>
)

const About = (props) => (
    <Bundle load={about}>
        {(About) => <About {...props}/>}
    </Bundle>
)

const Topics = (props) => (
    <Bundle load={topics}>
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
        <h3>404{location.pathname}</h3>
    </div>
)

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
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