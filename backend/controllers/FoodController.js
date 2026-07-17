
import foodModel from "../models/foodModel.js";


//add food item

const addFood = async (req, res) => {
    console.log(req.file);

    const image_url = req.file.path;

    console.log(image_url);

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_url,
    });

    try {

        
        const savedFood = await food.save();

        res.json({
            success: true,
            message: "Food Added",
            data: savedFood
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

//all food list
const listFood=async(req,res)=>{
    try{
        const foods=await foodModel.find({})
        res.json({success:true,data:foods})
    }catch(err){
        console.log(err);
        res.json({success:false,message:"Error"})
    }
}

//remove food item
const removeFood = async (req, res) => {
    try {
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Error" });
    }
}

export {addFood,listFood,removeFood}