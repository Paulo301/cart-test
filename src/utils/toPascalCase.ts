export function toPascalCase(str: string){
  const arrayStr = str.split(' ').map((aStr) => {
    return (' ' + aStr).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
      return chr.toUpperCase()
    });
  });
  
  return arrayStr.join(' ');
}