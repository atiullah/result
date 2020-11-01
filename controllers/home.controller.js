require('../model/dbCotext')
module.exports = {
    home: async (req, res) => {


        res.render('resultView/home.ejs')
    },
    homeSearch: async (req, res) => {
        console.log(req.body.roll_number)
        var rollNo = req.body.roll_number
        const result = await StudentProfiles.findOne({ Enrolment_No: req.body.roll_number  });
         console.log(result)
        if (result != null) {
            res.render('resultView/searchPage.ejs',{
                result
            })
        }
        else {
            res.render('resultView/search404.ejs')
        }
        // 
    }
}