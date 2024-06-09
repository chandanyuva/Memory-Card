async function ImageAPI() {
    // let data = fetch("").then((response) => response.json());
    const response = await fetch(
        "https://picsum.photos/v2/list?page=2&limit=10"
    );
    const data = await response.json();
    // console.log(data);
    const urlData = await data.map((ele,i) => {
        return {url:ele.download_url,key:i};
    });
    // console.log(urlData);
    return urlData;
}

export { ImageAPI };
