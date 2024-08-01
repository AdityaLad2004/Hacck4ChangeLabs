// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();

// app.use(cors({ origin: '*' }));
// app.use(express.json());

// mongoose.connect('mongodb+srv://adityalad2004:adityalad2004@cluster0.ftfwq8v.mongodb.net/labRequests?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// const requestSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     details: {
//       sender: String,
//       requirements: String
//     },
//     status: { type: String, enum: ['PENDING', 'ACCEPTED', 'REJECTED'], default: 'PENDING' }
//   }, { collection: 'lab' });

// const Request = mongoose.model('Request', requestSchema);

// app.get('/requests', async (req, res) => {
//   try {
//     console.log('Fetching requests...');
//     const requests = await Request.find();
//     console.log('Requests fetched:', requests);
//     res.json(requests);
//   } catch (error) {
//     console.error('Error fetching requests:', error);
//     res.status(500).send(error.message);
//   }
// });

// // Route to update the status of a request
// app.patch('/requests/:id', async (req, res) => {
//     const { id } = req.params;
//     const { status } = req.body;
  
//     if (!['ACCEPTED', 'REJECTED'].includes(status)) {
//       return res.status(400).send('Invalid status');
//     }
  
//     try {
//       const updatedRequest = await Request.findByIdAndUpdate(id, { status }, { new: true });
//       if (!updatedRequest) {
//         return res.status(404).send('Request not found');
//       }
//       res.json(updatedRequest);
//     } catch (error) {
//       console.error('Error updating request status:', error);
//       res.status(500).send('Error updating request status');
//     }
//   });

// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

mongoose.connect('mongodb+srv://adityalad2004:adityalad2004@cluster0.ftfwq8v.mongodb.net/labRequests?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const requestSchema = new mongoose.Schema({
    title: { type: String, required: true },
    details: {
      sender: String,
      requirements: String
    },
    status: { type: String, enum: ['PENDING', 'ACCEPTED', 'REJECTED'], default: 'PENDING' }
  }, { collection: 'lab' });

const Request = mongoose.model('Request', requestSchema);

// Change this route to /labrequests
app.get('/labrequests', async (req, res) => {
  try {
    console.log('Fetching requests...');
    const requests = await Request.find();
    console.log('Requests fetched:', requests);
    res.json(requests);
  } catch (error) {
    console.error('Error fetching requests:', error);
    res.status(500).send(error.message);
  }
});

// Change this route to /labrequests/:id
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
      console.error('Error updating request status:', error);
      res.status(500).send('Error updating request status');
    }
  });

app.listen(5004, () => {
  console.log('Server running on port 5004');
});
