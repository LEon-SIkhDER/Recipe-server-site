const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()


const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3000


app.get("/", (req, res) => {
  res.send("Cooking recipe server is running")

})
app.listen(port, () => {
  console.log("Cooking Recipe is running on:", port)
})


// mongoDb 
//  
//  



const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.7hhwads.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const recipeCollection = client.db("RecipeDb").collection("Recipes")

    app.get("/recipes", async (req, res) => {
      const result = await recipeCollection.find().toArray()
      res.send(result)
    })

    app.get("/recipes/:id", async (req, res) => {
      const id = req.params.id
      const query = {_id:new ObjectId(id) }
      const result = await recipeCollection.findOne(query)
      res.send(result)
    })

    app.get("/sort6", async(req,res)=>{
      const result = await recipeCollection.find().sort({likes:-1}).limit(6).toArray()
      res.send(result)
    })

    app.get("/my-recipe/:id", async(req,res)=>{
      const uid = req.params.id
      const query = {uid:uid}
      const result = await recipeCollection.find(query).toArray()
      res.send(result)


    })



    app.post("/recipes", async (req, res) => {
      const data = req.body
      console.log(data)
      const result = await recipeCollection.insertOne(data)
      res.send(result)
    })



















    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);












