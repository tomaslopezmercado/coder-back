const fs = require('fs');

try{
    fs.writeFileSync('./fyh.txt', Date().toString());
    const datosArchivo = fs.readFileSync('./fyh.txt', 'utf-8');
    console.log(datosArchivo);
}catch (e){
    throw new Error(`hubo un error`)
}