const { body, validationResult } = require("express-validator");
const Category = require("../models/category");

exports.categories_list_get = async (req, res) => {
  try {
    const categories = await Category.find();
    res.render("categories/categories_list", {
      title: "Categories",
      categories: categories,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.categories_create_get = (req, res) => {
  res.render("categories/category_create_form", {
    title: "Create category",
    errors: [],
  });
};

exports.categories_create_validate = [
  body("title")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Enter valid category name"),

  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("categories/category_create_form", {
        title: "Create category",
        errors: errors.array(),
      });
      return;
    }

    next();
  },
];

exports.categories_check_duplicates = async (req, res, next) => {
  try {
    const result = await Category.find({ title: req.body.title });
    res.redirect("/categories");
    return;
  } catch (error) {
    console.log(error);
  }
  next();
};

exports.categories_create_post = async (req, res) => {
  const category = new Category(req.body);

  try {
    const result = await category.save();
    res.redirect("/categories");
  } catch (error) {
    console.log(error);
  }
};

exports.categories_details = async (req, res) => {
  res.render("categories/category_details", {
    title: res.category.title,
    category: res.category,
  });
};

exports.categories_update_get = async (req, res) => {
  res.send("Update");
};

exports.categories_update_patch = (req, res) => {
  res.send("Categories update patch not implemented");
};

exports.categories_delete_get = (req, res) => {
  res.send("Categories delete get not implemented");
};

exports.categories_delete_post = (req, res) => {
  res.send("Categories delete post not implemented");
};

exports.get_category = async (req, res, next) => {
  let category;
  try {
    category = await Category.findById(req.params.id);
    if (category === null) {
      res.status(404).json({ massage: "Category not found" });
      return;
    }
  } catch (error) {
    res.status(500).json({ massage: error.massage });
    return;
  }

  res.category = category;
  next();
};
