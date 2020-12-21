module.exports = {
    get: async (req, res) => {

        arrays = req.body.matriz
        det = calcMatrix(arrays)
        return res.json({ det: det })
    },

}

function calcMatrix(matrix) {
    for (i = 0; i < matrix[0].length - 1; i++) {

        for (j = i + 1; j < matrix[0].length; j++) {

            // if the pivot is 0, swap with non-zero pivot line
            if (matrix[i][i] == 0) {
                var n = i + 1
                while (matrix[n][i] == 0)
                    n++;
                swapLine(matrix, i, n)
            }

            var kappa = matrix[j][i] / matrix[i][i]

            for (k = i; k < matrix[0].length; k++) {
                matrix[j][k] = matrix[j][k] - kappa * matrix[i][k]
            }

        }
        console.log(matrix)
    }


    // multiply diagonal
    var det = 1
    for (i = 0; i < matrix[0].length; i++) {
        det *= matrix[i][i]
    }
    return det
}
function swapLine(matrix, i, n) {
    for (k = 0; k < matrix[0].length; k++) {
        var aux = -matrix[i][k]
        matrix[i][k] = matrix[n][k]
        matrix[n][k] = aux
    }
    return
}