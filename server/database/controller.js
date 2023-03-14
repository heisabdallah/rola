
import Product from "../model/productModel"
import Feedback from "../model/feedbackModel"

// GET 
const getProducts = async (req, res) => {
    try{
        const products = await Product.find({})
        res.status(200).json(products)

    }catch(error) {
        res.status(404).json({ error: "Products not found" })
    }
}

// GET SINGLE PRODUCT 
const getProduct = async (req, res) => {
    try{
        const { productId} = req.query
        const product = await Product.findById(productId)
        res.status(200).json(product)

    }catch(error) {
        res.status(404).json({ error: "Product not found" })
    }
}

// POST 
const postProducts = async (req, res) => {
    try {
      const formData = req.body;
      await Product.create(formData)
      res.redirect(302, '/products');

    } catch (error) {
        res.redirect(302, '/products');
        console.log(error);
    }
  };

// UPDATE 
const updateProduct = async (req, res) => {
    try {
        const { productId} = req.query
        const formData = req.body

        if(productId && formData){
            const product = await Product.findByIdAndUpdate(productId, formData)
            res.status(200).json(product)
        }

    } catch (error) {
        res.status(404).json({error: "Error while Updating Product!"})
    }
}

// DELETE 
const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.query
        const product = await Product.findByIdAndDelete(productId)
        res.status(200).json({ deleted: productId })

    } catch (error) {
        res.status(404).json({error: "Error while Deleting Product!"})
    }
}

const postFeedback = async (req, res) => {
    try {
        const formData = req.body;
        await Feedback.create(formData)
        res.redirect(302, '/feedback');
        setTimeout(() =>{
            res.redirect('/');
        },3000)
    } catch (error) {
        console.log(error);
    }
}

const getFeedbacks = async (req, res) => {
    try{
        const feedbacks = await Feedback.find({})
        res.status(200).json(feedbacks)

    }catch(error) {
        res.status(404).json({ error: "No feedback found" })
    }
}

export {
    getProducts,
    getProduct,
    postProducts,
    updateProduct,
    deleteProduct,
    postFeedback,
    getFeedbacks
}