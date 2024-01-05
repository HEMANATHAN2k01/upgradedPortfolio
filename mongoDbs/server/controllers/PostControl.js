const BioData = require("../models/UserData");
const UuId = require("../utils/Uuid");

exports.Bio = async (req, res) => {
  const { Name, Course, Email, DoB, Year, BloodGroup, Address } = req.body;
  try {
    const createData = await BioData.create({
      BioId: UuId,
      Name: Name,
      Course: Course,
      DoB: DoB,
      Email: Email,
      Year: Year,
      BloodGroup: BloodGroup,
      Address: Address,
    });
    console.log(BioData);
    console.log(`Data Saved:`, createData);
    res.status(200).json(createData);
  } catch (error) {
    console.error("Error found:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
