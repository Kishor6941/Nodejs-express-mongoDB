let users = [
    {
        id : 1,
        name : "Kishor"
    },
    {
        id : 2,
        name : "Kiran"
    },
]


export const getUser = (req,res) => {
    console.log(req.query.name)
    console.log(req.params?.id)
    res.send(req.params.id ? users.find(u => u.id == req.params.id) : users)
}

export const getUserById = (req,res) => {
    let {id} = req.params;
    let user = users.find(u => u.id == id);
    if(user){
        res.send(user)
    }else{
        res.status(404).send({message : "User not found"})
    }
}

export const createUser = (req,res) => {
    let {name} = req.body;
    const newUser = {
        id : users.length + 1,
        name
    }
    users.push(newUser)
    res.status(201).send({message : "User created successfully", user : newUser})
}

export const updateUser = (req,res) => {
    let {id} = req.params;
    let {name} = req.body;
    let user = users.find(u => u.id == id);
    if(user){
        user.name = name;
        res.send({message : "User updated successfully", user})
    }else{
        res.status(404).send({message : "User not found"})
    }
}

export const deleteUser = (req,res) => {
    let {id} = req.params;
    users = users.filter(u => u.id != id);
    res.send({message : "User deleted successfully"})
}

export const getUserNameAndId = (req,res) => {
    let {name,id} = req.params;
    let user = users.find(u => u.id == id && u.name.toLowerCase() === name.toLowerCase());
    if(user){
        res.send(user)
    }else{
        res.status(404).send({message : "User not found"})
    }
}

export const viewEngineTest = (req,res) => {
    const userName = "Kishor Phawade";
    res.render('index',{ userName})
}

export const formDataTest = (req,res) => {
    console.log(req.body)
    const {email,password} = req.body;
    res.send(`Email: ${email}, Password: ${password}`)
}

export const throwError = (req,res) => {
    throw new Error("This is a test error");
}