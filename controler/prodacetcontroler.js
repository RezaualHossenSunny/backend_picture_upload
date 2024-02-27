const uploadcouladry = require("../utils/coludinary")

const prodacet= async (req,res)=>{
  const {path}=req.file
  const response = await uploadcouladry(path);
  console.log(response);
}

module.exports=prodacet