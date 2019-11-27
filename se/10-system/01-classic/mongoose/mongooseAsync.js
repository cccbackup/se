const mongoose = require('mongoose')

async function main() {

  mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true,  useUnifiedTopology: true})
  
  const Cat = mongoose.model('Cat', { name: String })
  
  const kitty = new Cat({ name: 'Zildjian' })
  await kitty.save()
  console.log('meow')
  await mongoose.connection.close()
}

main().catch((err)=>console.log(err))