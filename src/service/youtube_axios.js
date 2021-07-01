class YoutubeAxios {
  constructor(keyValue) {
    this.key = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: {
        key: keyValue,
      },
    });
  }
  // dependency injection을 줄이기 위해서는 this.key를
  // 밖 index.js으로 빼서 인자로 받아오면 된다.
  async initUpdate() {
    const response = await this.youtube.get("videos", {
      params: {
        part: snippet,
        chart: mostPopular,
        maxResults: 25,
      },
    });
    return response.data.items;
    // try {
    //   const response = await fetch(
    //     `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    //     this.requestOptions
    //   );
    //   const result_1 = await response.json();
    //   return result_1.items;
    // } catch (error) {
    //   return console.log("error", error);
    // }
  }

  async search(query) {
    const response = await this.youtube.get("videos", {
      params: {
        part: snippet,
        chart: mostPopular,
        maxResults: 25,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    //   try {
    //     const response = await fetch(
    //       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
    //       this.requestOptions
    //     );
    //     const json = await response.json();
    //     return json.items.map((item) => ({ ...item, id: item.id.videoId }));
    //   } catch (error) {
    //     return console.log("error", error);
    //   }
  }
}

export default YoutubeAxios;
