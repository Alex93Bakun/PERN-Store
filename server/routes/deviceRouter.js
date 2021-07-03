const Router = require("express");
const router = new Router();
const deviceRouter = require("../controllers/deviceController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), deviceRouter.create);
router.get("/", deviceRouter.getAll);
router.get("/:id", deviceRouter.getOne);

module.exports = router;
