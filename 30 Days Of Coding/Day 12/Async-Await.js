// Async/Await
async function fetchData() {
  return "Data fetched";
}

async function getData() {
  try {
    let data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();