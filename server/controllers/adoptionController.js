const Adoption = require("../models/Adoption");

exports.getAll = async (req, res) => {
  try {
    const adoptions = await Adoption.find().populate("pet");

    res.json(adoptions);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const adoption = await Adoption.findById(id);

    res.json(adoption);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.getByUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Find adoptions associated with the specified user ID
    const adoptions = await Adoption.find({ user: id })
      .populate("user") // Populate the 'user' field with data from the 'User' model
      .populate("pet"); // Assuming 'pet' is the field referencing the 'Pet' model

    res.json(adoptions);
  } catch (error) {
    console.error("Error fetching adoptions by user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.create = async (req, res) => {
  console.log(req.body);
  try {
    const {
      firstName,
      lastName,
      email,
      address,
      phone,
      aadharNumber,
      user,
      status,
      pet,
    } = req.body;

    const created = await Adoption.create({
      firstName,
      lastName,
      phone,
      email,
      address,
      aadharNumber,
      user,
      status,
      pet,
    });

    res.json({ message: "Adooptions successfuly created.", created });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, address, phone, pet } = req.body;

    const created = await Adoption.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        phone,
        email,
        address,
        pet,
      },
      { new: true }
    );

    res.json({ message: "Adooptions successfuly updated.", created });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.approove = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const created = await Adoption.findByIdAndUpdate(
      id,
      {
        status,
      },
      { new: true }
    );

    res.json({ message: "Adooptions successfuly updated.", created });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

//delete
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Adoption.findByIdAndDelete(id);

    res.json({ message: "Adoption succesfuly delete", deleted });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
