import express from "express"; // Using ES6 import
import connectDB from "./dbConfig/dbConfig.js";
import StudentModel from "./model/student_model.js";
import bcrypt from "bcryptjs";
import AdminModel from "./model/admin-model.js";
import cors from "cors";
import BookModel from "./model/book.js";
// import multer from "multer";

const app = express();

// Middleware to parse JSON
app.use(express.json());
// app.use(express.urlencoded({extended:false}));// yooo
app.use(cors());

// Establish database connection
connectDB();

// Home API
app.get("/home", (req, res) => {
  res.send("This is the home page");
});

// Product Page API
app.get("/product/page", (req, res) => {
  res.json({ msg: "Product page" });
});

// API to register students in the database
app.post("/student-register", async (req, res) => {
  const { email, password, name } = req.body;
  console.log(email, password, name);

  try {
    // Check if the email already exists
    const checkEmail = await StudentModel.findOne({ email });
    if (checkEmail) {
      return res.status(409).json({ msg: "Email already exists" }); // 409 Conflict
    } else {
      //hasing password
      const hasingpassword = await bcrypt.hash(password, 10);

      // Create a new student
      const createStudent = new StudentModel({
        email,
        password: hasingpassword,
        name,
      });

      await createStudent.save();

      if (createStudent) {
        res.status(200).json({
          msg: "Student registered successfully",
          data: createStudent,
        });
      } else {
        res.status(500).json({ msg: "Error registering student" });
      }
    }
  } catch (error) {
    console.error("Error in /student-register API: ", error);
    res.status(500).json({ msg: "Internal server error", err: error.message }); // 500 Internal Server Error
  }
});

//API for login Student
app.post("/student-login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password)
      return res
        .status(400)
        .json({ msg: "Please enter both email and password" });
    //check credentials
    const validateuser = await StudentModel.findOne({ email });
    if (!validateuser)
      return res.status(400).json({ msg: "Email doesnot match" });

    const isMatch = await bcrypt.compare(password, validateuser.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }
    if (validateuser && isMatch) {
      return res.status(200).json({ status: 200, msg: "Login Sucaessful" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", err: ErrorEvent.message });
  }
});

// API to register Admin in the database
app.post("/Admin-register", async (req, res) => {
  try {
    const { email, password, name, role, phone, address } = req.body;

    //hasing password
    const hasingpassword = await bcrypt.hash(password, 10);

    // Create a new student
    const createdAdmin = new StudentModel({
      email,
      password: hasingpassword,
      name,
    });

    await createdAdmin.save();

    if (createdAdmin) {
      return res
        .status(200)
        .json({ msg: "Admmin Create sucessfully", data: createdAdmin });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Internal error", err: error.message });
  }
});

//API for login Admin
app.post("/Admin-login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password)
      return res
        .status(400)
        .json({ msg: "Please enter both email and password" });
    //check credentials
    const validatAdmin = await AdminModel.findOne({ email });
    if (validatAdmin) {
      return res.status(400).json({ msg: "Email doesnot match" });
    }

    //check password
    const isMatch = await bcrypt.compare(password, validatAdmin.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ msg: "Invalid credentials", err: error.messages });
    }
    if (isMatch) {
      return res.status(200).json({ msg: "Login Sucaessful" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", err: error.message });
  }
});

//map array sanga matra aau cha
// user viewing
app.get("/user/list", async (req, res) => {
  try {
    const users = await StudentModel.find();
    if (users) {
      const totaldata = { totalstudent: users.length };
      const data = users.map((user) => ({
        name: user.name,
        email: user.email,
      }));
      return res
        .status(200)
        .json({ msg: "Users list", totaldata: totaldata, data: data });
    } else {
      return res.status(400).json({ msg: "No users found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", err: error.message });
  }
});

// //API for upolading image
// const upload= multer({dest:"uploads/"});   /////yoooooo

// app.post("/upload",upload.single(),(req,res)=>{
//   console.log(req.body);
//   console.log(req.file);
// })

//API to store the book
app.post("/uploadBook", async (req, res) => {
  try {
    const { bookname, author, genre, desription, publishdate } = req.body;
    if (!bookname || !author || !genre || !desription || !publishdate) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    //validation for not storing the mutiple bookname
    const BookExist = await BookModel.findOne({ bookname }); ///
    if (BookExist) {
      return res.status(400).json({ msg: `${bookname} already exists` });
    }

    //Storing book in database
    const storeBook = new BookModel({
      bookname,
      author,
      genre,
      desription,
      publishdate,
    });
    await storeBook.save();

    if (storeBook) {
      return res
        .status(200)
        .json({
          status: 200,
          msg: "Book stored successfully",
          data: storeBook,
        });
    }
  } catch {
    return res
      .status(500)
      .json({ msg: "internal server error", err: error.message });
  }
});
//API for update book
app.patch("/updateBook/:id", async (req, res) => {   //patch=update
  try {
    const {id} = req.params;

// validation for id is wrong
    if(!id){
      return res.status(400).json({msg:"id is required"})
    }

// updating book
const updateBook = await BookModel.findByIdAndUpdate(id,{$set:req.body}, {new:true})

if(updateBook){
  return res.status(200).json({msg:"Book updated successfully",status:200, data:updateBook})
}else{
  return res.status(404).json({msg:"Book not found",status:404})
}


  }catch(error){
    return res.status(500).json({ msg: "internal server error", err: error.message});

  }
});

//API to delete the single book
app.delete("/deleteBook/:id", async (req, res) => {
  try {
    const { id } = req.params;
// validation for id is wrong
    if (!id) {
      return res.status(400).json({ msg: "id is required" });
    }
    // delete book
    const deleteBook = await BookModel.findByIdAndDelete(id);

    if(deleteBook){
      return res.status(200).json({msg:"Book deleted successfully", data:deleteBook.bookname})
    }

  }catch(error){
    return res.status(500).json({ msg: "internal server error", err: error.message})
  }
})

// Start server on port 3000
app.listen(3000, () => console.log("Server started at port 3000"));
