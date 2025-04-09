const Batch = require('../../Model/Batch');


exports.getBatches = async (req, res) => {
  try {
    const batches = await Batch.find();
    res.json(batches);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.createBatch = async (req, res) => {
  console.log("Received batch data:", req.body); 
  try {
    const newBatch = new Batch(req.body);
    await newBatch.save();
    res.status(201).json(newBatch);
  } catch (error) {
    console.error("Error saving batch:", error);
    res.status(500).json({ message: "Error saving batch", error });
  }
};



exports.updateBatch = async (req, res) => {
  try {
    const updatedBatch = await Batch.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBatch);
  } catch (error) {
    res.status(500).json({ message: 'Error updating batch' });
  }
};


exports.deleteBatch = async (req, res) => {
  try {
    await Batch.findByIdAndDelete(req.params.id);
    res.json({ message: 'Batch deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting batch' });
  }
};
