export const multiply = (a:number,b:number) => {
    return a*b
}
export const array = (a:number,b:number) => {
    return [a,b]
}

export const fetchFromApi = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}