module.exports = {
    get: async (req, res) => {
        console.log("teste2")
        const arrays = req.body.matriz
        return res.json({ array: arrays[0] })
    },

}