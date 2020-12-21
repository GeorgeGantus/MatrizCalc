module.exports = {
    get: async (req, res) => {

        arrays = req.body.matriz
        var det = calcMatrix(arrays)

        return res.json({ det })
    },
}

function calcMatrix(matrix) {
    matrixLength = matrix[0].length
    for (i = 0; i < matrixLength - 1; i++) {

        for (j = i + 1; j < matrixLength; j++) {

            // if the pivot is 0, swap with non-zero pivot line
            if (matrix[i][i] == 0) {
                var n = i + 1
                while (matrix[n][i] == 0)
                    n++;
                swapLine(matrix, matrixLength, i, n)
            }

            var kappa = matrix[j][i] / matrix[i][i]

            for (k = i; k < matrixLength; k++) {
                matrix[j][k] = matrix[j][k] - kappa * matrix[i][k]
            }

        }
    }


    // multiply diagonal
    var det = 1
    for (i = 0; i < matrixLength; i++) {

        det *= matrix[i][i]
    }

    return det
}
function swapLine(matrix, matrixLength, i, n) {
    for (k = 0; k < matrixLength; k++) {
        var aux = -matrix[i][k]
        matrix[i][k] = matrix[n][k]
        matrix[n][k] = aux
    }
    return
}
