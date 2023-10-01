const asyncHandler = require("express-async-handler");
//@description Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res)=>{
    res.status(200).json({message: "Get all contacts"});
});

//@description Create New contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res)=>{
    console.log(`The requets body is:`, req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !body){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message: "Create Contact"});
});

//@description Create New contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res)=>{
    res.status(200).json({message:  `Update Contact for ${req.params.id}`});
});

//@description Get contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req, res)=>{
    res.status(200).json({message: `Get Contact for ${req.params.id}`});
});

//@description DELETE contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res)=>{
    res.status(200).json({message:  `Delete Contact for ${req.params.id}`});
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};