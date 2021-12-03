const express=require("express");
const mongoose=require("mongoose");
const app=express();
const url = "mongodb+srv://Yashwant17:Basnett17@cluster0.fieph.mongodb.net/Database1?retryWrites=true&w=majority"

const lib=require("./schema");
mongoose.connect(url).then(()=>console.log("Database Connected"));
app.use(express.json());
app.post("/library",async(req,res)=>
        {
            const Bname=req.body.Bookname;
            const Stuname=req.body.Nameoftheissuer;
            const Doi=req.body.Duedate;
            try
            {
                const libr=new lib(
                    {
                        Bookname:Bname,
                        Nameoftheissuer:Stuname,
                        Duedate:Doi
                    }
                );
                const savedlib=await libr.save();
                res.json(
                    {
                        "message":"Data is saved",
                        "data":savedlib
                    }
                );
            }
            catch(err)
            {
                res.json(err);
            }
        }
);
app.use("/",(req,res)=>
        {
            res.send("Yashwant");
            res.json(
                {
                    
                }
            )
        }
    );
app.listen(3000,()=>console.log("Express Started"));