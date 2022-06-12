const {User} = require('../model/User')


const viewData = (req, res) => {
    User.find((err, result) => {
        if(err) throw err
        res.render('index', {data : result})
    })
}

const viewError = (req, res) => {
    res.render('error', {})
}
// ADD DATA
const addData = async (req, res) => {
    let data = new User({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        age: req.body.age
    })

    let createdData = await data.save()
    res.status(200).redirect('/')
    return createdData

}
// DELETE DATA
const deleteData = async (req, res) => {
    let id = req.params.id
    let deleteData = await User.findByIdAndDelete(id)
    res.status(200).redirect('/')
    return deleteData

}

//UPDATE DATA
const updateViewData = async (req, res)=>{
    User.findById(req.params.id, (err, result) =>{
        if(err) throw err
        res.render('update', {first_name: result.first_name, last_name: result.last_name, age: result.age})
    })

}
const updateData = async (req, res) => {
    let data = new User({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        age: req.body.age
    })

    let updateData = await User.findOneAndUpdate({first_name: data.first_name, last_name: data.last_name, age: data.age})
    res.status(200).redirect('/')
    return updateData
}


module.exports = {
    viewData,
    viewError,
    addData,
    deleteData,
    updateData,
    updateViewData
}