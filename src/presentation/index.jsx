/* eslint-disable max-len */
import React from 'react'
import CodeSlide from 'spectacle-code-slide'

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
import MotionExample from '../motion'

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
        <Deck transition={['zoom', 'slide']} controls={false} progress="bar" transitionDuration={500}>

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
          <Slide
            transition={['slide']} bgImage={images.nantes.replace('/', '')} bgDarken={0.75}
            notes={
              <div>
                <b>8 mois zenika nantes -- fullstack javascript -- Formateur React</b><br />
                Les incontournables <b>getting started & hello world</b><br />
                <b>Composants :</b> réutilisable, maintenable, factoriser...<br />
                <b>Aller plus loin :</b> composants purs, stateless, stateful, de présentation, les container component, HoC, classe et stateless function et tout ce qui est communication patterns<br />
                <u>Cadrer ces <b>concepts</b></u> et d’en faire <b>émerger des patterns</b>
              </div>
            }
          >
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
          <Slide
            transition={['slide']} align="center flex-start"
            notes={
              <div>
                <b>Mon accolyte de la soirée</b><br />
                <b>Composant Chuck</b><br />
                <b>Utilisé comme exemple</b><br />
                <b>Appliquer certains patterns</b>
              </div>
            }
          >
            <Heading size={2} textColor="tertiary" >
              {'<Chuck />'}
            </Heading>
            <br />
            <Chuck />
          </Slide>

          <CodeSlide
            transition={['fade']}
            lang="jsx"
            textSize="20px"
            code={require('raw!../assets/code/chuck.example')}
            ranges={[
              { loc: [0, 1] },
              { loc: [2, 6] },
              { loc: [7, 15] },
              { loc: [19, 39] },
              { loc: [23, 28] },
              { loc: [28, 29] },
              { loc: [29, 33] },
              { loc: [33, 34] },
            ]}
            notes={
              <div>
                <b>Après mon getting started,</b> voilà comment j'aurais sûrement coder...<br />
                <b>Normal</b> et <b>Fonctionne bien</b><br />
                <b>Tous les exemples ES2016 & JSX</b><br />
                <b>Présenter le code</b><br />
                <b>PB:</b> mélange logique & présentation, non réutilisable...<br />
                Comment rendre ce composant réutilisable ?
              </div>
            }
          />

          {/* Components patterns & tips */}
          <Slide
            transition={['slide', 'spin']} bgColor="secondary"
            notes={
              <div>
                Nous allons voir maintenant quelques <b>pattern autour des composants...</b><br />
                <b>Meilleur séparation logique / présentation</b><br />
                <b>Réutilisabilité / Maintenance</b><br />
                <b>Testing</b><br />
              </div>
            }
          >
            <Heading caps fit size={1} textColor="tertiary">component</Heading>
            <Heading caps fit size={1} textColor="primary">patterns & tips</Heading>
          </Slide>

          {/* Presentational component */}
          <Slide
            transition={['slide', 'spin']}
            notes={
              <div>
                <b>Presentational ou Dumb component</b>
              </div>
            }
          >
            <Heading caps fit size={1} textColor="secondary">Presentational</Heading>
            <Heading caps fit size={1} textColor="tertiary">Component</Heading>
          </Slide>

          <Slide
            transition={['fade']}
            notes={
              <div>
                1. Uniquement <b>l’affichage et le rendu de nos composants</b>  ----
                balise <b>DOM & Style</b> ---- Peut contenir d’autre <b>presentational et des containers component</b><br />
                2. <b>Pas de manip données</b> / pas de logique métier (récup donnée / HTTP)<br />
                3. <b>Aucune dépendance</b> telles que les actions flux ou les stores<br />
                4. Données et des callbacks exclusivement <b>via leur props</b><br />
                5. Possédent <b>rarement un état interne</b> (uniquement manip UI)<br />
                6. Codés sous forme de <b>composants fonctionnels</b> (sauf si etat interne, hook cycle de vie -- ex: perf)
              </div>
            }
          >
            <Text caps bold textColor="secondary" textAlign="left">Presentational component</Text>
            <List textColor="tertiary">
              <ListItem><b>How things look</b></ListItem>
              <Appear><ListItem>Don’t specify how the data is mutated</ListItem></Appear>
              <Appear><ListItem>No dependencies</ListItem></Appear>
              <Appear><ListItem>Data and callbacks via props</ListItem></Appear>
              <Appear><ListItem>Rarely stateful</ListItem></Appear>
              <Appear><ListItem>Usually stateless functions</ListItem></Appear>
            </List>
          </Slide>

          <Slide
            transition={['fade']}
            notes={
              <div>
                Une fonction : <b>syntaxe plus simple</b> ---- <b>entrée :</b> props, <b>sortie:</b> rendu du composant<br />
                Agissent <b>comme les classes React</b> avec uniquement une méthode render de définie<br />
                <b>but:</b> création de composants <b>le plus simples possible</b> (éviter lourdeur écriture classes)<br />
                Optimisations de <b>performances dans le futur</b>, pour le moment, moins performant<br />
                <b>Fonction Pure :</b> quand il n'y a <b>pas d'effets de bords</b>, ce qui signifie que la fonction ne change rien qui n'est pas local à la fonction elle-même.<br />
                <b>Fonction Impure :</b> fonction qui modifie l'état de l'app, variable scope plus haut, touche entité externe (DOM) ----
                Plus difficile à débugger & tester (car appliqué plusieurs, pas le même résultat)
              </div>
            }
          >
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
                    <ListItem padding="10px" textSize="0.9em">Tips : Use destructuring</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem padding="10px" textSize="0.9em">No lifecycle methods</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem padding="10px" textSize="0.9em">No this, state or refs</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem padding="10px" textSize="0.9em">defaultProps & propTypes</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem padding="10px" textSize="0.9em">Easy to test</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem padding="10px" textSize="0.9em">Pure function</ListItem>
                  </Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <CodeSlide
            transition={['fade']}
            lang="jsx"
            textSize="20px"
            code={require('raw!../assets/code/chuck2.example')}
            ranges={[
              { loc: [0, 15] },
              { loc: [0, 1] },
              { loc: [1, 14] },
              { loc: [16, 20] },
              { loc: [21, 27] },
            ]}
          />

          <Slide transition={['fade']}>
            <BlockQuote>
              <Quote>
                In an ideal world, most of your components would be stateless functions [...]
                This is the recommended pattern, when possible.
              </Quote>
              <Cite>React documentation</Cite>
            </BlockQuote>
          </Slide>

          {/* Container component */}
          <Slide
            transition={['slide', 'spin']}
            notes={
              <div>
                Maintenant qu'on a isoler la partie lié uniquement à l'UI de notre composant, comment gérer ça logique...
              </div>
            }
          >
            <Heading caps fit size={1} textColor="secondary">Container</Heading>
            <Heading caps fit size={1} textColor="tertiary">Component</Heading>
          </Slide>

          <Slide
            transition={['fade']}
            notes={
              <div>
                1. Gère la <b>logique des presentational components</b> ---- Pas de DOM (except wrapper), aucun style ---- Peut contenir d’autre presentational et des containers component<br />
                2. <b>Fournissent les données</b> et <b>définissent le comportement</b> aux presentational ou autre composants<br />
                3. Ex: <b>actions Flux</b> et les fournissent en tant que callback aux presentational components<br />
                4. <b>Stateful</b> : source de données de nos composants<br />
                5. <b>Générés à partir de higher order components</b><br /> ex: createContainer() de Relay, connect() de react-redux
              </div>
            }
          >
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

          <Slide
            transition={['fade']}
            notes={
              <div>
                1. Gère la <b>logique des presentational components</b> ---- Pas de DOM (except wrapper), aucun style ---- Peut contenir d’autre presentational et des containers component<br />
                2. <b>Fournissent les données</b> et <b>définissent le comportement</b> aux presentational ou autre composants<br />
                3. Ex: <b>actions Flux</b> et les fournissent en tant que callback aux presentational components<br />
                4. <b>Stateful</b> : source de données de nos composants<br />
                5. <b>Générés à partir de higher order components</b><br /> ex: createContainer() de Relay, connect() de react-redux
              </div>
            }
          >
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
                    <ListItem padding="10px" textSize="0.9em">Stateful or stateless</ListItem>
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

          <CodeSlide
            transition={['fade']}
            lang="jsx"
            textSize="20px"
            code={require('raw!../assets/code/chuck3.example')}
            ranges={[
              { loc: [0, 1] },
              { loc: [2, 6] },
              { loc: [7, 15] },
              { loc: [16, 20] },
              { loc: [21, 31] },
            ]}
            notes={
              <div>
                <b>PB :</b> dépendance entre le FactContainer et le Fact (Container et Presentational)
              </div>
            }
          />

          <Slide
            transition={['fade']}
            notes={
              <div>
                Un peu trop limitant, mais ce qu'il faut noter c'est qu'il n'a rien à faire du rendu
              </div>
            }
          >
            <BlockQuote>
              <Quote textSize="1.5em" textColor="tertiary">
                A container does data fetching and then renders its corresponding sub-component.
                That’s it.
              </Quote>
              <Cite textSize="1em" textColor="secondary">Jason Bonta (Facebook)</Cite>
            </BlockQuote>
          </Slide>

          {/* Presentational vs. Container */}
          <Slide
            transition={['slide', 'spin']}
            notes={
              <div>
                Donc maintenant, faisons un point sur ces 2 patterns...
              </div>
            }
          >
            <Heading caps fit size={1} textColor="tertiary">Presentational component</Heading>
            <Heading caps size={2} textColor="secondary">and</Heading>
            <Heading caps fit size={1} textColor="tertiary">Container component</Heading>
          </Slide>

          <Slide
            transition={['fade']}
            notes={
              <div>
                <b>meilleure séparation des responsabilités</b><br />
                une meilleure compréhension de la logique de ton application et ton interface utilisateur<br />
                <b>Une meilleure réutilisabilité</b>, même presentational avecdifférentes sources de données, dans différent container components.<br />
                <u>ex: </u> user twitter List<br />
                palette de votre application : tout sur page == doc, => designer, => tests de non régression<br />
                ex: storybook<br />
                <b>Bonne façon démarrer</b> : que presentation => passage de props, si trop de transfert alors container<br />
              </div>
            }
          >
            <Text caps bold textColor="secondary" textAlign="left">
              Presentational and Container
            </Text>
            <List textColor="tertiary">
              <Appear><ListItem>Better separation of concerns</ListItem></Appear>
              <Appear><ListItem>Better reusability</ListItem></Appear>
              <Appear>
                <ListItem>Presentationals == app’s “palette”</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide
            transition={['fade']}
            notes={
              <div>
                Il est important de comprendre que la distinction entre les presentational components et les containers n’est pas technique… leur distinction se fait sur la responsabilité de chacun : l’un s’occupe de l’affichage et rendu, le second de la donnée et du comportement.
                <br />
                <b>1. Stateful et Stateless : </b> de façon générale les composants de présentation seront stateless et les container stateful (ex: collapse panel)
                <b> ---- 2. Classes et fonctions : </b> Les presentational vont plus trendre à être des fonctions et les container des classes... Les fonctionnal components sont plus faciles à écrire, comprendre et tester donc je vous conseille d’en abuser à moins que vous ayez besoin de gérer un état, utiliser les méthodes du cycle de vie ou optimiser les performances
                <b> ---- 3. Pure et impure : </b> Les presentational vont plus trendre à être pure
              </div>
            }
          >
            <Text caps bold textColor="secondary" textAlign="left">Other concepts</Text>
            <List textColor="tertiary">
              <Appear><ListItem>Stateful vs. Stateless</ListItem></Appear>
              <Appear><ListItem>Classes vs. Functions</ListItem></Appear>
              <Appear><ListItem>Impure vs. Pure</ListItem></Appear>
            </List>
          </Slide>

          {/* Higher Order Component */}
          <Slide
            transition={['slide', 'spin']}
            notes={
              <div>
                Les composants apportent une grande réutilisabilité des applications,<br />
                mais comment faire si les différents composants de différents d’un domaine partagent le même comportement?<br />
                A ces début, React proposait le <b>mécanisme des mixins</b>, nous permettant d'ajouter des comportement à nos composants<br />
                Plus recommandé (certains problèmes), et non utilisable en ES6<br />
                <b>Le pattern Higher order component ou HoC va nous venir en aide...</b>
              </div>
            }
          >
            <Heading caps fit size={1} textColor="secondary">Higher-Order</Heading>
            <Heading caps fit size={1} textColor="tertiary">Component</Heading>
          </Slide>

          <Slide
            transition={['fade']}
            notes={
              <div>
                Mais avant d'aborder les HoC il est important de connaitre les HoF<br />
                L’HoF est un <b>concept de la programme fonctionnelle</b><br />
                HoFs sont des <b>fonctions qui prennent une fonction en tant que paramètre</b>, en option certains autres paramètres, et retourne une fonction<br />
                <b>HOC =</b> Traiter nos composants comme des fonctions et les améliorer avec des comportements communs<br />
                Nous pouvons appliquer le même concept aux composants React et atteindre notre objectif de partager des fonctionnalités entre composants.
              </div>
            }
          >
            <Text caps bold textColor="secondary" textAlign="left">Higher-Order Function</Text>
            <Appear>
              <CodePane
                lang="js"
                textSize="1.1rem"
                source={'const add = (x, y) => x + y'}
              />
            </Appear>
            <Appear>
              <CodePane
                lang="js"
                textSize="1.1rem"
                source={
`const log = func => (...args) => {
  console.log(...args)
  return func(...args)
}`}
              />
            </Appear>
            <Appear>
              <CodePane
                lang="js"
                textSize="1.1rem"
                source={'const logAdd = log(add)'}
              />
            </Appear>
            <Appear>
              <CodePane
                lang="js"
                textSize="1.1rem"
                source={'logAdd(1, 2) // console output : 1, 2'}
              />
            </Appear>
          </Slide>


          <Slide transition={['fade']} align="flex-start flex-start">
            <Text caps bold textColor="secondary" textAlign="left">What is a HOC ?</Text>
            <Appear>
              <CodePane
                lang="js"
                textSize="1.8rem" margin="30px"
                source={require('raw!../assets/code/hoc1.example')}
              />
            </Appear>
            <Appear>
              <CodePane
                lang="js"
                textSize="1.8rem" margin="30px"
                source={require('raw!../assets/code/hoc2.example')}
              />
            </Appear>
            <Appear>
              <CodePane
                lang="js"
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

          <Slide
            transition={['fade']}
            notes={
              <div>
                <b>Isolation :</b> Il n'y a pas de risque de collision de propriétés au sein du composant.<br />
                <b>Interopérabilité :</b> Ce principe s'adapte à tout composant React, peu importe la façon dont il a été défini.<br />
                <b>Maintenabilité :</b> Le wrapper n'aura qu'une seule fonctionnalité, ce qui le rend plus simple à comprendre.<br />
                <b>Le code composant sera-t-il plus clair lors de l'utilisation du HOC?</b> ---- Des HOC bien conçus indiquent ce qu'ils font réellement; Les modèles passent beaucoup de temps à expliquer comment ils le font.<br />
                <b>La fonctionnalité apportée sera-t-elle plus facile à maintenir avec le HOC?</b>
                <b>Le HOC a-t-il des dépendances?</b> : il fait trop ou trop peu<br />
                <b>Le HOC peut-il être réutilisé dans d'autres applications?</b>
              </div>
            }
          >
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

          <CodeSlide
            transition={['fade']}
            lang="jsx"
            textSize="22px"
            code={require('raw!../assets/code/hoc-ex4.example')}
            ranges={[
              { loc: [0, 18] },
              { loc: [0, 1] },
              { loc: [1, 18] },
              { loc: [1, 2] },
              { loc: [3, 7] },
              { loc: [8, 12] },
              { loc: [13, 17] },
              { loc: [19, 20] },
            ]}
          />

          <CodeSlide
            transition={['fade']}
            lang="jsx"
            textSize="20px"
            code={require('raw!../assets/code/hoc-ex5.example')}
            ranges={[
              { loc: [0, 18] },
              { loc: [0, 1] },
              { loc: [1, 18] },
              { loc: [1, 2] },
              { loc: [3, 7] },
              { loc: [8, 12] },
              { loc: [13, 17] },
              { loc: [19, 21] },
            ]}
          />

          <Slide transition={['fade']}>
            <CodePane
              lang="jsx"
              textSize="1.3rem"
              source={require('raw!../assets/code/hoc-ex6.example')}
            />
          </Slide>

          <Slide
            transition={['fade']}
            notes={
              <div>
                Enfin, un concept important en FP qui peut être appliqué à React est la composition.<br/>
                Les fonctions (et les composants) peuvent être combinées pour produire de nouvelles fonctions avec des caractéristiques et des propriétés plus avancées.<br/>
                Suivant ce paradigme, nous avons de fonctions simples et concise, facilement testables, qui peuvent être composées ensemble.
              </div>
            }
          >
            <Text caps bold textColor="secondary" textAlign="left">Compose All the Things</Text>
            <Appear>
              <CodePane
                lang="js"
                textSize="1.1rem"
                source={
`const add = (x, y) => x + y
const square = x => x * x`
                }
              />
            </Appear>
            <Appear>
              <CodePane
                lang="js"
                textSize="1.1rem"
                source={'const addAndSquare = (x, y) => square(add(x, y))'}
              />
            </Appear>
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

          {/* Function As Child pattern */}
          <Slide
            transition={['slide', 'spin']}
            notes={
              <div>
                C’est un pattern qui gagne en consensus au sein de la communauté React, appelé Function as Child.
                Il est largement utilisé dans la bibliothèque populaire react-motion.
                Le concept principal est que, au lieu de passer un enfant sous la forme d'un composant, nous définissons une fonction qui peut recevoir des paramètres du parent.
              </div>
            }
          >
            <Heading caps fit size={1} textColor="secondary">Function</Heading>
            <Heading caps fit size={1} textColor="tertiary">As Child</Heading>
          </Slide>

          <Slide transition={['fade']}>
            <CodePane
              lang="js"
              textSize="1.3rem"
              source={
`const Name = ({ children }) => children('World')

Name.propTypes = {
  children: React.PropTypes.func.isRequired,
}`
              }
            />
            <Appear>
              <CodePane
                lang="jsx"
                textSize="1.3rem"
                source={`
<Name>
  {name => <div>Hello, {name}!</div>}
</Name>
                  `}
              />
            </Appear>
            <Appear>
              <CodePane
                lang="jsx"
                textSize="1.3rem"
                source={'<div>Hello, World!</div>'}
              />
            </Appear>
          </Slide>

          <Slide transition={['fade']}>
            <MotionExample />
            <CodePane
              lang="jsx"
              source={require('raw!../assets/code/motion.example')}
              textSize="1.3rem"
            />
          </Slide>

          <Slide transition={['slide', 'spin']}>
            <Heading caps size={1} textColor="secondary">~ TIPS ~</Heading>
            <Heading caps fit size={1} textColor="tertiary">JSX Spread Attributes</Heading>
            <Heading caps size={1} textColor="secondary"> AND </Heading>
            <Heading caps fit size={1} textColor="tertiary">Destructuring Arguments</Heading>
          </Slide>

          {/* Spread attributes */}
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
                      Useful with HOCs
                    </ListItem>
                  </Appear>
                  <Appear>
                    <ListItem textSize="0.9em">
                      Avoid '...rest' argument
                    </ListItem>
                  </Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>

          {/* Conditionnal rendering */}
          <Slide transition={['slide', 'spin']}>
            <Heading caps size={1} textColor="secondary">~ TIPS ~</Heading>
            <Heading caps size={1} textColor="tertiary">Conditional</Heading>
            <Heading caps size={1} textColor="secondary">rendering</Heading>
          </Slide>

          <Slide transition={['slide']} align="center flex-start">
            <Heading size={2} textColor="tertiary" >
              {'<Chuck belgium />'}
            </Heading>
            <br />
            <Chuck belgium />
          </Slide>

          <CodeSlide
            transition={['fade']}
            lang="jsx"
            textSize="20px"
            code={require('raw!../assets/code/conditional0.example')}
            ranges={[
              { loc: [0, 21] },
              { loc: [2, 6] },
              { loc: [14, 15] },
              { loc: [2, 21] },
            ]}
          />

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

          <CodeSlide
            transition={['fade']}
            lang="jsx"
            textSize="20px"
            code={require('raw!../assets/code/conditional01.example')}
            ranges={[
              { loc: [7, 12] },
            ]}
          />

          <CodeSlide
            transition={['fade']}
            lang="jsx"
            textSize="26px"
            code={require('raw!../assets/code/conditional-jsx.example')}
            ranges={[
              { loc: [0, 1] },
              { loc: [2, 5] },
              { loc: [6, 19] },
              { loc: [20, 23] },
            ]}
            notes={
              <div>
                Si vous n'aimez pas mélanger le javascript pure et le JSX : jsx-control-statements<br />
                plugin babel<br />
                Uniquement du sucre syntaxique<br />
                Si vous pensez que ça rendra votre code plus lisible, vous avez cette possibilité, c'est à vous de voir...
              </div>
            }
          />

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
            <Image src={images.childToParent.replace('/', '')} height="100px" />
            <Text bold textColor="secondary" textAlign="left">
              Callbacks
            </Text>
            <List textColor="tertiary">
              <ListItem>Pass a function to the child as a prop</ListItem>
              <ListItem>Don't forget to declare propTypes</ListItem>
            </List>
            <CodePane
              lang="jsx"
              textSize="1.1rem"
              source={'<MyChild myFunc={this.handleChildFunc.bind(this)} />'}
            />
          </Slide>

          <Slide transition={['fade']} align="flex-start flex-start">
            <Text bold textColor="secondary" textAlign="left">
              Tips : React Binding Patterns
            </Text>
            <Appear>
              <CodePane
                lang="jsx"
                textSize="1.2rem"
                source={
`// Bind in render
<MyChild myFunc={this.handleChildFunc.bind(this)} />`
                }
              />
            </Appear>
            <Appear>
              <CodePane
                lang="jsx"
                textSize="1.2rem"
                source={
`// Arrow function in render
<MyChild myFunc={e => this.handleChildFunc(e)} />`
                }
              />
            </Appear>
            <Appear>
              <CodePane
                lang="jsx"
                textSize="1.2rem"
                source={
`// Bind in constructor
constructor(props) {
  super(props);
  this.handleChildFunc = this.handleChildFunc.bind(this);
}`
                }
              />
            </Appear>
            <Appear>
              <CodePane
                lang="jsx"
                textSize="1.2rem"
                source={
`// Use Arrow Function in Class Property
handleChildFunc = () => {
  // call this function from render
  // and this.whatever in here works fine.
};`
                }
              />
            </Appear>
          </Slide>

          <Slide transition={['fade']} align="flex-start flex-start">
            <Image src={images.siblingToSibling.replace('/', '')} height="100px" />
            <Text bold textColor="secondary" textAlign="left">
              Parent Component
            </Text>
            <CodePane
              lang="jsx"
              textSize="1rem"
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
