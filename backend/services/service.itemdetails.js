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
                        let val = JSON.parse(`{
                            "prodId": \"${values[i].ProdId}\",
                            "shelfId": \"${values[i].ShelfId}\", 
                            "prodImg": \"${values[i].Prodimg}\",
                            "nutInfo": \"${values[i].Nutrinfo}\",
                            "desc": \"${values[i].Details}\",
                            "mfg": \"${values[i].Mfg}\",
                            "exp": \"${values[i].Exp}\",
                            "sName": \"${values[i].Sellerinfo.SellerName}\",
                            "sAddr": \"${values[i].Sellerinfo.SellerAddress}\",
                            "sCont": \"${values[i].Sellerinfo.SellerContact}\"
                        }`)
                        res.status(200).send(val);
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