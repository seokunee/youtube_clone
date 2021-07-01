class Youtube {
  constructor(keyValue) {
    this.key = keyValue;
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async initUpdate() {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=24&key=${this.key}`,
        this.requestOptions
      );
      const result_1 = await response.json();
      return result_1.items;
    } catch (error) {
      return console.log("error", error);
    }
  }

  async search(query) {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&type=video&key=${this.key}`,
        this.requestOptions
      );
      const json = await response.json();
      return json.items.map((item) => ({ ...item, id: item.id.videoId }));
    } catch (error) {
      return console.log("error", error);
    }
  }
}

export default Youtube;
