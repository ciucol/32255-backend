import fs from 'fs'
import { Blob } from 'buffer'

const readPackage = async () => {
  try {
    const data = await fs.promises.readFile('./package.json', 'utf-8')
    const contenidoString = data
    const contenidoObjeto = JSON.parse(data)
    const size = new Blob([data]).size

    const info = {
      contenidoStr: contenidoString,
      constenidoObj: contenidoObjeto,
      size
    }
    console.log(info)

    await fs.promises.writeFile('./info.json', JSON.stringify(info, null, '\t'))
  } catch (error) {
    throw new Error(error)
  }
}

readPackage()
