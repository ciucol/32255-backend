// console.log(process.cwd())

// console.log(process.pid)

// console.log(process.memoryUsage())

// process.env.PORT

// console.log(process.version)

if (process.argv[2] === 'user') {
  const user = process.argv[3]
  if (user === 'admin') {
    const users = await User.find()
    return users
  }
  return 'no eres admin'
}
return 'Es obligatorio enviar la propiedad user'
