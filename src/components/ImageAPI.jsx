import { v4 as uuidv4 } from "uuid";

async function ImageAPI() {
    // let data = fetch("").then((response) => response.json());
    const response = await fetch(
        "https://picsum.photos/v2/list?page=2&limit=10"
    );
    const data = await response.json();
    // console.log(data);
    const urlData = await data.map((ele) => {
        return { url: ele.download_url, key: uuidv4() };
    });
    // console.log(urlData);
    return urlData;
}

export { ImageAPI };
