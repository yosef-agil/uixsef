const contentful = require('contentful')

const client = contentful.createClient({
  space: 'ex1p8m7peckv',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'jwi9_EKhkKt96yvVtuQ18JilDWxrb4bZCK_IOHQMhcs'
})

client.getEntry('5j5ojQPWLHhZzJkXeuwiJB')
  .then((entry) => console.log(entry))
  .catch(console.error)