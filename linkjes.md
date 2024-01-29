# Linkjes en Bronnen

# Updates Node 2024

https://javascript.plainenglish.io/node-js-18-unveiled-whats-new-for-developers-in-2024-fdebe3930c35

In short:
- ESModules new standard
- [Private fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)
- Improved test runner (yay!)

# CommonJS vs ESModules

https://www.freecodecamp.org/news/modules-in-javascript/

```js
//old - don't use anymore
({ mod1Function, mod1Function2 } = require('./mod1.js'))

//better!
import { mod1Function } from './mod1.js'

```

# Micro Services vs Monolith 

https://www.linkedin.com/pulse/shift-back-monolithic-architecture-why-some-big-making-boudy-de-geer/

> "Improved Performance: Tightly coupled components in monolithic applications can result in **lower latency** and better performance than microservices-based applications, as there is no need for communication between separate services."

> "Running multiple independent microservices can lead to increased infrastructure **costs << $$$$$$$.**"

https://engineeringatscale.substack.com/p/microservices-vs-monolith-battle

> "Scalability - The build times and deployment times are more. It becomes difficult to deploy simple features or bug fixes. As a result, fast growing organizations can’t scale with this type of architecture."


# Express - Getting Started

https://expressjs.com/en/starter/installing.html