const express = require("express");
const router = express.Router();
const { createContact,getContacts, deleteContact} = require("../controllers/contactController");

const validateRequest = require("../middlewares/validateRequest");
const { createContactSchema } = require("../validations/validation");


router.post("/",validateRequest(createContactSchema),createContact);

router.get("/",getContacts);

router.delete("/:id",deleteContact);

module.exports = router;
