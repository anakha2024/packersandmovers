
const luggage=require('./LuggageSchema')
const packers=require('./packerSchema')
const rates=require('../Mover/rateSchema')
const jwt=require('jsonwebtoken')
//Packer Registration 

const registerPacker=(req,res)=>{
    const newPackers=new packers({
        name:req.body.name,
        gender:req.body.gender,
        city:req.body.city,
        district:req.body.district,
        contact:req.body.contact,
        email:req.body.email,
        password:req.body.password,
        pincode:req.body.pincode
    })
    newPackers.save().then(data=>{
        res.json({
            status:200,
            msg:"Inserted successfully",
            data:data
        })
    }).catch(err=>{
        res.json({
            status:500,
            msg:"Data not Inserted",
            Error:err
        })
    })
}
//Packer Registration -- finished

//Login Donor 
const secret = 'your-secret-key'; // Replace this with your own secret key

const createToken = (user) => {
  return jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
};

const login = (req, res) => {
  const { email, password } = req.body;

  packers.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Something went wrong' });
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

      if (user.password!=password) {
        return res.status(500).json({ message: 'Something went wrong' });
      }

    //   if (user.password!=password) {
    //     return res.status(400).json({ message: 'Invalid credentials' });
    //   }

      const token = createToken(user);

      res.status(200).json({ user, token });
    });
  
};
//validate
//const secret = 'your-secret-key'; // Replace this with your own secret key

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  console.log("t1",token);
  console.log("secret",secret);
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  jwt.verify(token, secret, (err, decodedToken) => {
    console.log(decodedToken);
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' ,err:err});
    }

    req.user = decodedToken.userId;
    next();
    return res.status(200).json({ message: 'ok' ,user:decodedToken.userId});
  });
  console.log(req.user);
};




//Login packers --finished


//View all packers

const viewPackers=(req,res)=>{
  packers.find().exec()
  .then(data=>{
    if(data.length>0){
    res.json({
        status:200,
        msg:"Data obtained successfully",
        data:data
    })
  }else{
    res.json({
      status:200,
      msg:"No Data obtained "
  })
  }
}).catch(err=>{
    res.json({
        status:500,
        msg:"Data not Inserted",
        Error:err
    })
})

}

// view Packers finished


//View all packers

const viewPackerById=(req,res)=>{
  packers.findById({_id:req.params.id}).exec()
  .then(data=>{
    
    res.json({
        status:200,
        msg:"Data obtained successfully",
        data:data
    })
  
}).catch(err=>{
    res.json({
        status:500,
        msg:"Data not Inserted",
        Error:err
    })
})

}

// view Packers finished

//update Packer by id
const editPackerById=(req,res)=>{

  // let data1=requireAuth(req,res)
  // console.log(data1);
    
  packers.findByIdAndUpdate({_id:req.params.id},{
    name:req.body.name,
    gender:req.body.gender,
    city:req.body.city,
    district:req.body.district,
    contact:req.body.contact,
    email:req.body.email,
    pincode:req.body.pincode
    })
.exec().then(data=>{
  res.json({
      status:200,
      msg:"Updated successfully"
  })
}).catch(err=>{
  res.json({
      status:500,
      msg:"Data not Updated",
      Error:err
  })
})
}


//Packer forgot password
const forgotPassword=(req,res)=>{
  packers.findOne({email:req.body.email}).exec()
  .then(data=>{
    if(data==null){
      res.json({
        status:500,
        msg:"User not Found"
    })
    }
    else{
      packers.findOneAndUpdate({email:req.body.email},{
        password:req.body.password
      }).exec().then(data=>{
        res.json({
          status:200,
          msg:"Updated successfully"
      })
    }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not Updated",
          Error:err
      })
    })
    }
  })
}
//finished -- forgot password

// del Packer by id
const deletePackerById=(req,res)=>{
  packers.findByIdAndDelete({_id:req.params.id}).exec()
  .then(data=>{
    
    res.json({
        status:200,
        msg:"Data obtained successfully",
        data:data
    })
  
}).catch(err=>{
    res.json({
        status:500,
        msg:"Data not Inserted",
        Error:err
    })
})

}




module.exports={registerPacker,viewPackerById,login,viewPackers,forgotPassword,deletePackerById,
  editPackerById,requireAuth}