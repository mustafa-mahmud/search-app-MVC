export const fetchSearchData = async (search) => {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${search}&gsrlimit=20&prop=pageimages|extracts&exchars=${200}&exintro&explaintext&exlimit=max&format=json&origin=*`
    );

    const data = res.json();

    return data;
  } catch (err) {
    throw err;
  }
};

export const processSearchDataArray = (data) => {
  return Object.values(data);
};
