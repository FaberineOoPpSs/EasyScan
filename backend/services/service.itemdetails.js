var fs = require('fs');

module.exports = {
    fetchDetails: async(req, res) => {
        let filePath = '../db/data.json';
        try {
            let prodId = req.body.prodId;
            fs.readFile(filePath, 'utf8', function(err, data){
                let values = JSON.parse(data);
                for(let i = 0; i < values.length; i++) {
                    if(Number(values[i].ProdId) == Number(prodId)) {
                        res.status(200).send(values[i]);
                        break;
                    }
                }
            });
        }
        catch(err) {
            res.status(500).send({
                error: "err"
            })
        }
    }
}