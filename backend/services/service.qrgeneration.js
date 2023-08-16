var QRCode = require('qrcode');
//var jimp = require('jimp');
var fs = require('fs');
const { createCanvas, loadImage } = require("canvas");

module.exports = {
    test: async(req, res) => {
        try{
            
        } catch(err) {
            res.status(500).send({
                error: err
            })
        }
    },
    
    generateQR: async(req, res) => {
        try{
            var link = 'http://localhost:3000';
            const shelfId = req.body.shelfid;
            const prodId = req.body.prodid;
            let genLink = link + '/' + shelfId + '/' + prodId;
            let filePath = '../qrCodes/' + shelfId + '_' + prodId + '.png';

            const canvas = createCanvas(150, 150);
            QRCode.toCanvas(
                canvas,
                genLink,
                {
                    errorCorrectionLevel: "H",
                    margin: 1,
                    color:  {
                        dark: "#0f1d45",
                        light: "#ffffff",
                    },
                }
            );

            const ctx = canvas.getContext("2d");
            const img = await loadImage('../backend/public/images/icons.png');
            //const center = (100) / 2;
            ctx.drawImage(img, 50, 50, 50, 50);
            let base64string = canvas.toDataURL("image/png");
            let base64Image = base64string.split(';base64,').pop();

            fs.writeFile(filePath, base64Image, {encoding: 'base64'}, function(err) {
                //console.log('File created');
            });
            res.status(201).send({
                qrCode: base64string 
            })
        } catch(err) {
            console.log(err)
            res.status(500).send({
                error: err
            })
        }
    }
}