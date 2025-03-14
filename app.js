const express = require("express")
const mongoose = require('mongoose');
const methodOverride = require("method-override")
const path = require('path');

/////////////// DATABASE CONNECTION ///////////////

const uri = "mongodb+srv://anandupadhya:ducM1eb751QvZs90@cluster0.65rrg.mongodb.net/tiny_tiles?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB Atlas");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
}

connectDB()

/////////////// DATABASE MODELS ///////////////

const projectSchema = new mongoose.Schema({
    title: String,
    artist: String,
	password: String,
    pixelGrid: [[String]],
}, 
{ 
    collection: 'projects',
    timestamps: true,
})

const Project = mongoose.model("Project", projectSchema)

/////////////// DATABASE SEED DATA ///////////////

const seedDB = async () => {
	await Project.deleteMany({})
	
	await Project.create({
		title: "Lonely Yellow Pixel",
		artist: "Anand",
		password: "12345",
		pixelGrid: [
			["#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
			["#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
			["#000000", "#000000", "#FFFF00", "#000000", "#000000", "#000000"],
			["#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
			["#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
		]
	})
	
	await Project.create({
		title: "Lonely Cyan Pixel",
		artist: "Anand",
		password: "12345",
		pixelGrid: [
			["#000000", "#000000", "#000000", "#000000", "#000000"],
			["#000000", "#000000", "#000000", "#000000", "#000000"],
			["#000000", "#000000", "#00FFFF", "#000000", "#000000"],
			["#000000", "#000000", "#000000", "#000000", "#000000"],
			["#000000", "#000000", "#000000", "#000000", "#000000"],
		]
	})
	
	await Project.create({
		title: "Fish",
		artist: "Anand",
		password: "12345",
		pixelGrid: [["#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#212121","#212121","#212121","#212121","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9"],["#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#212121","#880e4f","#880e4f","#880e4f","#880e4f","#212121","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9"],["#efebe9","#efebe9","#efebe9","#efebe9","#212121","#212121","#212121","#e91e63","#e91e63","#e91e63","#880e4f","#880e4f","#880e4f","#212121","#efebe9","#efebe9","#efebe9","#efebe9","#212121","#212121","#212121","#212121","#efebe9"],["#efebe9","#efebe9","#efebe9","#212121","#ef6c00","#ffa000","#e91e63","#ffa000","#e91e63","#ffa000","#e91e63","#ad1457","#880e4f","#880e4f","#212121","#efebe9","#efebe9","#212121","#ffa000","#e91e63","#880e4f","#880e4f","#212121"],["#efebe9","#efebe9","#212121","#ef6c00","#ffa000","#ef6c00","#ffa000","#e91e63","#ffa000","#e91e63","#ffa000","#e91e63","#e91e63","#ad1457","#880e4f","#212121","#212121","#ffa000","#e91e63","#880e4f","#212121","#212121","#efebe9"],["#efebe9","#212121","#ffa000","#ffa000","#ef6c00","#ffa000","#ef6c00","#ffa000","#e91e63","#ffa000","#e91e63","#ffa000","#e91e63","#e91e63","#ad1457","#880e4f","#212121","#e91e63","#880e4f","#212121","#efebe9","#efebe9","#efebe9"],["#212121","#ffa000","#ffffff","#212121","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#880e4f","#e91e63","#880e4f","#212121","#efebe9","#efebe9","#efebe9"],["#212121","#ffa000","#212121","#212121","#bbdefb","#bbdefb","#212121","#212121","#bbdefb","#bbdefb","#bbdefb","#bbdefb","#bbdefb","#bbdefb","#bbdefb","#546e7a","#212121","#e91e63","#e91e63","#880e4f","#212121","#efebe9","#efebe9"],["#efebe9","#212121","#bbdefb","#bbdefb","#bbdefb","#bbdefb","#bbdefb","#bbdefb","#212121","#bbdefb","#bbdefb","#bbdefb","#bbdefb","#bbdefb","#546e7a","#546e7a","#212121","#e91e63","#e91e63","#e91e63","#880e4f","#212121","#efebe9"],["#efebe9","#efebe9","#212121","#bbdefb","#bbdefb","#212121","#212121","#212121","#212121","#bbdefb","#bbdefb","#bbdefb","#bbdefb","#78909c","#546e7a","#212121","#efebe9","#212121","#880e4f","#880e4f","#880e4f","#880e4f","#212121"],["#efebe9","#efebe9","#efebe9","#212121","#78909c","#78909c","#78909c","#78909c","#78909c","#78909c","#78909c","#78909c","#78909c","#212121","#212121","#efebe9","#efebe9","#efebe9","#212121","#212121","#212121","#212121","#efebe9"],["#efebe9","#efebe9","#efebe9","#efebe9","#212121","#212121","#212121","#e91e63","#e91e63","#e91e63","#880e4f","#880e4f","#212121","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9"],["#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#212121","#212121","#212121","#212121","#212121","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9"]]
	})
	
	await Project.create({
		title: "Beach Ball",
		artist: "Anand",
		password: "12345",
		pixelGrid: [["#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9"],["#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#000000","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#f44336","#f44336","#f44336","#f44336","#f44336","#000000","#000000","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9"],["#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#000000","#f57c00","#ffffff","#ffffff","#ffffff","#ffffff","#f57c00","#f57c00","#f57c00","#f57c00","#f57c00","#f57c00","#f44336","#f44336","#f44336","#f44336","#ec407a","#000000","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9"],["#efebe9","#efebe9","#efebe9","#efebe9","#000000","#f57c00","#f57c00","#ffffff","#ffffff","#ffffff","#f57c00","#f57c00","#f57c00","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#f44336","#f44336","#f44336","#ec407a","#ec407a","#000000","#efebe9","#efebe9","#efebe9","#efebe9"],["#efebe9","#efebe9","#efebe9","#000000","#f57c00","#f57c00","#f57c00","#ffffff","#f57c00","#f57c00","#f57c00","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#f44336","#f44336","#ec407a","#ec407a","#ffffff","#000000","#efebe9","#efebe9","#efebe9"],["#efebe9","#efebe9","#000000","#f57c00","#f57c00","#f57c00","#f57c00","#f57c00","#f57c00","#f57c00","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#f44336","#ec407a","#ec407a","#ffffff","#ffffff","#000000","#efebe9","#efebe9"],["#efebe9","#000000","#f57c00","#f57c00","#f57c00","#f57c00","#f57c00","#f57c00","#f57c00","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#ffffff","#ffffff","#ec407a","#ffffff","#ffffff","#ffffff","#000000","#efebe9"],["#efebe9","#000000","#b71c1c","#b71c1c","#b71c1c","#f44336","#f44336","#f44336","#f44336","#f44336","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#ffffff","#ffffff","#ffffff","#ffffff","#2196f3","#2196f3","#2196f3","#000000","#efebe9"],["#000000","#b71c1c","#b71c1c","#b71c1c","#f44336","#f44336","#f44336","#f44336","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#ffffff","#ffffff","#ffffff","#ffffff","#8bc34a","#2196f3","#2196f3","#000000"],["#000000","#b71c1c","#b71c1c","#b71c1c","#f44336","#f44336","#f44336","#f44336","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#2196f3","#ffffff","#ffffff","#ffffff","#8bc34a","#8bc34a","#33691e","#2196f3","#000000"],["#000000","#b71c1c","#b71c1c","#b71c1c","#f44336","#f44336","#f44336","#f44336","#f44336","#ffffff","#ffffff","#f44336","#f44336","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#2196f3","#2196f3","#2196f3","#ffffff","#2196f3","#8bc34a","#8bc34a","#33691e","#33691e","#000000"],["#000000","#b71c1c","#b71c1c","#b71c1c","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#ffeb3b","#ffeb3b","#ffeb3b","#ffeb3b","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#8bc34a","#8bc34a","#33691e","#33691e","#000000"],["#000000","#b71c1c","#b71c1c","#b71c1c","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#ffeb3b","#ffeb3b","#ffeb3b","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#8bc34a","#8bc34a","#33691e","#33691e","#000000"],["#000000","#b71c1c","#b71c1c","#b71c1c","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#8bc34a","#8bc34a","#33691e","#33691e","#000000"],["#000000","#b71c1c","#b71c1c","#b71c1c","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#8bc34a","#8bc34a","#33691e","#33691e","#000000"],["#000000","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#f44336","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#8bc34a","#8bc34a","#33691e","#33691e","#000000"],["#000000","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#f44336","#f44336","#f44336","#f44336","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#8bc34a","#33691e","#33691e","#33691e","#000000"],["#000000","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#f44336","#f44336","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#0d47a1","#33691e","#33691e","#33691e","#33691e","#000000"],["#efebe9","#000000","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#0d47a1","#33691e","#33691e","#33691e","#33691e","#000000","#efebe9"],["#efebe9","#000000","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#0d47a1","#0d47a1","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#0d47a1","#0d47a1","#0d47a1","#33691e","#33691e","#33691e","#33691e","#33691e","#000000","#efebe9"],["#efebe9","#efebe9","#000000","#b71c1c","#b71c1c","#b71c1c","#b71c1c","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#33691e","#33691e","#33691e","#33691e","#33691e","#000000","#efebe9","#efebe9"],["#efebe9","#efebe9","#efebe9","#000000","#b71c1c","#b71c1c","#b71c1c","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#33691e","#33691e","#33691e","#33691e","#000000","#efebe9","#efebe9","#efebe9"],["#efebe9","#efebe9","#efebe9","#efebe9","#000000","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#33691e","#33691e","#33691e","#000000","#efebe9","#efebe9","#efebe9","#efebe9"],["#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#000000","#000000","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#33691e","#33691e","#33691e","#000000","#000000","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9"],["#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#000000","#000000","#000000","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#0d47a1","#33691e","#33691e","#33691e","#33691e","#000000","#000000","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9"],["#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9","#efebe9"]]
	})
}

// seedDB()

/////////////// INITIALIZE & CONFIGURE APP ///////////////

const app = express()

app.use(methodOverride("_method"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.set("view engine", "ejs")

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

/////////////// ROUTES  ///////////////

// ROOT
app.get("/", async (req, res) => {
	res.redirect("/projects")
})

// PROJECTS - INDEX
app.get("/projects", async (req, res) => {
	const projects = await Project.find({})
	res.render("index", { projects })
	
})

// PROJECTS - SHOW
app.get("/projects/:projectId", async (req, res) => {
	const projectId = req.params.projectId
	const project = await Project.findById(projectId)
	const message = "Enter password to save"
	res.render("show", { project, message })
	
})

// PROJECTS - CREATE
app.post("/projects", async (req, res) => {
	const title = req.body.title
	const artist = req.body.artist
	const password = req.body.password
	
	const pixelGrid = []
	for (let r = 0; r < 10; r++) {
		const row = []
		for (let c = 0; c < 10; c++) {
			row.push("#FFFFFF")
		}
		pixelGrid.push(row)
	}
	
	const newProject = await Project.create({
		title,
		artist,
		password,
		pixelGrid,
	})
	
	res.redirect(`/projects/${newProject.id}`)
})

// PROJECTS - UPDATE
app.patch("/projects/:projectId", async (req, res) => {
	const projectId = req.params.projectId
	const password = req.body.password
	const pixelGrid = req.body.pixelGrid
	
	const project = await Project.findById(projectId)
	
	console.log(password)
	console.log(project.password)
	
	if (project.password === password) {
		await Project.findByIdAndUpdate(
			projectId,
			{ pixelGrid },
			{ new : true}
		)
		
		res.json({
			updated: true,
			message: "Changes have been saved!"
		})
	} else {
		res.json({
			updated: false,
			message: "Incorrect password! Changes not saved!"
		})
	}
})

/////////////// START SERVER ///////////////

app.listen(3000, () => {
    console.log("SERVER IS RUNNING")
})