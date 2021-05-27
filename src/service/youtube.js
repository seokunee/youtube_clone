class Youtube {
  constructor(keyValue) {
    this.key = keyValue;
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  initUpdate() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items)
      .catch((error) => console.log("error", error));
  }

  search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((json) =>
        json.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .catch((error) => console.log("error", error));
  }
}

export default Youtube;
