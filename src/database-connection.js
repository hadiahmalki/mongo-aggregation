const mongoose = require('mongoose')

// eslint-disable-next-line prefer-const
let connectionString = `mongodb+srv://Hadiah:greatlife13579@clustertravel.acgnixv.mongodb.net/sample_mflix?retryWrites=true&w=majority`

mongoose.set('debug', true)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(error => console.log('not connected:', error))
