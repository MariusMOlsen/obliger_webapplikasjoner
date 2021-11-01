// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const vegetables = [
  {
    name: "zukini"
  },
  {
    name: "onion"
  },
  {
    name: "pepper"
  },
  {
    name: "brocoli"
  }
]

export default function handler(req, res) {
  if (req.method === "POST") {

    const data = req.body
    vegetables.push(data)
    res.status(201).json({ success: true, data: vegetables })
  }

  if (req.method === "GET") {


    if (req.query.name) {
      try {
        let response = null
        for (const item of vegetables) {
          if (req.query.name === item.name) {
            response = item
          }
        }
        if (response !== null) {

          res.status(200).json({ success: true, name: response })
        } else {

          res.status(404).json({ success: false })
        }
      } catch (error) {
        console.log(error)
      }
    } else {

      res.status(200).json({ success: true, data: vegetables })
    }



  }
}