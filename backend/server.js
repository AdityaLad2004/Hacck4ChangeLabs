const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// CORS configuration
app.use(cors({
  origin: 'https://hacck4-change-labs-front.vercel.app', // Allow your frontend domain
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.options('*', cors());

mongoose.connect('mongodb+srv://username:password@cluster0.mongodb.net/labRequests?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const requestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  details: {
    sender: String,
    requirements: String
  },
  status: { type: String, enum: ['PENDING', 'ACCEPTED', 'REJECTED'], default: 'PENDING' }
}, { collection: 'lab' });

const Request = mongoose.model('Request', requestSchema);

app.get('/labrequests', async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch('/labrequests/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['ACCEPTED', 'REJECTED'].includes(status)) {
    return res.status(400).send('Invalid status');
  }

  try {
    const updatedRequest = await Request.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedRequest) {
      return res.status(404).send('Request not found');
    }
    res.json(updatedRequest);
  } catch (error) {
    res.status(500).send('Error updating request status');
  }
});

app.listen(5004, () => {
  console.log('Server running on port 5004');
});
