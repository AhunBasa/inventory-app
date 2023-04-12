const express = require("express");
const router = express.Router();
const categories_controller = require("../controllers/categories");

router.get("/", categories_controller.categories_list_get);

router.get("/create", categories_controller.categories_create_get);

router.post(
  "/create",
  categories_controller.categories_create_validate,
  categories_controller.categories_check_duplicates,
  categories_controller.categories_create_post
);

router.get(
  "/:id",
  categories_controller.get_category,
  categories_controller.categories_details
);

router.get("/:id/delete", categories_controller.categories_delete_get);

router.post("/:id/delete", categories_controller.categories_delete_post);

router.get("/:id/update", categories_controller.categories_update_get);

router.patch("/:id/update", categories_controller.categories_update_patch);

module.exports = router;
