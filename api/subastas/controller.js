const Subastas = require("./model");
const Subasta = require("./model");

const list = async (req, res) =>{
    //const subastas = await Subasta.find().populate("author", ["name", "pseudonym"]);
    const subastas = await Subasta.find();
    res.status(200).json({ subastas }) 
}

const createSubasta = (req, res) => {
    //const {name, published_date,  author} = req.body; 
    const {name, published_date,  description } = req.body; 
        const subasta = {
            name: name,
            published_date,
            //author,
            description,
        };
    
        const newSubasta = new Subasta(subasta);
        newSubasta.save().then((createdSubasta) => {
            res.status(200).json({ createdSubasta }); 
        })
};

const deleteSubasta = (req, res) => {
    const id = req.params.id;
    Subasta.deleteOne({ _id: id }).then((result) => {
      res.status(200).json({ result })
    })
};

const updateSubasta = async (req, res) => {
    const { name, published_date, description, id } = req.body;
    const userFound = await Subastas.find({ _id: id });
    if (userFound.length === 1) {
      const subasta = {
        name: name,
        published_date,
        //author
        description
      };
      Subasta.updateOne({ _id: id }, book).then((result) => {
        res.status(200).json(result);
      })
    } else {
      res.status(400).json({ error: "Subasta doesn't exits" });
    }
};

module.exports = {
    list,
    createSubasta,
    deleteSubasta,
    updateSubasta
}