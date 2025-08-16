const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet");

// Get all pets
router.get("/", async (req, res) => {
  const pets = await Pet.find();
  res.json(pets);
});

// Add a pet
router.post("/", async (req, res) => {
  const { name, type, age, description } = req.body;
  const newPet = new Pet({ name, type, age, description });
  await newPet.save();
  res.json(newPet);
});

// Mark pet as adopted
router.put("/:id/adopt", async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  if (!pet) return res.status(404).json({ msg: "Pet not found" });

  pet.adopted = true;
  await pet.save();
  res.json(pet);
});

module.exports = router;
