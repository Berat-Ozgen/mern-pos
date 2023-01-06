const { response } = require("express");
const Category = require("../models/Category.js");
const router = require("express").Router();

// tüm kategorileri getir
router.get("/get-all", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json("hata");
  }
});

// yeni kategori ekle
router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res
      .status(200)
      .json(`${newCategory.title} kategorilere  başarılı bir şekilde eklendi`);
  } catch (error) {
    res.status(500).json(error);
  }
});

// kategoriyi güncelleme
router.put("/update-category", async (req, res) => {
  try {
    await Category.findOneAndUpdate(req.body.categoryId, req.body);
    res.status(200).json("başarılı bir şekilde güncellendi");
  } catch (error) {
    res.status(400).json("hata");
  }
});

// kategoriyi silme
router.delete("/delete-category", async (req, res) => {
  try {
    await Category.findOneAndDelete(req.body.categoryId);
    res.status(200).json("başarılı bir şekilde silindi");
  } catch (error) {
    res.status(400).json("hata");
  }
});

module.exports = router;
