export default function handler(req, res) {
  let news = [
    {
      "id":"1",
      "title":"Article 1",
      "category":"sports",
      "des":"1111111111111"
    },
    {
      "id":"2",
      "title":"Article 2",
      "category":"politics",
      "des":"2222222222222"

    },
    {
      "id":"3",
      "title":"Article 3",
      "category":"sports",
      "des":"3333333333333"

    },
  ]
  if (req.query.category) {
    news = news.filter((data)=>{
      return data.category == req.query.category
    })
    res.json(news)
  } else {
    res.json(news)
  }
}
