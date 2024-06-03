export default async function ApiCall() {
  const url = "https://fakestoreapi.com/products";
  const res = await fetch(url);
  const data = res.json();

  console.log(data);
  return data;
}
