export async function getData(){
    const response = await fetch ('http://hp-api.herokuapp.com/api/characters')
    const data = response.json();
    return data;
  }