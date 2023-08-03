// Pregunta 1

//    " Aquí, lo que hice fue pasar el string dado por el ChatGPT para saber en qué base estaba codificado.
// Luego de saber que esta en Base64, aplique la función atob() que lo que hace es decodificar strings que están codificados en Base64 (puede ser mediante btoa).
// Primero se convierte el texto en array de caracteres decodificados en el [...atob(text)].map y después se crea una matriz de bytes, mediante la función Uint8Array.
// Todo esto para utilizar la función TextDecoder para poder decodificar en utf-8 y obtener los acentos."

function decoder(text) {
  const textArray = new Uint8Array(
    [...atob(text)].map((char) => char.charCodeAt(0))
  );
  const decodedText = new TextDecoder().decode(textArray);

  console.log(decodedText);
}

const text = `VGUgZmVsaWNpdG8sIHN1cGVyYXN0ZSBlc3RhIHBydWViYS4gVGUgcGlkbyBxdWUgdG9tZXMgY2FwdHVyYSBkZSBwYW50YWxsYSBkZSBlc3RvIGp1bnRvIGNvbiBsYSBmZWNoYSB5IGhvcmEgeSBub3MgZW52w61lcyBlc3RhIGNhcHR1cmEgZW4gdW4gZW1haWwganVudG8gY29uIGVsIHJlc3RvIGRlIGxvcyBkZXNhZsOtb3MuIFBvciBmYXZvciBleHBsaWNhbm9zIGVuIGVsIG1haWwgY29tbyByZXNvbHZpc3RlIGVsIGFjZXJ0aWpvLg==`;
decoder(text);

// Pregunta 2

/*  
    Según la documentación oficial de Microsoft, el error 945 es debido a  que la base de datos no puede acceder a sus archivos o los recursos se perdieron. 
    Esto puede deberse a diferentes causas, tales como: Falta de espacio en el disco duro, ataques de malware, cierre inadecuado de la base de datos,
    corrupción de los logs de la base de datos cuando se está queriendo recuperar, entre otros.  
*/

// Pregunta 3

// Este es un ejemplo de la secuencia de fibonacci, con la diferencia que empieza en 1 y continua con 1.618 y sigue con la secuencia "i-2 + i-1"

function riddle(num) {
  const res = [1, 1.618];

  for (let i = 0; res.length < num; i++) {
    const element = res[i] + res[i + 1];
    res.push(+element.toFixed(3)); // "+foo" convierte element en un Number para poder aplicar toFixed()
  }
  console.log(res);
  return res;
}
riddle(7);
