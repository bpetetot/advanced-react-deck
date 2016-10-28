/* eslint-disable max-len */
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
import createTheme from './theme'

import Chuck from '../chuckapp/ChuckContainer'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  nantes: require('../assets/images/nantes.jpg'),
  react: require('../assets/images/react-logo.png'),
  flux: require('../assets/images/flux.png'),
  fluxDiagram: require('../assets/images/flux-diagram2.png'),
  avatar: require('../assets/images/avatar.png'),
  parentToChild: require('../assets/images/parent-to-child.png'),
  childToParent: require('../assets/images/child-to-parent.png'),
  siblingToSibling: require('../assets/images/sibling-to-sibling.png'),
  anyToAny: require('../assets/images/any-to-any.png'),
}

preloader(images)

const theme = createTheme({ fluxColor: '#44b74a' })

class Presentation extends React.Component {

  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} progress="bar" transitionDuration={500}>

          {/* Cover */}
          <Slide transition={['zoom']}>
            <Image src={images.react.replace('/', '')} height="200px" />
            <Heading size={1} fit caps textColor="secondary">
              Advanced React
            </Heading>
            <Heading size={1} fit caps>
              Design patterns & tips
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
          <Slide transition={['slide']} align="center flex-start">
            <Heading size={2} textColor="tertiary" >
              {'<Chuck />'}
            </Heading>
            <br />
            <Chuck />
          </Slide>

          <Slide transition={['fade']}>
            <CodePane
              lang="jsx"
              source={require('raw!../assets/code/chuck.example')}
            />
          </Slide>

          {/* Components patterns & tips */}
          <Slide transition={['slide', 'spin']} bgColor="secondary">
            <Heading caps fit size={1} textColor="tertiary">component</Heading>
            <Heading caps fit size={1} textColor="primary">patterns & tips</Heading>
          </Slide>

          {/* Presentational component */}
          <Slide transition={['slide', 'spin']}>
            <Heading caps fit size={1} textColor="secondary">Presentational</Heading>
            <Heading caps fit size={1} textColor="tertiary">Component</Heading>
          </Slide>

          <Slide transition={['fade']} notes="Examples : Page, Sidebar, Story, UserInfo, List">
            <Text caps bold textColor="secondary" textAlign="left">Presentational component</Text>
            <List textColor="tertiary">
              <ListItem><b>How things look</b></ListItem>
              <Appear><ListItem>No dependencies</ListItem></Appear>
              <Appear><ListItem>Don’t specify how the data is mutated</ListItem></Appear>
              <Appear><ListItem>Data and callbacks via props</ListItem></Appear>
              <Appear><ListItem>Rarely stateful</ListItem></Appear>
              <Appear><ListItem>Usually stateless functions</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={['fade']}>
            <Text caps bold textColor="secondary" textAlign="left">Presentational component</Text>
            <Text textColor="tertiary" textAlign="left" margin="0 0 20px">
              with stateless function
            </Text>
            <Layout>
              <Fit>
                <CodePane
                  lang="jsx"
                  textSize="1.2rem"
                  source={require('raw!../assets/code/stateless.example')}
                  margin="20px"
                />
              </Fit>
              <Fill>
                <List textColor="tertiary" >
                  <Appear>
                    <ListItem padding="10px" textSize="0.9em">Props & Context</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem padding="10px" textSize="0.9em">No lifecycle methods</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem padding="10px" textSize="0.9em">No this, state or refs</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem padding="10px" textSize="0.9em">DefaultProps & PropTypes</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem padding="10px" textSize="0.9em">Pure function</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem padding="10px" textSize="0.9em">Easy to test</ListItem>
                  </Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade']}>
            <BlockQuote>
              <Quote>
                In an ideal world, most of your components would be stateless functions [...]
                This is the recommended pattern, when possible.
              </Quote>
              <Cite>React documentation</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={['fade']}>
            <CodePane
              lang="jsx"
              textSize="1rem"
              source={require('raw!../assets/code/chuck2.example')}
            />
          </Slide>

          {/* Container component */}
          <Slide transition={['slide', 'spin']}>
            <Heading caps fit size={1} textColor="secondary">Container</Heading>
            <Heading caps fit size={1} textColor="tertiary">Component</Heading>
          </Slide>

          <Slide transition={['fade']}>
            <Text caps bold textColor="secondary" textAlign="left">Container component</Text>
            <List textColor="tertiary">
              <ListItem><b>How things work</b></ListItem>
              <Appear>
                <ListItem>Provide data and behavior</ListItem>
              </Appear>
              <Appear>
                <ListItem>Provide actions (callbacks)</ListItem>
              </Appear>
              <Appear>
                <ListItem>Mostly stateful</ListItem>
              </Appear>
              <Appear>
                <ListItem>Fetch data sources</ListItem>
              </Appear>
              <Appear>
                <ListItem>Usually HOC</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['fade']}>
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
                    <ListItem padding="10px" textSize="0.9em">Stateful and/or stateless</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem padding="10px" textSize="0.9em">Separate data-fetching and rendering</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem padding="10px" textSize="0.9em">Make 'Fact' component reusable</ListItem>
                  </Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade']}>
            <BlockQuote>
              <Quote textSize="1.5em" textColor="tertiary">
                A container does data fetching and then renders its corresponding sub-component.
                That’s it.
              </Quote>
              <Cite textSize="1em" textColor="secondary">Jason Bonta (Facebook)</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={['fade']}>
            <CodePane
              lang="jsx"
              source={require('raw!../assets/code/chuck3.example')}
            />
          </Slide>

          {/* Presentational vs. Container */}
          <Slide transition={['slide', 'spin']}>
            <Heading caps fit size={1} textColor="tertiary">Presentational component</Heading>
            <Heading caps size={2} textColor="secondary">vs</Heading>
            <Heading caps fit size={1} textColor="tertiary">Container component</Heading>
          </Slide>

          <Slide transition={['fade']}>
            <Text caps bold textColor="secondary" textAlign="left">
              Presentational vs. Container
            </Text>
            <List textColor="tertiary">
              <Appear><ListItem>Better separation of concerns</ListItem></Appear>
              <Appear><ListItem>Better reusability</ListItem></Appear>
              <Appear>
                <ListItem>Presentationals == app’s “palette”</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['fade']}>
            <Text caps bold textColor="secondary" textAlign="left">Other concepts</Text>
            <List textColor="tertiary">
              <Appear><ListItem>Stateful vs. Stateless</ListItem></Appear>
              <Appear><ListItem>Classes vs. Functions</ListItem></Appear>
              <Appear><ListItem>Impure vs. Pure</ListItem></Appear>
            </List>
          </Slide>

          {/* Higher Order Component */}
          <Slide transition={['slide', 'spin']}>
            <Heading caps fit size={1} textColor="secondary">Higher-Order</Heading>
            <Heading caps fit size={1} textColor="tertiary">Component</Heading>
          </Slide>

          <Slide transition={['fade']} align="flex-start flex-start">
            <Text caps bold textColor="secondary" textAlign="left">What is a HOC ?</Text>
            <Appear>
              <CodePane
                lang="jsx"
                textSize="1.8rem" margin="30px"
                source={require('raw!../assets/code/hoc1.example')}
              />
            </Appear>
            <Appear>
              <CodePane
                lang="jsx"
                textSize="1.8rem" margin="30px"
                source={require('raw!../assets/code/hoc2.example')}
              />
            </Appear>
            <Appear>
              <CodePane
                lang="jsx"
                textSize="1.8rem" margin="30px"
                source={require('raw!../assets/code/hoc3.example')}
              />
            </Appear>
          </Slide>

          <Slide transition={['fade']} align="flex-start flex-start">
            <Text caps bold textColor="secondary" textAlign="left">Some Examples</Text>
            <Appear>
              <CodePane
                lang="jsx"
                textSize="1.2rem"
                source={require('raw!../assets/code/hoc-ex2.example')}
              />
            </Appear>
            <Appear>
              <CodePane
                lang="jsx"
                textSize="1.2rem"
                source={require('raw!../assets/code/hoc-ex3.example')}
              />
            </Appear>
            <Appear>
              <CodePane
                lang="jsx"
                textSize="1.2rem"
                source={require('raw!../assets/code/hoc-ex1.example')}
              />
            </Appear>
          </Slide>

          <Slide transition={['fade']}>
            <Text caps bold textColor="secondary" textAlign="left">How do HOCs work ?</Text>
            <Appear>
              <BlockQuote>
                <Quote textSize="1.5em" textColor="tertiary">
                  Higher-order components works by secretly wrapping the input
                   component inside a container component.
                </Quote>
                <Cite textSize="1em" textColor="secondary">Andrew Clark (Facebook)</Cite>
              </BlockQuote>
            </Appear>
          </Slide>

          <Slide transition={['fade']}>
            <CodePane
              lang="jsx"
              textSize="1.2rem"
              source={require('raw!../assets/code/hoc-ex4.example')}
            />
          </Slide>

          <Slide transition={['fade']}>
            <CodePane
              lang="jsx"
              textSize="1.2rem"
              source={require('raw!../assets/code/hoc-ex5.example')}
            />
          </Slide>

          <Slide transition={['fade']}>
            <CodePane
              lang="jsx"
              textSize="1.3rem"
              source={require('raw!../assets/code/hoc-ex6.example')}
            />
          </Slide>

          <Slide transition={['fade']}>
            <BlockQuote>
              <Quote textSize="1.5em" textColor="tertiary">
                Higher-order components are parameterized container components.
              </Quote>
              <Cite textSize="1em" textColor="secondary">Andrew Clark (Facebook)</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={['fade']}>
            <Text caps bold textColor="secondary" textAlign="left">recompose</Text>
            <br />
            <Text textColor="secondary" textAlign="left">https://github.com/acdlite/recompose</Text>
            <br />
            <BlockQuote>
              <Quote textSize="1.5em" textColor="tertiary">
                Recompose is a React utility belt for function components and higher-order components.
                 Think of it like lodash for React.
              </Quote>
              <Cite textSize="1em" textColor="secondary">Recompose documentation</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={['fade']}>
            <CodePane
              lang="jsx"
              textSize="1.3rem"
              source={require('raw!../assets/code/recompose.example')}
            />
          </Slide>

          <Slide transition={['fade']}>
            <CodePane
              lang="jsx"
              textSize="1.1rem"
              source={require('raw!../assets/code/recompose2.example')}
            />
          </Slide>

          {/* JSX spread attributes & Destructuring arguments */}
          <Slide transition={['slide', 'spin']}>
            <Heading caps fit size={1} textColor="tertiary">JSX Spread Attributes</Heading>
            <Heading caps size={1} textColor="secondary">And</Heading>
            <Heading caps fit size={1} textColor="tertiary">Destructuring Arguments</Heading>
          </Slide>

          <Slide transition={['fade']}>
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
                      Forward props to components
                    </ListItem>
                  </Appear>
                  <Appear>
                    <ListItem textSize="0.9em">
                      New props object without component-specific props
                    </ListItem>
                  </Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade']}>
            <CodePane
              lang="jsx"
              textSize="1.1rem"
              source={require('raw!../assets/code/chuck4.example')}
            />
          </Slide>

          <Slide transition={['fade']}>
            <CodePane
              lang="jsx"
              textSize="1.1rem"
              source={require('raw!../assets/code/chuck5.example')}
            />
          </Slide>

          {/* Conditionnal rendering */}
          <Slide transition={['slide', 'spin']}>
            <Heading caps fit size={1} textColor="secondary">Conditional</Heading>
            <Heading caps fit size={1} textColor="tertiary">rendering</Heading>
          </Slide>

          <Slide transition={['slide']} align="center flex-start">
            <Heading size={2} textColor="tertiary" >
              {'<Chuck belgium />'}
            </Heading>
            <br />
            <Chuck belgium />
          </Slide>

          <Slide transition={['fade']}>
            <CodePane
              lang="jsx"
              textSize="1.3rem"
              source={require('raw!../assets/code/conditional0.example')}
            />
          </Slide>

          <Slide transition={['fade']}>
            <CodePane
              lang="jsx"
              textSize="1.3rem"
              source={require('raw!../assets/code/conditional01.example')}
            />
          </Slide>

          <Slide transition={['fade']}>
            <Text caps textColor="tertiary" textAlign="left">if</Text>
            <CodePane
              lang="jsx"
              textSize="1.3rem"
              source={require('raw!../assets/code/conditional1.example')}
            />
            <br />
            <Text caps textColor="tertiary" textAlign="left">unless</Text>
            <CodePane
              lang="jsx"
              textSize="1.3rem"
              source={require('raw!../assets/code/conditional2.example')}
            />
            <br />
            <Text caps textColor="tertiary" textAlign="left">if / else</Text>
            <CodePane
              lang="jsx"
              textSize="1.3rem"
              source={require('raw!../assets/code/conditional3.example')}
            />
          </Slide>

          {/* Communication patterns & tips */}
          <Slide transition={['slide', 'spin']} bgColor="secondary">
            <Heading caps fit size={1} textColor="tertiary">Communication</Heading>
            <Heading caps fit size={1} textColor="primary">patterns & tips</Heading>
          </Slide>


          {/* Flux */}
          <Slide transition={['slide', 'spin']}>
            <Image src={images.flux.replace('/', '')} height="200px" />
            <Heading caps size={1} textColor="fluxColor">Flux</Heading>
          </Slide>

          {/* Flux-like libraries... */}
          <Slide transition={['slide']}>
            <List textColor="tertiary">
              <ListItem>Fluxible</ListItem>
              <ListItem>Reflux</ListItem>
              <ListItem>Alt</ListItem>
              <ListItem>Flummox</ListItem>
              <ListItem>McFly</ListItem>
              <ListItem>Redux</ListItem>
              <ListItem>Fluxxor</ListItem>
              <ListItem>...</ListItem>
            </List>
          </Slide>

          {/* Communication patterns without flux */}
          <Slide transition={['slide', 'spin']}>
            <Heading caps fit size={1} textColor="secondary">No-flux</Heading>
            <Heading caps fit size={1} textColor="tertiary">patterns</Heading>
          </Slide>

          <Slide transition={['fade']}>
            <Image margin="20px" src={images.parentToChild.replace('/', '')} height="170px" />
            <Appear><Image margin="20px" src={images.childToParent.replace('/', '')} height="170px" /></Appear>
            <Appear><Image margin="20px" src={images.siblingToSibling.replace('/', '')} height="170px" /></Appear>
            <Appear><Image margin="20px" src={images.anyToAny.replace('/', '')} height="170px" /></Appear>
          </Slide>

          <Slide transition={['fade']} align="flex-start flex-start">
            <Image src={images.parentToChild.replace('/', '')} height="100px" />
            <Text bold textColor="secondary" textAlign="left">
              Props !
            </Text>
            <List textColor="tertiary">
              <ListItem>Send data from a parent to a child</ListItem>
              <ListItem>Central feature of react</ListItem>
            </List>
          </Slide>

          <Slide transition={['fade']} align="flex-start flex-start">
            <Image src={images.parentToChild.replace('/', '')} height="100px" />
            <Text bold textColor="secondary" textAlign="left">
              Ref Functions
            </Text>
            <List textColor="tertiary">
              <ListItem>Communicate with a child from a parent</ListItem>
            </List>
            <CodePane
              lang="jsx"
              source={require('raw!../assets/code/comm1.example')}
            />
          </Slide>

          <Slide transition={['fade']} align="flex-start flex-start">
            <Image src={images.childToParent.replace('/', '')} height="100px" />
            <Text bold textColor="secondary" textAlign="left">
              Callbacks
            </Text>
            <List textColor="tertiary">
              <ListItem>Pass a function to the child as a prop</ListItem>
              <ListItem>Dont forget to declare propTypes</ListItem>
            </List>
            <CodePane
              lang="jsx"
              textSize="1.1rem"
              source={'<MyChild myFunc={this.handleChildFunc.bind(this)} />'}
            />
          </Slide>

          <Slide transition={['fade']} align="flex-start flex-start">
            <Image src={images.childToParent.replace('/', '')} height="100px" />
            <Text bold textColor="secondary" textAlign="left">
              Event Bubbling
            </Text>
            <CodePane
              lang="jsx"
              textSize="1.1rem"
              source={require('raw!../assets/code/comm2.example')}
            />
          </Slide>

          <Slide transition={['fade']} align="flex-start flex-start">
            <Image src={images.siblingToSibling.replace('/', '')} height="100px" />
            <Text bold textColor="secondary" textAlign="left">
              Parent Component
            </Text>
            <CodePane
              lang="jsx"
              textSize="0.9rem"
              source={require('raw!../assets/code/comm3.example')}
            />
          </Slide>

          <Slide transition={['fade']} align="flex-start flex-start">
            <Image src={images.anyToAny.replace('/', '')} height="100px" />
            <Text bold textColor="secondary" textAlign="left">
              Pattern Provider
            </Text>
            <CodePane
              lang="jsx"
              textSize="1.1rem"
              source={require('raw!../assets/code/provider1.example')}
            />
          </Slide>

          <Slide transition={['fade']} >
            <Text bold textColor="secondary" textAlign="left">
              Apply the provider on the highest tree level
            </Text>
            <CodePane
              lang="jsx"
              textSize="1.1rem"
              source={require('raw!../assets/code/provider2.example')}
            />
          </Slide>

          <Slide transition={['fade']} >
            <Text bold textColor="secondary" textAlign="left">
              Build a HOC to apply the theme to your components
            </Text>
            <CodePane
              lang="jsx"
              textSize="1.1rem"
              source={require('raw!../assets/code/provider3.example')}
            />
          </Slide>

          <Slide transition={['fade']} >
            <Text bold textColor="secondary" textAlign="left">
              Apply it !
            </Text>
            <CodePane
              lang="jsx"
              textSize="1.1rem"
              source={require('raw!../assets/code/provider4.example')}
            />
          </Slide>

          {/* Conclusion */}
          <Slide transition={['slide', 'spin']}>
            <Heading caps fit size={1} textColor="secondary">Conclusion</Heading>
            <Heading caps fit size={1} textColor="tertiary">and next...</Heading>
          </Slide>

          <Slide transition={['fade']}>
            <Text bold textColor="secondary" textAlign="left">
              "Advanced React" Trilogy
            </Text>
            <List textColor="tertiary">
              <ListItem>#1  Design Patterns & Tips</ListItem>
              <ListItem>#2  Styling your React App</ListItem>
              <ListItem>#3  React Performances</ListItem>
            </List>
          </Slide>

          <Slide transition={['zoom']}>
            <Image src={images.react.replace('/', '')} height="200px" />
            <Heading size={1} fit caps textColor="tertiary">
              Questions ?
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
  ) }
}

export default Presentation
