import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: ProductData } = req.body;
    const result = await ProductServices.createProductIntoDB(ProductData);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something Went Wrong!!",
      error,
    });
  }
};

export const ProductControllers = {
  createProduct,
};