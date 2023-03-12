import connectDB from "../../../server/database/connection"
import { getProduct, deleteProduct } from "../../../server/database/controller"


export default async function handler(req, res) {

    connectDB().catch(error => console.log(error))

    const { method } = req

    switch(method){
      case 'GET':
        await getProduct(req, res)
        break;
      case 'DELETE':
        await deleteProduct(req, res)
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowed`)
        break;
    }

  }