import { v4 as uuidv4 } from "uuid";

async function ImageAPI() {
    const response = await fetch(
        "https://picsum.photos/v2/list?page=2&limit=10"
    );
    const data = await response.json();
    const urlData = await data.map((ele) => {
        return { url: ele.download_url, key: uuidv4() };
    });
    return urlData;
}

export { ImageAPI };
