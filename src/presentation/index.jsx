import React from 'react'

import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text,
  Layout, Fit, Fill,
  BlockQuote, Quote, Cite,
} from 'spectacle'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

import Chuck from '../chuckapp/ChuckContainer'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  nantes: require('../assets/images/nantes.jpg'),
  react: require('../assets/images/react-logo.png'),
  flux: require('../assets/images/flux.png'),
  avatar: require('../assets/images/avatar.png'),
}

preloader(images)

const theme = createTheme({
  primary: '#2d2d2d',
  secondary: '#61dafb',
  fluxColor: '#44b74a',
}, {
  secondary: 'Open Sans Condensed',
})

class Presentation extends React.Component {

  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>

          {/* Cover */}
          <Slide transition={['zoom']} bgColor="primary">
            <Image src={images.react.replace('/', '')} height="200px" />
            <Heading size={1} fit caps textColor="secondary">
              Advanced React
            </Heading>
            <Heading size={1} fit caps>
              Design, Style & Performance patterns & tips
            </Heading>
          </Slide>

          {/* Me */}
          <Slide transition={['slide']} bgImage={images.nantes.replace('/', '')} bgDarken={0.75}>
            <Image src={images.avatar.replace('/', '')} height="200px" />
            <Heading size={2} caps textColor="secondary" >
              Benjamin Petetot
            </Heading>
            <Heading size={4} caps textColor="tertiary" >
              Fullstack Dev @ Zenika
            </Heading>
            <Text textColor="secondary">@bpetetot</Text>
          </Slide>

          {/* ChuckNorris */}
          <Slide transition={['slide']} align="center flex-start" bgColor="primary">
            <Heading size={4} caps textColor="tertiary" >
              {'<Chuck />'}
            </Heading>
            <br />
            <Chuck />
          </Slide>

          {/* Components patterns & tips */}
          <Slide transition={['slide', 'spin']} bgColor="secondary">
            <Heading caps fit size={1} textColor="tertiary">component</Heading>
            <Heading caps fit size={1} textColor="primary">patterns & tips</Heading>
          </Slide>

          {/* Presentational component */}
          <Slide transition={['slide', 'spin']} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">Presentational</Heading>
            <Heading caps fit size={1} textColor="tertiary">Component</Heading>
          </Slide>

          <Slide transition={['fade']} bgColor="primary">
            <Text caps bold textColor="secondary" textAlign="left">Presentational component</Text>
            <List textColor="tertiary">
              <ListItem>Are concerned with <b>how things look</b></ListItem>
              <Appear><ListItem>Have no dependencies on the rest of the app</ListItem></Appear>
              <Appear><ListItem>Don’t specify how the data is loaded or mutated</ListItem></Appear>
              <Appear><ListItem>Receive data and callbacks exclusively via props</ListItem></Appear>
              <Appear><ListItem>Rarely have their own state</ListItem></Appear>
              <Appear><ListItem>Usually written as stateless functions</ListItem></Appear>
              <Appear>
                <ListItem><u>Examples</u> : Page, Sidebar, Story, UserInfo, List</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['fade']} bgColor="primary">
            <Text caps bold textColor="secondary" textAlign="left">Presentational component</Text>
            <Text textColor="tertiary" textAlign="left" margin="0 0 20px">
              with stateless function
            </Text>
            <Layout>
              <Fit>
                <CodePane
                  lang="jsx"
                  source={require('raw!../assets/code/stateless.example')}
                  margin="20px"
                />
              </Fit>
              <Fill>
                <List margin="20px" textColor="tertiary" >
                  <Appear>
                    <ListItem textSize="0.9em">It’s a pure function</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem textSize="0.9em">Don't have the lifecycle methods</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem textSize="0.9em">Don’t hold state or refs</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem textSize="0.9em">Pass props and context</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem textSize="0.9em">Can defined defaultProps, propTypes</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem textSize="0.9em">Easy to test</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem textSize="0.9em">Optimized for performances</ListItem>
                  </Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade']} bgColor="primary">
            <BlockQuote>
              <Quote textSize="1.5em" textColor="tertiary">
                In an ideal world, most of your components would be stateless functions [...]
                This is the recommended pattern, when possible.
              </Quote>
              <Cite textSize="1em" textColor="secondary">React documentation</Cite>
            </BlockQuote>
          </Slide>

          {/* Container component */}
          <Slide transition={['slide', 'spin']} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">Container</Heading>
            <Heading caps fit size={1} textColor="tertiary">Component</Heading>
          </Slide>

          <Slide transition={['fade']} bgColor="primary">
            <Text caps bold textColor="secondary" textAlign="left">Container component</Text>
            <List textColor="tertiary">
              <ListItem>Are concerned with <b>how things work</b></ListItem>
              <Appear>
                <ListItem>Provide the data and behavior to presentational</ListItem>
              </Appear>
              <Appear>
                <ListItem>Provide actions as callbacks to the presentational</ListItem>
              </Appear>
              <Appear>
                <ListItem>Are often stateful, as they tend to serve as data sources</ListItem>
              </Appear>
              <Appear>
                <ListItem>Are usually generated using higher order components</ListItem>
              </Appear>
              <Appear>
                <ListItem><u>Examples</u> : UserPage, FollowersSidebar, StoryContainer</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['fade']} bgColor="primary">
            <Text caps bold textColor="secondary" textAlign="left">Container component</Text>
            <Layout>
              <Fit>
                <CodePane
                  lang="jsx"
                  source={require('raw!../assets/code/container.example')}
                  margin="20px"
                />
              </Fit>
              <Fill>
                <List margin="20px" textColor="tertiary">
                  <Appear>
                    <ListItem textSize="0.9em">Can be stateful and/or stateless</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem textSize="0.9em">Separate data-fetching and rendering</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem textSize="0.9em">Made 'Fact' component reusable</ListItem>
                  </Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade']} bgColor="primary">
            <BlockQuote>
              <Quote textSize="1.5em" textColor="tertiary">
                A container does data fetching and then renders its corresponding sub-component.
                That’s it.
              </Quote>
              <Cite textSize="1em" textColor="secondary">Jason Bonta (Facebook)</Cite>
            </BlockQuote>
          </Slide>

          {/* Presentational vs. Container */}
          <Slide transition={['slide', 'spin']} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">Presentational component</Heading>
            <Heading caps size={2} textColor="secondary">vs</Heading>
            <Heading caps fit size={1} textColor="tertiary">Container component</Heading>
          </Slide>

          <Slide transition={['fade']} bgColor="primary">
            <Text caps bold textColor="secondary" textAlign="left">
              Presentational vs. Container
            </Text>
            <List textColor="tertiary">
              <Appear><ListItem>Better separation of concerns</ListItem></Appear>
              <Appear><ListItem>Better reusability</ListItem></Appear>
              <Appear>
                <ListItem>Presentational components are your app’s “palette”</ListItem>
              </Appear>
            </List>
            <Appear>
              <Text caps bold textColor="secondary" textAlign="left">Other concepts</Text>
            </Appear>
            <List textColor="tertiary">
              <Appear><ListItem>Stateful vs. Stateless</ListItem></Appear>
              <Appear><ListItem>Classes vs. Functions</ListItem></Appear>
              <Appear><ListItem>Pure vs. Impure</ListItem></Appear>
            </List>
          </Slide>

          {/* JSX spread attributes & Destructuring arguments */}
          <Slide transition={['slide', 'spin']} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">JSX Spread Attributes</Heading>
            <Heading caps size={1} textColor="secondary">And</Heading>
            <Heading caps fit size={1} textColor="tertiary">Destructuring Arguments</Heading>
          </Slide>

          <Slide transition={['fade']} bgColor="primary">
            <Layout>
              <Fit>
                <CodePane
                  lang="jsx"
                  source={require('raw!../assets/code/spread.example')}
                  margin="20px"
                />
              </Fit>
              <Fill>
                <Text caps bold textColor="secondary" textAlign="left">
                  Destructuring Arguments
                </Text>
                <List margin="40px 20px" textColor="tertiary">
                  <Appear>
                    <ListItem textSize="0.9em">Syntactic sugar for passing properties</ListItem>
                  </Appear>
                  <Appear><ListItem textSize="0.9em">Easier to read inputs</ListItem></Appear>
                </List>
                <Text caps bold textColor="secondary" textAlign="left">JSX Spread Attributes</Text>
                <List margin="40px 20px" textColor="tertiary">
                  <Appear>
                    <ListItem textSize="0.9em">
                      Used to forward props to underlying components
                    </ListItem>
                  </Appear>
                  <Appear>
                    <ListItem textSize="0.9em">
                      Create a new props object without component-specific props
                    </ListItem>
                  </Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>

          {/* Conditionnal rendering */}
          <Slide transition={['slide', 'spin']} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">Conditional</Heading>
            <Heading caps fit size={1} textColor="tertiary">rendering</Heading>
          </Slide>

          <Slide transition={['fade']} bgColor="primary">
            <Text caps bold textColor="secondary" textAlign="left">Problematics</Text>
          </Slide>

          <Slide transition={['fade']} bgColor="primary">
            <Text caps textColor="tertiary" textAlign="left">if</Text>
            <CodePane
              lang="jsx"
              source={require('raw!../assets/code/conditional1.example')}
              margin="10px"
            />
            <br />
            <Text caps textColor="tertiary" textAlign="left">unless</Text>
            <CodePane
              lang="jsx"
              source={require('raw!../assets/code/conditional2.example')}
              margin="10px"
            />
            <br />
            <Text caps textColor="tertiary" textAlign="left">if / else</Text>
            <CodePane
              lang="jsx"
              source={require('raw!../assets/code/conditional3.example')}
              margin="10px"
            />
          </Slide>

          {/* Events handling */}
          <Slide transition={['slide', 'spin']} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">Events</Heading>
            <Heading caps fit size={1} textColor="tertiary">handling</Heading>
          </Slide>

          {/* Higher Order Component */}
          <Slide transition={['slide', 'spin']} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">Higher Order</Heading>
            <Heading caps fit size={1} textColor="tertiary">Component</Heading>
          </Slide>

          {/* Communication patterns & tips */}
          <Slide transition={['slide', 'spin']} bgColor="secondary">
            <Heading caps fit size={1} textColor="tertiary">Communication</Heading>
            <Heading caps fit size={1} textColor="primary">patterns & tips</Heading>
          </Slide>

          {/* Flux */}
          <Slide transition={['slide', 'spin']} bgColor="primary">
            <Image src={images.flux.replace('/', '')} height="200px" />
            <Heading caps size={1} textColor="fluxColor">Flux</Heading>
          </Slide>

          {/* Flux-like libraries... */}
          {/* Do you really need flux ? */}
          {/* Communication patterns without flux */}
          {/* I heard a lot about Redux */}
          {/* Reactive & Observable patterns */}

          {/* Styling patterns & tips */}
          <Slide transition={['slide', 'spin']} bgColor="secondary">
            <Heading caps fit size={1} textColor="tertiary">Styling</Heading>
            <Heading caps fit size={1} textColor="primary">patterns & tips</Heading>
          </Slide>

          {/* React styling problematic */}
          <Slide transition={['slide', 'spin']} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">React styling</Heading>
            <Heading caps fit size={1} textColor="tertiary">problematics</Heading>
          </Slide>

          {/* CSS Tools & libraries */}
          <Slide transition={['slide', 'spin']} bgColor="primary">
            <Heading caps size={1} textColor="secondary">CSS</Heading>
            <Heading caps fit size={1} textColor="tertiary">tools & libraries</Heading>
          </Slide>

          {/* Performance tips & tricks */}
          <Slide transition={['slide', 'spin']} bgColor="secondary">
            <Heading caps fit size={1} textColor="tertiary">Performance</Heading>
            <Heading caps fit size={1} textColor="primary">tips & tricks</Heading>
          </Slide>

          {/* How does it work ? */}
          <Slide transition={['slide', 'spin']} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">Virtual DOM</Heading>
            <Heading caps fit size={1} textColor="tertiary">how does it work ?</Heading>
          </Slide>

          {/* Debugging is a performance issue */}
          <Slide transition={['slide', 'spin']} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">Debugging</Heading>
            <Heading caps fit size={1} textColor="tertiary">is a performance issue</Heading>
          </Slide>

          {/* How to analyze performances ? */}
          <Slide transition={['slide', 'spin']} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">How to analyze</Heading>
            <Heading caps fit size={1} textColor="tertiary">performances ?</Heading>
          </Slide>

          {/* Props equality optimizations */}
          <Slide transition={['slide', 'spin']} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">Props equality</Heading>
            <Heading caps fit size={1} textColor="tertiary">optimizations</Heading>
          </Slide>

          {/* Compiler optimizations */}
          <Slide transition={['slide', 'spin']} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">Compiler</Heading>
            <Heading caps fit size={1} textColor="tertiary">Optimizations</Heading>
          </Slide>
        </Deck>
      </Spectacle>
  ) }
}

export default Presentation
