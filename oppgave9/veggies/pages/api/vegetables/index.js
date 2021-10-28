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

  else if (req.method === "GET") {

    res.status(200).json({ success: true, data: vegetables })

  } else {

  }

}
