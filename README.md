# neo-node

> Meta library for common Node.js dependencies necessary / recommended for developing Neo Sentinels.

## Terminology
- **Neotask**: A Neotask is a job / task processed or created by so called Sentinels.
- **Sentinel**: Fancy name for a worker consuming / producing Neotasks. They are usually not that evil.
- **Particle**: All tasks / messages / responses flowing through the Neo internals are generalized as „particles“. Particles can be the payload for tasks, the response to the Neo client or just some metadata. Particles have to be objects – official particle types will be specified in the future.

## Installation
```bash
npm i --save neo-node
```

## Tasks
```js
const neotask = require('neo-node').task

// processing tasks requires a queue name
// the particle will be passed to the provided processor
// the "processor" can then return a promise
neotask.process('neo.aurora.intent.hello_world', (particle) => {
  return { reply: { string: 'Hi there, how are you today?' } }
})

// the task / message can contain anythin
// for best compatibility it should be a particle
neotask.create('neo.aurora.intent.hello_world', {
  foo: 'bar'
})
```

## Logging (optional)
> Module for logging information (based on Winston).
```js
const logger = require('neo-node').log

logger.info('Neo informs.')
logger.warn('Neo warns.')
logger.error('aaaah, houston?')
```

## i18n (optional)
> Module for Internationalization (based on i18n). Translations should be placed in the root folder under `/locales`.
```js
const i18n = require('neo-node').i18n
```