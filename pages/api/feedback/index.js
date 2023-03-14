import connectDB from "../../../server/database/connection"
import { getFeedbacks, postFeedback } from "../../../server/database/controller"


export default async function handler(req, res) {

    connectDB().catch(error => console.log(error))

    const { method } = req

    switch(method){
      case 'POST':
        await postFeedback(req, res)
        break;
      case 'GET':
        await getFeedbacks(req, res)
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
        break;
    }
}